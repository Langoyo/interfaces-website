

/**
 * Stores the contents obtained from the form in document.cookie
 * 
 * @param {*} email 
 * @param {*} username 
 * @param {*} nia 
 * @param {*} password 
 * @param {*} name 
 * @param {*} surname 
 * @param {*} role 
 * @param {*} language 
 * 
 * 
 */
function setCookie(email, username, nia, password, name, surname, role, language) {
    var d = new Date();
    /**The cookie will expire in 1 week */
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();

    var dict = {
        "email": email,
        "username":username,
        "nia":nia,
        "password":password,
        "name":name,
        "surname":surname,
        "role":role,
        "language":language

    }
    var toStore = email + "=" + JSON.stringify(dict) + ";"
    document.cookie = toStore; 
    }
  

  
/**
 *  Method invoked when a user submits the register form.
 *  Checks if the user is already registered sending an alert in that case.
 *  Otherwise the form values into the cookie document.
 */
  function register(){
        var form = document.getElementById("register");
        var email = form.elements.namedItem("email").value;
        if(cookieExists(email)){

            alert("There is already an account associated with that email");
            return false;
        
        }else{
        
            var username = form.elements.namedItem("Username").value;
            var nia = form.elements.namedItem("NIA").value;
            var password = form.elements.namedItem("password").value;
            var name = form.elements.namedItem("Name").value;
            var surname = form.elements.namedItem("Surname").value;
            var role = form.elements.namedItem("role").value;
            var language = form.elements.namedItem("language").value;
            setCookie(email, username, nia, password, name, surname, role, language);
            alert("New user registered successfully.")
            return true;
        }

  };

  /**
   * Method invoked when the user submits login form.
   * Gets the cookie associated with the email and checks if the password is correct.
   */
  function login(){
      var form = document.getElementById("login");
      var email = form.elements.namedItem("Email").value;
      var password = form.elements.namedItem("Password").value;

      var result = getCookie(email);
      if(checkPassword(password,result))
      {
        //Find the participant in the database
        partID = 0;
        for(participant in participants)
        {
          if(participants[participant].email == email)
          {
            partID = participants[participant].id;
            localStorage.setItem("registered", "N");
            localStorage.setItem("participantID", partID.toString());
          }
        }
        return true;
      }


  };

  /**
   * Checks if the email key given is stored in document.cookie
   * @param {*} email 
   * 
   * @returns true if it is contained
   * @returns false if it is not contained
   */
  function cookieExists(email){
    var cookie = getCookie(email);
    if(cookie.length>0){
      return true;
    }
    return false;

  }

  /**
   * Given an email, it searches the corresponding cookie associated to that email
   * 
   * @param {*} email 
   * 
   * @returns cookie JSON value in string format
   * @returns empty string if the cookie couldn't be found
   */
  function getCookie(email) {
    var result = "";
    var name = email + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        var result = c.substring(name.length, c.length);
      
      }
    }
    return result;
  }

  /**
   * Given a JSON string with the user content, parses it and compares the stored
   * password with the password introduced by the user.
   * If the password is correct it stores the current user's information 
   * and redirects it to the main page.
   * 
   * @param {*} inputPassword 
   * @param {*} result JSON string with user information
   */
  function checkPassword(inputPassword, result){
    if(result.length>0){
        // Parsing JSON object
        var dictionary = JSON.parse(result);
        var storedPassword = dictionary["password"];
        // Comparing passwords
        if(storedPassword.localeCompare(inputPassword)==0){
          //Storage and redirection
          var role = dictionary["role"]
          sessionStorage.currentUser = result;
          alert("Wellcome back, " + dictionary["username"] )
          // Redirect user depending on the role
          if(role =="administrator"){
            location.replace("admin.html")
          }else{
            location.replace("index.html")
          }
          
        }else{
              alert("The introduced password is not correct");
              
      }
    }else{
      alert("User not registered. Check if the information is correct or register with a new user");
    }
    };