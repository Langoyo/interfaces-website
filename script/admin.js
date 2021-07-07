//---------------------------------------------------------------------------------------------
// The ID of the currently logged user
//---------------------------------------------------------------------------------------------

currentParticipantID = 0;

//---------------------------------------------------------------------------------------------
// Database management functions
//---------------------------------------------------------------------------------------------

//Creates a new course and adds it to the database
function createCourse(name)
{
    //Determine the unique ID for the new course
    var maxID = 0;
    for(course in courses)
    {
        if(maxID < courses[course].id)
            maxID = courses[course].id;
    }
    //Create the course and add it to the database
    var newCourse = new Course(maxID + 1, name, false);
    courses.push(newCourse);
}

//Archives a course
function archiveCourse(id)
{
    //Find the course in the database
    course = getCourseByID(id);
    if(course != null)
        course.archived = true;
}

//Promotes a participant to teacher
function promoteToTeacher(id)
{
    //Find the participant in the database
    participant = getParticipantByID(id);
    if(participant != null)
    {
        if(participant.status == 'Student')
        {
            participant.status = 'Teacher';
        }
    }
}

//Enrols a participant in a course
function enrolParticipant(participantID, courseID)
{
    //Find the participant and course in the database
    participant = getParticipantByID(participantID);
    course = getCourseByID(courseID);
    if(course == null || participant == null)
        return;
    
    //Enrol the participant
    var alreadyEnrolled = false;
    for(enroledCourse in participant.courses)
    {
        if(participant.courses[enroledCourse] == courseID)
        {
            alreadyEnrolled = true;
        }
    }
    if(!alreadyEnrolled)
    {
        participant.courses.push(courseID);
        showAdminToolsPopup(participantID);
        return;
    }
}

//Removes a participant in a course
function removeParticipant(participantID, courseID)
{
    //Find the participant and course in the database
    participant = getParticipantByID(participantID);
    course = getCourseByID(courseID);
    if(course == null || participant == null)
        return;
    
    //Remove the participant from the course
    courseIndex = participant.courses.indexOf(courseID);
    if (courseIndex > -1)
    {
        participant.courses.splice(courseIndex, 1);
        showAdminToolsPopup(participantID);
        return;
    }
}

//---------------------------------------------------------------------------------------------
// HTML generation functions
//---------------------------------------------------------------------------------------------

//Sist of courses in the center panel
function showCourses()
{
    var contents = '<h1>Courses</h1>';
    contents += '<input id="create-course-button" type="button" value="Create course" class="submit" onclick="onCreateCourseClicked()"/>'
    contents += '<div id="course-list">';
    contents += '<ul>'
    for(course in courses)
    {
        contents += '<li>'
        contents += '<h2>' + courses[course].name + '</h2>';
        if(courses[course].archived)
            contents += '<p>Status: archived</p>';
        else
        contents += '<p>Status: running</p>';
        contents += '<input id="archive-course-button-' + courses[course].id + '" type="button" value="Archive course" class="submit" onclick="onArchiveCourseClicked(' + courses[course].id + ')"/>';
        contents += '</li>'
    }
    contents += '</ul>'
    contents += '</div>';
    document.getElementById("center-panel").innerHTML = contents;
}

//Show the list of participants in the center panel
function showParticipants()
{
    var contents = '<h1>Participants</h1>';
    for(participant in participants)
    {
        contents += '<div class="participant-div">';
        contents += '<div class="participant-img-div">';
        contents += '<img class="participant-img" src="' + participants[participant].picture + '" alt="participant' + participants[participant].name + 'Picture"/>';
        contents += '</div>';
        contents += '<div class="participant-info-div">';
        contents += '<div>';
        contents += '<h2>' + participants[participant].name + ' ' + participants[participant].surname + '</h2>';
        contents += '<p>' + participants[participant].status + '</p>';
        contents += '</div>';
        contents += '<div>';
        contents += '<p>' + participants[participant].email + '</p>';
        contents += '<img class="send-msg-icon" src="images/sendmsg.jpg" alt="SendMsg button" onclick="onSendMailClicked()"/>';
        contents += '</div>';
        contents += '<div>';
        if(participants[participant].status == 'Student' || participants[participant].status == 'Teacher')
            contents += '<input id="admin-tools-button-' + participants[participant].id + '" type="button" value="Administrator tools" class="submit" onclick="onAdminToolsClicked(' + participants[participant].id + ')"/>';
        contents += '</div>';
        contents += '</div>';
        contents += '</div>';
    }
    document.getElementById("center-panel").innerHTML = contents;
}

