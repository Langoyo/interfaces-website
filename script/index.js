

/*Changes the middle conatiner of the page*/
function centralContentChange(newDiv) {
    /*Hides all the middle containers in the page*/
    $( ".middle-container" ).css({
        'display':'none'
    })
    // If the user is student and is being redirected to the grades section we show a table with only its grades
    if(newDiv==='#grades' && getFromUser("role")==="student"){
      assign_marks();
    }
  
    /*Displays the one that was passed as a parameter*/
    $(newDiv).css({
        'display':'block'
    })
};

function centralForumChange(SpecificCourse) {
  /*Hides all the middle containers in the page*/
  $( ".middle-container" ).css({
      'display':'none'
  })
  /*Displays the one that was passed as a parameter*/
  $('#forum2').css({
      'display':'block'
  })
  var text;
  if(SpecificCourse==='ai'){
      text="<tr><td class='my-td'><img src='images/profile/3.jpeg' alt='Bartek Fairuz' class='profile-pic'></td><td class='my-td'><p class='name'>Bartek Fairuz</p></td><td class='my-td'><p>This is AI</p></td>"+"<td class='my-td'><p>"+new Date().toLocaleString()+"</p></td class='my-td'></tr>";
      $("#course_forum").html("Artificial Intelligence Forum");
  }
  else if (SpecificCourse==='cripto'){
    text="<tr><td class='my-td'><img src='images/profile/3.jpeg' alt='Bartek Fairuz' class='profile-pic'></td><td class='my-td'><p class='name'>Bartek Fairuz</p></td><td class='my-td'><p>This is cripto</p></td>"+"<td class='my-td'><p>"+new Date().toLocaleString()+"</p></td></tr>";
    $("#course_forum").html("Criptography Forum");
  }
  else if (SpecificCourse==='database'){
    text="<tr><td class='my-td'><img src='images/profile/3.jpeg' alt='Bartek Fairuz' class='profile-pic'></td><td class='my-td'><p class='name'>Bartek Fairuz</p></td><td class='my-td'><p>This is Databases</p></td>"+"<td class='my-td'><p>"+new Date().toLocaleString()+"</p></td></tr>";
    $("#course_forum").html("Databases Forum");
  }
  else if (SpecificCourse==='software'){
    text="<tr><td class='my-td'><img src='images/profile/3.jpeg' alt='Bartek Fairuz' class='profile-pic'></td><td class='my-td'><p class='name'>Bartek Fairuz</p></td><td class='my-td'><p>This is Software</p></td>"+"<td class='my-td'><p>"+new Date().toLocaleString()+"</p></td></tr>";
    $("#course_forum").html("Software Engineering Forum");
  }
  else{
    text="<tr><td class='my-td'><img src='images/profile/3.jpeg' alt='Bartek Fairuz' class='profile-pic'></td><td class='my-td'><p class='name'>Bartek Fairuz</p></td><td class='my-td'><p>This is Operative Systems</p></td>"+"<td class='my-td'><p>"+new Date().toLocaleString()+"</p></td></tr>";
    $("#course_forum").html("Operative Systems Forum");
  }

  $("#appended").html(text);
};
function assign_marks() {
  /*Hides all the middle containers in the page*/
  $( ".middle-container" ).css({
      'display':'none'
  })
  /*Displays the one that was passed as a parameter*/
  $('#grades').css({
      'display':'block'
  })
  
    var mark1= (Math.random()*10).toFixed(2);
    var mark2= (Math.random()*10).toFixed(2);
    var mark3= (Math.random()*10).toFixed(2);

    text="<tr><td class='my-td'>"+getFromUser("name")+" " + getFromUser("surname")+"</td><td class='my-td'>"+mark1+"</td><td class='my-td'>"+mark2+"</td><td class='my-td'>"+mark3+"</td></tr>";
    $("#append_grades").html(text);
};

function centralContentChanges(newDiv){
  $(".middle-container").load("index_spanish.html ".concat(newDiv))
}
function logout(){
  var option;
  if (confirm("Do you really want to exit?")) {
    location.replace("homepage.html")
  }
};
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction(dropid) {
  document.getElementById(dropid).classList.toggle("show");
};

