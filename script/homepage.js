/* Regular expressions */
var REGEXNIA = /^100[0-9]{6}$/;
var REGEXPASSWORD = /^([a-z]|[0-9]){1,8}$/;
var REGEXEMAIL = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
var REGEXID = /^[0-9]{8}[A-Z]{1}$/;

/**
 * Function triggered when a user submits the register form.
 * Checks the format of the nia, password and mail fields.
 * Displays alerts in case the data was wrong
 * Proceeds registers the user if everything is correct.
 * 
 * @returns false when there is an error so that the page is not reloaded
 */
function validateForm() {
  var nia = document.forms["register"]["NIA"].value;
  var password = document.forms["register"]["password"].value;
  var email = document.forms["register"]["email"].value;
  var confirm = document.forms["register"]["confirm-password"].value;
  var id = document.forms["register"]["national-id"].value;

  if (!REGEXNIA.test(nia)) {
      alert('A NIA is a number of 9 digits starting by 100');
      var nia = document.getElementById("NIA")
      nia.style.color ="#ff0000";
      document.forms["register"]["NIA"].focus();
      return false;

  } else if(!REGEXPASSWORD.test(password)) {
      alert('Passwords must only include numbers and lowercase letters. The maximum length is 8');
      document.forms["register"]["password"].focus();
      var password = document.getElementById("password")
      password.style.color ="#ff0000";
      return false;

  } else if(!REGEXEMAIL.test(email)){
      alert('Enter an email with format: name@domain.extension');
      document.forms["register"]["email"].focus();
      var email = document.getElementById("email");
      email.style.color ="#ff0000";
      return false;

  }else if(!REGEXID.test(id)){
      alert('An ID must have 8 digits and a capital letter: Ex: 10349378E');
      document.forms["register"]["national-id"].focus();
      var id = document.getElementById("national-id");
      id.style.color ="#ff0000";
      return false;

  }else if(confirm !== password){
        alert("Passwords don't coincide");
        document.forms["register"]["password"].focus();
        var password = document.getElementById("password")
        password.style.color ="#ff0000";
        var confirm = document.getElementById("confirm-password")
        confirm.style.color ="#ff0000";
        return false;
        
  }else{
    //Obtain a unique ID for the new participant
    maxID = 0;
    for(participant in participants)
    {
        if(participants[participant].id > maxID)
            maxID = participants[participant].id;
    }
    status = document.getElementById("role").value;
    if(status == 'student')
        status = 'Student';
    else if(status == 'teacher')
        status = 'Teacher';
    else
        status = 'Admin';
    //Save the data in local storage for the admin page to use
    newParticipant = new CourseParticipant(maxID + 1, document.getElementById("username").value, nia, document.getElementById("name").value, document.getElementById("surname").value, email, document.getElementById("birth").value, id, password, "images/default-profile.png", [], status);
    localStorage.setItem("registered", "Y");
    localStorage.setItem("newParticipant", JSON.stringify(newParticipant));
    localStorage.setItem("participantID", (maxID + 1).toString());    
    return register();
  }  
}

/*Resets the form if the user presses the reset button*/
function resetForm(){
    document.getElementById("register").reset();
};

/*If the role select changes, depending on its value 
it shows or hides the degree select*/
$(document).ready(function(){
$('#role').change(function(){
    if( $(this).val()==="student"){
    $("#hidden").show()
    }
    else{
    $("#hidden").hide()
    }
});
});

/*Uses the button show-register to change between login or register forms*/
function showRegister(){
    /*If the register form is hidden show it while hiding the login. Also the text of the third section is changed */
    if($('#register').is(':hidden')){

        $("#register").show()
        $("#login").hide()
        $("#change-text").html('Click <span id="change-form-link"onclick="showRegister()">here</span> to log in')
    }else{
        /*Otherwise show the login and hide the register*/
        $("#login").show()
        $("#register").hide()
        $("#change-text").html('Not registerd? Click <span id="change-form-link"onclick="showRegister()">here</span> to register')
    }
    
};

/**
 * Redirects user from homepage to login
 */
function redirectLogin(){
    $("#login-register-container").show()
    $("#homepage").hide()
}

function changeColorFocus(id){
    document.getElementById(id).style.color = "#ffffff";
}
// Dealing with the visibility of the reset password popup
function showPasswordPopUp(){
    $("#popup1").show()
}
function hidePopup(){
    $("#popup1").hide()
}