//Show the list of courses in the center panel, linked to their respective forum
function showForums()
{
    var contents = '<h1>Forums</h1>';
    contents += '<ul>';
    for(course in courses)
    {
        contents += '<li><a onclick="showForum(' + courses[course].id + ')">' + courses[course].name + '</a></li>';
    }
    contents += '</ul>';
    contents += '<br>';
    document.getElementById("center-panel").innerHTML = contents;
}

//Show the forum for a given course in the center panel
function showForum(courseID)
{
    course = getCourseByID(courseID);
    if(course == null)
        return;
    var contents = '<h1>Forums: ' + course.name + '</h1>';
    topics = getForumTopicsByCourseID(courseID);
    contents += '<ul>';
    for(topic in topics)
    {
        participant = getParticipantByID(topics[topic].participantID);
        contents += '<li>';
        contents += '<h2>' + topics[topic].title + '</h2>';
        if(participant == null)
            contents += '<h3>By: Removed participant</h3>';
        else
            contents += '<h3>By: ' + participant.name + ' ' + participant.surname + '</h3>';
        contents += '<p>' + topics[topic].date + '</p>';
        contents += '<p>' + topics[topic].text + '</p>';
        contents += '<input id="forum-show-more-button-' + topics[topic].id + '" type="button" value="Show more" class="submit" onclick="onForumShowMoreClicked(' + topics[topic].id + ')"/>';
        contents += '</li>';
    }
    contents += '</ul>';
    contents += '<input class="forum-new-topic-button" type="button" value="New topic" class="submit" onclick="onForumNewTopicClicked(' + courseID + ')"/>';
    document.getElementById("center-panel").innerHTML = contents;
}

//Show the forum topic with the given ID in the center panel 
function showForumTopic(topicID)
{
    topic = getForumTopicByID(topicID);
    if(topic == null)
        return;
    
    contents = '<h1>' + topic.title + '</h1>';
    participant = getParticipantByID(topic.participantID);
    if(participant == null)
        contents += '<h2>By: Removed participant</h2>';
    else
        contents += '<h2>By: ' + participant.name + ' ' + participant.surname + '</h2>';
    contents += '<p>' + topic.date + '</p>';
    contents += '<p>' + topic.text + '</p>';
    contents += '<h2>Replies:</h2>';
    contents += '<ul>';
    for(reply in topic.replies)
    {
        participant = getParticipantByID(topic.replies[reply].participantID);
        contents += '<li>';
        if(participant == null)
            contents += '<h2>By: Removed participant</h2>';
        else
            contents += '<h2>By: ' + participant.name + ' ' + participant.surname + '</h2>';
        contents += '<p>' + topic.replies[reply].date + '</p>';
        contents += '<p>' + topic.replies[reply].text + '</p>';
        contents += '</li>';
    }
    contents += '</ul>';
    //Add the reply textbox
    contents += '<h2>Reply:</h2>';
    contents += '<textarea id="forum-topic-reply-area"></textarea>';
    contents += '<input id="forum-reply-button" type="button" value="Reply" class="submit" onclick="onForumTopicReplyClicked(' + topicID + ')"/>';
    
    document.getElementById("center-panel").innerHTML = contents;
}