function fnExcelReport()
{
    
    var tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
    var textRange; var j=0;
    tab = document.getElementById('exceltab'); // id of table

    for(j = 0 ; j < tab.rows.length ; j++) 
    {     
        tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
        //tab_text=tab_text+"</tr>";
    }

    tab_text=tab_text+"</table>";
    tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
    tab_text= tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table
    tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE "); 

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
    {
        txtArea1.document.open("txt/html","replace");
        txtArea1.document.write(tab_text);
        txtArea1.document.close();
        txtArea1.focus(); 
        sa=txtArea1.document.execCommand("SaveAs",true,"Grades.xls");
        
    }  
    else{

      let a = $("<a />", {
        href: 'data:application/vnd.ms-excel,' + encodeURIComponent(tab_text),
        download: "Grades.xls"
    })
    .appendTo("body")
    .get(0)
    .click();
    e.preventDefault();
    }               
       

    return (sa);
};

$(document).ready(function(){
  $("#appendBTN").click(function(){
    $("#appended").append(
      "<tr><td class='my-td'><img src='images/default-profile.png' alt='Bartek Fairuz' class='profile-pic'></td><td class='my-td'><p class='name'>"+getFromUser("username")+"</p></td><td class='my-td'><p>"+ $('#append_button').val()+"</p></td>"+"<td class='my-td'><p>"+new Date().toLocaleString()+"</p></td></tr>"
      
      );
});
});


function getFromUser(dataField){
  var user = sessionStorage.currentUser;
  if(user.length>0 || typeof user != "undefined"){
    user = JSON.parse(user);
    return user[dataField]
   }

   return "Default user";

}

