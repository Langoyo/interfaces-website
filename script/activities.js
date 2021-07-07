

//Creates a new activity and adds it to the database
function createActivity(name)
{
    //Determine the unique ID for the new activity
    var maxID = 0;
    for(activity in activities)
    {
        if(maxID < activities[activity].id)
            maxID = activities[activity].id;
    }
    //Create the activity and add it to the database
    var newActivity = new Activity(maxID + 1, name, [], true);
    activities.push(newActivity);
}



//Cancell an activity
function cancellActivity(id)
{
    //Find the activity in the database
    course = getActivityByID(id);
    if(activity != null)
        activity.archived = false;  // disabling the activity, now it is suspended
}


//Enrols a participant in an anctivity
function enrolParticipant(participantID, activityID)
{
    //Find the participant and activity in the database
    participant = getParticipantByID(participantID);
    activity = getActivityByID(activityID);
    if(activity == null || participant == null)
        return;
    
    //Enrol the participant
    var alreadyEnrolled = false;
    for(student in activity.participants)
    {
        if(activity.participants[students] == participantID)
        {
            alreadyEnrolled = true;
        }
    }
    if(!alreadyEnrolled)
    {
        activity.participants.push(participantID);
        showTeacherToolsPopup(activityID);
        return;
    }
}

//Removes a participant in an actvity
function removeParticipant(participantID, activityID)
{
    //Find the participant and activity in the database
    participant = getParticipantByID(participantID);
    activity = getActivityByID(activityID);
    if(participant == null || activity == null)
        return;
    
    //Remove the participant from the activity
    participantIndex = activity.participants.indexOf(participantID);
    if (participantIndex > -1)
    {
        activity.participants.splice(participantIndex, 1);
        showTeacherToolsPopup(activityID);
        return;
    }
}

/**
 * Createst the html content of the activities based on the information stored in the database
 */
function showActivities()
{
    var contents = '<h1>Activities</h1>';
    for(activity in activities)
    {
        contents += '<div class="participant-div">';
        contents += '<div class="participant-info-div">';
        contents += '<div>';
        contents += '<h2>' + activities[activity].name + '</h2>';
        contents += '<input id="activities-tools-button" type="button" value="Teacher tools" class="submit" onclick="onTeacherToolsClicked(' + activities[activity].id + ')"/>';
        contents += '</div>';
        contents += '<div>';
        contents += '</div>';
        
    }
    contents += '<br>';
    document.getElementById("activites-panel").innerHTML = contents;
}

function onTeacherToolsClicked(participantID)
{
    showTeacherToolsPopup(participantID);
}

/**
 * Generates the html content that allows the teacher to manage activities
 * @param {*} activityID 
 */
function showTeacherToolsPopup(activityID)
{
    //Find the participant by ID
    activity = getActivityByID(activityID);
    if(activity == null)
        return;

    //Generate the popup window
    var contents = "";
    contents += '<div class="popup admin-tools-popup-window">';
    contents +=     '<input class="close-popup-button" type="button" value="X" class="submit" onclick="showActivities()"/>';
    contents +=     '<div class="participant-div">'; 
    contents +=         '<h1>' + activity.name + '</h1>';
    contents +=     '</div>';
    contents +=     '<div class="admin-tools-popup-course-div">';
    contents +=         '<div class="admin-tools-courses-list">';
    contents +=             '<ul>'
    contents +=                 '<p>Current Participants</p>';

    var availableParticipantsList = "";
    var enroled;
    for(participant in participants)
    {
        enroled = false;
        for(enroledParticipant in activity.participants)
        {
            if(activity.participants[enroledParticipant] == participants[participant].id)
            {
                contents += '<li>' + participants[participant].name + '</li>';
                contents += '<input id="remove-participant-button-p' + activity.id + '-c' + participants[participant].id + '" type="button" value="Remove" class="submit" onclick="removeParticipant(' + participants[participant].id + ', ' + activity.id + ')"/>';
                enroled = true;
            }
        }
        if(!enroled)
        {
            availableParticipantsList += '<li>' + participants[participant].name + '</li>';
            availableParticipantsList += '<input id="enrol-participant-button-p' + activity.id + '-c' + participants[participant].id + '" type="button" value="Enrol" class="submit" onclick="enrolParticipant(' + participants[participant].id + ', ' + activity.id + ')"/>';
        }
    }

    contents +=             '</ul>';
    contents +=             '<ul>';
    contents +=                 '<p>Available participants</p>';
    contents += availableParticipantsList;
    contents +=             '</ul>';
    contents +=             "<br>"
    contents +=         '</div>';
    contents +=     '</div>';
    contents += '</div>';

    //Add the popup window to the fullscreen popup and show it on screen
    document.getElementById('activites-panel').innerHTML = contents;
}