//Show the report problem interface in the center panel
function showReportProblem()
{
    contents = '<h1>Report a problem</h1>';
    contents += '<p id="text-report-problem">I you have found any issue in the platform, feel free to indicate what would you like to see improved!</p>';
    contents += '<br>';
    contents +='<textarea id="text-area-report-problem" name="text-area-email"';
    contents +=    'placeholder="Tell us what should we improve!"></textarea>'
    contents += "<br>";
    contents +='<p id="feedback-report-problem"></p>';
    contents +='<br>';
    contents +='<button id="button-report-problem" onclick="reportProblem()">Send</button>';
    document.getElementById("center-panel").innerHTML = contents;
}

//Show the administrator tools popup
function showAdminToolsPopup(participantID)
{
    //Find the participant by ID
    participant = getParticipantByID(participantID);
    if(participant == null)
        return;

    //Generate the popup window
    var contents = '';
    contents += '<div class="popup admin-tools-popup-window">';
    contents +=     '<input class="close-popup-button" type="button" value="X" class="submit" onclick="onAdminToolsCloseButtonClicked()"/>';
    contents +=     '<h1>Administrator tools</h1>';
    contents +=     '<div class="participant-div">';
    contents +=         '<div class="participant-img-div">';
    contents +=             '<img class="participant-img" src="' + participant.picture + '" alt="participant' + participant.name + 'Picture"/>';
    contents +=         '</div>';
    contents +=         '<div class="participant-info-div">';
    contents +=             '<div>';
    contents +=                 '<h2>' + participant.name + ' ' + participant.surname + '</h2>';
    contents +=             '</div>';
    contents +=             '<div>';
    contents +=                 '<p>' + participant.status + '</p>';
    contents +=             '</div>';
    contents +=             '<div>';
    contents +=                 '<p>' + participant.email + '</p>';
    contents +=             '</div>';
    contents +=             '<div>';
    if(participant.status == "Student")
        contents +=     '<input class="close-popup-button" type="button" value="Promote to teacher" class="submit" onclick="onAdminToolsPromoteToTeacherButtonClicked(' + participantID + ')"/>';
    else if(participant.status == "Teacher")
        contents +=     '<input class="close-popup-button" type="button" value="Demote from teacher" class="submit" onclick="onAdminToolsDemoteFromTeacherButtonClicked(' + participantID + ')"/>';
    contents +=             '</div>';
    contents +=         '</div>';
    contents +=     '</div>';
    contents +=     '<div class="admin-tools-popup-course-div">';
    contents +=         '<div class="admin-tools-courses-list">';
    contents +=             '<ul>'
    contents +=                 '<p>Current courses</p>';

    //Generate the list of courses
    var availableCoursesList = "";
    var enroled;
    for(course in courses)
    {
        enroled = false;
        for(enroledCourse in participant.courses)
        {
            if(participant.courses[enroledCourse] == courses[course].id)
            {
                contents += '<li>' + courses[course].name + '</li>';
                contents += '<input id="remove-participant-button-p' + participant.id + '-c' + courses[course].id + '" type="button" value="Remove" class="submit" onclick="removeParticipant(' + participant.id + ', ' + courses[course].id + ')"/>';
                enroled = true;
            }
        }
        if(!enroled)
        {
            availableCoursesList += '<li>' + courses[course].name + '</li>';
            availableCoursesList += '<input id="enrol-participant-button-p' + participant.id + '-c' + courses[course].id + '" type="button" value="Enrol" class="submit" onclick="enrolParticipant(' + participant.id + ', ' + courses[course].id + ')"/>';
        }
    }

    contents +=             '</ul>';
    contents +=             '<ul>';
    contents +=                 '<p>Available courses</p>';
    contents += availableCoursesList;
    contents +=             '</ul>';
    contents +=         '</div>';
    contents +=     '</div>';
    contents += '</div>';

    //Add the popup window to the fullscreen popup and show it on screen
    document.getElementById('fullscreen-popup').innerHTML = contents;
    $('#fullscreen-popup').show();
}