/**
 * Funcion that fetches the user content when the page loads
 */
 $(document).ready( function fetchUserContent(){
  
  // The user JSON string is obtained from the browser session storage
  var user = sessionStorage.currentUser;
  
  if(user.length>0){
    // The string is parsed and we update the name and surname of the user
   user = JSON.parse(user);
   var usernames = document.getElementsByClassName("username") 
    for(var i=0; i<usernames.length; i++){
      usernames[i].innerHTML = user["name"] + " " + user["surname"];
    }
    // We get the role and fetch the links and buttons that make the redirections in our page
   var role = user["role"];
   dropdown = document.getElementById("change-with-role-dropdown");
   header = document.getElementById("change-with-role-header");
   button = document.getElementById("change-with-role-button");
   // Teachers
   activitiesDrop = document.getElementById("activities-drop");
   activitiesButton = document.getElementById("activities-button");
   coursesTeacherButton = document.getElementById("courses-teacher-button");
   gradesTeacherButton = document.getElementById("teacher-grades-button");
   teacherGradesLinks = document.getElementById("teacher-grades-links");
   teacherMaterialsLinks = document.getElementById("teacher-materials-links"); 
   teacherGradesNav = document.getElementById("teacher-grades-nav");
    // Students
   coursesStudentButton = document.getElementById("courses-student-button");
   gradesStudentButton = document.getElementById("student-grades-button");
   studentGradesLinks = document.getElementById("student-grades-links");   
   studentMaterialsLinks = document.getElementById("student-materials-links");
   studentsGradesNav = document.getElementById("student-grades-nav");

    
   }

    
    if(role.localeCompare("student")!=0){
      // If the user is teacher we hide the studetns section
      dropdown.outerHTML = "<a id=\"change-with-role-dropdown\" onclick=\"centralContentChange('#students')\">Students</a>";
      header.outerHTML = "<a id=\"change-with-role-header\" onclick="+"centralContentChange('#students')"+">Students</a>";
      button.outerHTML = "<a class=\"button1\" id=\"change-with-role-dropdown\" onclick=\"centralContentChange('#students')\"><span>Students</span></a>";
      coursesStudentButton.style.display = "none";
      gradesStudentButton.style.display = "none";
      studentGradesLinks.style.display = "none";   
      studentMaterialsLinks.style.display = "none";
      studentsGradesNav.style.display = "none";
   
    
    }else{
      // If the user is student we hide the teacher links
      dropdown.outerHTML = "<a id=\"change-with-role-dropdown\"onclick=\"centralContentChange('#my-courses')\">My courses</a>";
      header.outerHTML = "<a id=\"change-with-role-header\" onclick=\"centralContentChange('#my-courses')\">My Courses</a>";
      button.outerHTML = "<a class=\"button1\" id=\"change-with-role-button\" onclick=\"centralContentChange('#my-courses')\"><span>My courses</span></a>";
      activitiesDrop.style.display = "none";
      activitiesButton.style.display = "none";
      coursesTeacherButton.style.display = "none";
      gradesTeacherButton.style.display = "none";
      teacherGradesLinks.style.display = "none";
      teacherMaterialsLinks.style.display = "none"; 
      teacherGradesNav.style.display = "none";
      
    }
   

  
  


  });

  function createCalendar(){
    if(myEvents.length == 0){
      myEvents = [
        { 
          id: "required-id-1",
          name: "New Year", 
          date: "Wed Jan 01 2020 00:00:00 GMT-0800 (Pacific Standard Time)", 
          type: "holiday", 
          everyYear: true 
        },
        { 
          id: "required-id-2",
          name: "Valentine's Day", 
          date: "Fri Feb 14 2020 00:00:00 GMT-0800 (Pacific Standard Time)", 
          type: "holiday", 
          everyYear: true,
          color: "#222"
        },
        { 
          id: "required-id-3",
          name: "Custom Date", 
          badge: "08/03 - 08/05",
          date: ["August/03/2020", "August/05/2020"],
          description: "Description here",
          type: "event", 
        },
        { 
          id: "required-id-4",
          name: "Grades publication", 
          badge: "Important!",
          date: "December/09/2020",
          description: "Publication of last grades",
          type: "event", 
        },
        { 
          id: "required-id-5",
          name: "AI exam", 
          badge: "Remember",
          date: "December/15/2020",
          description: "Last exam of the course",
          type: "event", 
        },
        { 
          id: "required-id-6",
          name: "Lab Case", 
          badge: "Holiday",
          date: "December/11/2020",
          description: "Local holiday, no classes that day. Recovery classes have to be scheduled.",
          type: "event", 
        },
        { 
          id: "required-id-7",
          name: "AI revision", 
          badge: "Remember",
          date: "November/15/2020",
          description: "Revision AI",
          type: "event", 
        },    
      ]}
      
      $('#evoCalendar').evoCalendar({
        calendarEvents: myEvents
      });
      
      $('#evoCalendar').evoCalendar({
        format: 'mm/dd/yyyy',
        titleFormat: 'MM yyyy',
        eventHeaderFormat: 'MM d, yyyy'
      });
      $('#evoCalendar').evoCalendar({
        language: 'en'
      });
        
      $('#evoCalendar').evoCalendar({
        todayHighlight: false
      });
      $('#evoCalendar').evoCalendar({
        sidebarToggler: true,
        sidebarDisplayDefault: true,
        eventListToggler: true,
        eventDisplayDefault: true,
      });
      $('#evoCalendar').evoCalendar({
        firstDayOfWeek: 1 // Monday
      });
      $('#evoCalendar').evoCalendar({
        onSelectDate: function() {
          // console.log('onSelectDate!')
        }
      });
        
    // toggle sidebar
    $("#evoCalendar").evoCalendar('toggleSidebar', true/false);
    
    // toggle event list
    $("#evoCalendar").evoCalendar('toggleEventList', true/false);
    
    // get the selected date
    $("#evoCalendar").evoCalendar('getActiveDate');
    
    // get active events
    $("#evoCalendar").evoCalendar('getActiveEvents');
    



    
    
  }
  myEvents = []

  function addEventCalendar(){
    var event = document.forms["form-add-event-calendar"]["name-event"].value;
    var date = document.forms["form-add-event-calendar"]["date-event"].value;
    var type = document.forms["form-add-event-calendar"]["type-event"].value;
    var newDate =   {
      id: event,
      name: event,
      date: date,
      type: type,
      everyYear: true
     }; 
     myEvents.push(newDate)
     events = myEvents;
  }

  function removeEventCalendar(){
    var id = document.forms["form-remove-event-calendar"]["name-event-remove"].value;
    var newEvents = [];
    for(var i = 0; i < myEvents.length; i++){
      if(id !== myEvents[i]["id"]){
        newEvents.push(myEvents[i])
        
      }
    }

    myEvents = newEvents;
    events = myEvents;

    $("#evoCalendar").evoCalendar('removeCalendarEvent', id);
    

    return false;
  }