//Show the popup for creating a new course
function showCreateCoursesPopup()
{
    var contents = "";
    contents += '<div class="popup create-course-popup-window">';
    contents +=     '<p>Please enter a name for the new course</p>';
    contents +=     '<input id="create-course-textbox" type="text"/>';
    contents +=     '<input id="create-course-accept-button" type="button" value="Create" class="submit" onclick="onCreateCourseAcceptClicked()"/>';
    contents +=     '<input id="create-course-cancel-button" type="button" value="Cancel" class="submit" onclick="onCreateCourseCancelClicked()"/>';
    contents += '</div>';

    //Add the popup window to the fullscreen popup and show it on screen
    document.getElementById('fullscreen-popup').innerHTML = contents;
    $('#fullscreen-popup').show();
}

//Show the popup for creating a new topic in the given course's forum
function showNewTopicPopup(courseID)
{
    var contents = "";
    contents += '<div class="popup new-topic-popup-window">';
    contents +=     '<h1>Create new topic</h1>';
    contents +=     '<p>Title:</p>';
    contents +=     '<input id="new-topic-title-textbox" type="text"/>';
    contents +=     '<p>Text:</p>';
    contents +=     '<textarea id="new-topic-text-area"></textarea>';
    contents +=     '<input id="new-topic-accept-button" type="button" value="Create" class="submit" onclick="onNewTopicAcceptClicked(' + courseID + ')"/>';
    contents +=     '<input id="new-topic-cancel-button" type="button" value="Cancel" class="submit" onclick="onNewTopicCancelClicked(' + courseID + ')"/>';
    contents += '</div>';

    //Add the popup window to the fullscreen popup and show it on screen
    document.getElementById('fullscreen-popup').innerHTML = contents;
    $('#fullscreen-popup').show();
}

//---------------------------------------------------------------------------------------------
// HTML events
//---------------------------------------------------------------------------------------------

function onPageLoad()
{
    //Retrieve the participant info from local storage
    registered = localStorage.getItem("registered") == "Y";
    if(registered)
    {
        participant = JSON.parse(localStorage.getItem("newParticipant"));
        participants.push(participant);
        currentParticipantID = participant.id;
    }
    else
    {
        currentParticipantID = parseInt(localStorage.getItem("participantID"));
    }

    //Show the courses section
    onCoursesClicked();

    //Create the participant section of the header
    participant = getParticipantByID(currentParticipantID);
    if(participant == null)
        return;
    document.getElementById('header-name').innerHTML = participant.name + ' ' + participant.surname;
    document.getElementById('hide-name-dropdown').innerHTML = participant.name + ' ' + participant.surname;
    document.getElementById('header-pic').setAttribute("src", participant.picture);
}

function onSendMailClicked()
{
    window.location.href = "mailto:";
}

function onCoursesClicked()
{
    showCourses();
}

function onParticipantsClicked()
{
    showParticipants();
}

function onForumsClicked()
{
    showForums();
}

function onCreateCourseClicked()
{
    showCreateCoursesPopup();
}

function onArchiveCourseClicked(courseID)
{
    archiveCourse(courseID);
    showCourses();
}

function onAdminToolsClicked(participantID)
{
    showAdminToolsPopup(participantID);
}

function onAdminToolsPromoteToTeacherButtonClicked(participantID)
{
    //Find the participant in the database
    participant = getParticipantByID(participantID);
    if(participant == null)
        return;
    //Make the participant a teacher
    if(participant.status == "Student")
    {
        participant.status = "Teacher";
        showParticipants();
        showAdminToolsPopup(participantID);
    }
}

function onAdminToolsDemoteFromTeacherButtonClicked(participantID)
{
    //Find the participant in the database
    participant = getParticipantByID(participantID);
    if(participant == null)
        return;
    //Make the participant a student
    if(participant.status == "Teacher")
    {
        participant.status = "Student";
        showParticipants();
        showAdminToolsPopup(participantID);
    }
}

function onAdminToolsCloseButtonClicked()
{
    $('#fullscreen-popup').hide();
}

function onCreateCourseAcceptClicked()
{
    var courseName = document.getElementById('create-course-textbox').value;
    if(courseName == "")
    {
        return;
    }
    $('#fullscreen-popup').hide();
    //Determine the new ID for the course
    var maxID = 0;
    for(course in courses)
    {
        if(courses[course].id > maxID)
        {
            maxID = courses[course].id;
        }
    }
    //Add the new course
    courses.push(new Course(maxID + 1, courseName, false));
    showCourses();
}

function onCreateCourseCancelClicked()
{
    $('#fullscreen-popup').hide();
}

function onForumShowMoreClicked(topicID)
{
    showForumTopic(topicID);
}

function onForumNewTopicClicked(courseID)
{
    showNewTopicPopup(courseID);
}

function onNewTopicAcceptClicked(courseID)
{
    title = document.getElementById('new-topic-title-textbox').value;
    body = document.getElementById('new-topic-text-area').value;
    if(title == '' || body == '')
        return;
    $('#fullscreen-popup').hide();

    //Find an ID for the new topic
    maxID = 0;
    for(topic in forumTopics)
    {
        if(forumTopics[topic].id > maxID)
            maxID = forumTopics[topic].id;
    }
    date = new Date();
    newTopic = new ForumTopic(maxID + 1, courseID, currentParticipantID, title, body, date.getDate().toString() + "/" + (date.getMonth() + 1).toString() + "/" + date.getFullYear().toString(), []);
    forumTopics.push(newTopic);
    showForum(courseID);
}

function onNewTopicCancelClicked()
{
    $('#fullscreen-popup').hide();
}

function onForumTopicReplyClicked(topicID)
{
    //Do not allow empty reply
    text = document.getElementById('forum-topic-reply-area').value;
    if(text == '')
        return;
    //Find the topic
    topic = getForumTopicByID(topicID);
    if(topic == null)
        return;
    //Add the reply
    date = new Date();
    reply = new ForumPost(currentParticipantID, date.getDate().toString() + "/" + (date.getMonth() + 1).toString() + "/" + date.getFullYear().toString(), text);
    topic.replies.push(reply);
    showForumTopic(topicID);
}

function onLogOutClicked()
{
    if (confirm("Do you really want to exit?")) {
        window.location.replace("homepage.html");
      }   
}

function onReportProblemClicked()
{
    showReportProblem();
}

//---------------------------------------------------------------------------------------------
// Night mode
//---------------------------------------------------------------------------------------------


function changeColor()
{
    // navigation bars
    var navs = document.getElementsByTagName("nav");
    // change background
    var body = document.getElementsByTagName("body");
    // bars in footer
    var footer = document.getElementsByTagName("footer");
    var footerLinks = footer[0].querySelectorAll("a");
    // If dark
    if (navs[0].classList.contains("dark"))
    {
      // Change background colors
      body[0].classList.remove("dark_background");
      for(var i = 0; i < navs.length; i++)
      {
        // Change background color of the nav
        navs[i].classList.remove("dark");
        // Change font color of nav links
        var links = navs[i].querySelectorAll("a");
          for(var j = 0; j<links.length; j++)
          {
            links[j].classList.remove("dark");
          }  
      }
      for(var k=0;k<footerLinks.length;k++){
        footerLinks[k].classList.remove("dark_border");
      }
    }
    else
    {
      // Change background colors
      body[0].classList.add("dark_background");
  
      for(var i = 0; i<navs.length; i++){
        // Change background color of the nav
        navs[i].classList.add("dark");
        // Change font color of nav links
        var links = navs[i].querySelectorAll("a");
        for(var j = 0; j<links.length; j++)
        {
          links[j].classList.add("dark");
        }
      }
      for(var k=0;k<footerLinks.length;k++)
      {
        footerLinks[k].classList.add("dark_border");
      }
    }
  }

//---------------------------------------------------------------------------------------------
// Dropdown menus
//---------------------------------------------------------------------------------------------

function showDropdown(dropid)
{
    document.getElementById(dropid).classList.toggle("show");
}

//---------------------------------------------------------------------------------------------
// Report problem section
//---------------------------------------------------------------------------------------------

function reportProblem()
{
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