// Plugin functions for the calendar plugin
$(document).ready(function(){
  if(myEvents.length == 0){
  myEvents = [
    { 
      id: "required-id-1",
      name: "New Year", 
      date: "Wed Jan 01 2020 00:00:00 GMT-0800 (Pacific Standard Time)", 
      type: "holiday", 
      everyYear: true 
    },
    { 
      id: "required-id-2",
      name: "Valentine's Day", 
      date: "Fri Feb 14 2020 00:00:00 GMT-0800 (Pacific Standard Time)", 
      type: "holiday", 
      everyYear: true,
      color: "#222"
    },
    { 
      id: "required-id-3",
      name: "Custom Date", 
      badge: "08/03 - 08/05",
      date: ["August/03/2020", "August/05/2020"],
      description: "Description here",
      type: "event", 
    },
    { 
      id: "required-id-4",
      name: "Grades publication", 
      badge: "Important!",
      date: "December/09/2020",
      description: "Publication of last grades",
      type: "event", 
    },
    { 
      id: "required-id-5",
      name: "AI exam", 
      badge: "Remember",
      date: "December/15/2020",
      description: "Last exam of the course",
      type: "event", 
    },
    { 
      id: "required-id-6",
      name: "Lab Case", 
      badge: "Holiday",
      date: "December/11/2020",
      description: "Defense and delivery of the lab case.",
      type: "event", 
    },
    { 
      id: "required-id-7",
      name: "AI revision", 
      badge: "Remember",
      date: "November/15/2020",
      description: "Revision AI",
      type: "event", 
    },     
  ]}
  
  $('#evoCalendar').evoCalendar({
    calendarEvents: myEvents
  });
  
  $('#evoCalendar').evoCalendar({
    format: 'mm/dd/yyyy',
    titleFormat: 'MM yyyy',
    eventHeaderFormat: 'MM d, yyyy'
  });
  $('#evoCalendar').evoCalendar({
    language: 'en'
  });
    
  $('#evoCalendar').evoCalendar({
    todayHighlight: false
  });
  $('#evoCalendar').evoCalendar({
    sidebarToggler: true,
    sidebarDisplayDefault: true,
    eventListToggler: true,
    eventDisplayDefault: true,
  });
  $('#evoCalendar').evoCalendar({
    firstDayOfWeek: 1 // Monday
  });
  $('#evoCalendar').evoCalendar({
    onSelectDate: function() {
      // console.log('onSelectDate!')
    }
  });

  // set theme
$("#evoCalendar").evoCalendar('setTheme', themeName);

// toggle sidebar
$("#evoCalendar").evoCalendar('toggleSidebar', true/false);

// toggle event list
$("#evoCalendar").evoCalendar('toggleEventList', true/false);

// get the selected date
$("#evoCalendar").evoCalendar('getActiveDate');

// get active events
$("#evoCalendar").evoCalendar('getActiveEvents');

// select a year
$("#evoCalendar").evoCalendar('selectYear', yearNumber);

// select a month
$("#evoCalendar").evoCalendar('selectMonth', monthNumber);

// select a date
$("#evoCalendar").evoCalendar('selectDate', dateNumber);

// add events
$("#evoCalendar").evoCalendar('addCalendarEvent', [{
  id: 'Event ID',
  name: "Event Name",
  date: "Date Here",
  type: "Event Type",
  everyYear: true
}]);

// remove events by ID
$("#evoCalendar").evoCalendar('removeCalendarEvent', eventID);

// destroy the calendar
$("#evoCalendar").evoCalendar('destroy');
$('#evoCalendar').evoCalendar({
  // options here
})
.on('selectDate', function(newDate, oldDate) {
  // do something
})
.on('selectMonth', function(activeMonth, monthIndex) {
  // do something
})
.on('selectYear', function(activeYear) {
  // do something
})
.on('selectEvent', function(activeEvent) {
  // do something
})
.on('destroy', function(calendar) {
  // do something
})
var dates = {
  en: {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      noEventForToday: "No event for today.. so take a rest! :)",
      noEventForThisDay: "No event for this day.. so take a rest! :)"
  },
  es: {
      days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
      daysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
      daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
      months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
      monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
      noEventForToday: "No hay evento para hoy.. ¡así que descanse! :)",
      noEventForThisDay: "Ningún evento para este día.. ¡así que descanse! :)"
  },
  de: {
      days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
      daysShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
      daysMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
      months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
      monthsShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
      noEventForToday: "Keine Veranstaltung für heute.. also ruhen Sie sich aus! :)",
      noEventForThisDay: "Keine Veranstaltung für diesen Tag.. also ruhen Sie sich aus! :)"
  },
  pt: {
      days: ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"],
      daysShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      daysMin: ["Do", "2a", "3a", "4a", "5a", "6a", "Sa"],
      months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      monthsShort: ["Jan", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      noEventForToday: "Nenhum evento para hoje.. então descanse! :)",
      noEventForThisDay: "Nenhum evento para este dia.. então descanse! :)"
      
  }
}

});

/**
 * Changes the color of some elements
 */
function changeColor() {
  // navigation bars
  var navs = document.getElementsByTagName("nav");
  // change background
  var grades = document.getElementById("container_gr");
  var buttons = document.getElementById("index-buttons");
  var popups = document.getElementsByClassName("figcaption-popup");
  var body = document.getElementsByTagName("body");
  // bars in footer
  var footer = document.getElementsByTagName("footer");
  var footerLinks = footer[0].querySelectorAll("a");
  // If dark
  if (navs[0].classList.contains("dark")){
    // Change background colors
    grades.classList.remove("dark_background");
    buttons.classList.remove("dark_background");
    body[0].classList.remove("dark_background");
    for(popupIndex in popups){
      popups[popupIndex].classList.remove("dark_background");
    }
    
    for(var i = 0; i<navs.length; i++){
      // Change background color of the nav
      navs[i].classList.remove("dark");
      // Change font color of nav links
      var links = navs[i].querySelectorAll("a");
        for(var j = 0; j<links.length; j++){
          links[j].classList.remove("dark");
        }  
    }
    for(var k=0;k<footerLinks.length;k++){
      footerLinks[k].classList.remove("dark_border");
    }
  }else{
    // Change background colors
    if(grades != null)
      grades.classList.add("dark_background");
    if(grades != null)
      buttons.classList.add("dark_background");
    body[0].classList.add("dark_background");
    revision.classList.add("dark_background");
    for(popupIndex in popups){
      popups[popupIndex].classList.add("dark_background");
    }

    for(var i = 0; i<navs.length; i++){
      // Change background color of the nav
      navs[i].classList.add("dark");
      // Change font color of nav links
      var links = navs[i].querySelectorAll("a");
      for(var j = 0; j<links.length; j++){
        links[j].classList.add("dark");
      }
    }
    for(var k=0;k<footerLinks.length;k++){
      footerLinks[k].classList.add("dark_border");
    }

  }

  
}

/**
 * Shows feedback on the report feedback screen when the user submits the report problem info
 */
function reportProblem(){
  var input = document.getElementById("text-area-report-problem");
  var feedback = document.getElementById("feedback-report-problem");
  // Check that the user introduced something
  if(input.value == ""){
    feedback.innerHTML = "Be sure to type something first, please."
    feedback.style.display = "block";
    feedback.style.color = "#ff0000";
  }else{
    feedback.innerHTML = "Thank you! Your message will be delivered to the adminsitrators."
    feedback.style.display = "block";
    feedback.style.color = "#008000";
  }
}
/* Search */
function mySearchDrop() {
  input=document.getElementById("mySearches");
  if(input.value==""){
  document.getElementById("content-searches").classList.remove("show");
  }
  else{
    document.getElementById("content-searches").classList.add("show");
  }

}

/**
 * Displays the links in the search bar
 */
function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearches");
  filter = input.value.toUpperCase();
  div = document.getElementById("mySearch");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

/**
 * Gives feedback to the users when he/she submits a delivery
 */
function changeStatus(){
  var check=document.getElementById("input-delivery");
  if(check.value!=""){
  var status = document.getElementById("delivery-status");
  // Check that the user introduced something
    status.innerHTML = "Status:<div id='submission'>Submitted</div>"
    status = document.getElementById("submission");
    submission.style.color = "green";
  }
  else{
    status.innerHTML = "Status:<div id='submission'>Not submitted</div>"
    submission.style.color = "red";
  }
}

/**
 * Gives feedback for a poll submission
 */
function submitPoll(){
  var poll=document.getElementById("submit-poll")
  
  var select=document.getElementById("select-poll")
  poll.innerHTML="Submitted for the "+select.value;
  poll.style.display="block";
}

/**
 * Gives feedback for a submission request
 */
function submitRevisionRequest(){
  var request = document.getElementById("feedback-request-review");
  request.innerHTML = "Your request has been processed";
  request.style.display="block";
}