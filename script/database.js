//Data structure representing a course
class Course
{
    constructor(id, name, archived)
    {
        //Initialize class fields
        this.id = id;
        this.name = name;
        this.archived = archived;
    }
}

//Data structure representing a course participant
class CourseParticipant
{
    constructor(id, username, nia, name, surname, email, dateOfBirth, governmentID, password, picture, courses, status)
    {
        //Initialize class fields
        this.id = id;
        this.username = username;
        this.nia = nia;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
        this.governmentID = governmentID;
        this.password = password;
        this.picture = picture;
        this.status = status;
        //Check for a valid participant type
        if(this.status != 'Student' && this.status != 'Teacher' && this.status != 'Admin')
            this.status = 'Student';
        //Admins are not enrolled in any courses
        if(this.status != 'Admin')
            this.courses = courses;
        else
            this.courses = [];
    }
}

//Data structure representing a forum post
class ForumPost
{
    constructor(participantID, date, text)
    {
        this.participantID = participantID;
        this.date = date;
        this.text = text;
    }
}

//Data structure representing a forum topic
class ForumTopic
{
    constructor(id, courseID, participantID, title, text, date, replies)
    {
        //Initialize class fields
        this.id = id;
        this.courseID = courseID;
        this.participantID = participantID;
        this.title = title;
        this.text = text;
        this.date = date;
        this.replies = replies;
    }
}

//Data structure representing an activity
class Activity
{
    constructor(id, name, participants, active)
    {
        //Initialize class fields
        this.id = id;
        this.name = name;
        this.participants = participants;
        this.active = active;
        
    }
}

//Course database
courses = [new Course(1, "Databases", false),
           new Course(2, "Artificial Intelligence", false),
           new Course(3, "Software", false),
           new Course(4, "Operating Systems", false),
           new Course(5, "Cryptograpy", false),
           new Course(6, "R Programming", false),
           new Course(7, "Business Management", false),
           new Course(8, "Front-end design", false),
           new Course(9, "User Interfaces", false),
           new Course(10, "Python", false)];

//Participant database
participants = [new CourseParticipant(1, "yuraronald", 100000000, "Yura", "Ronald", "yuraRonald@student", "01/01/1992", "12345678A", "1234", "images/profile/1.jpeg", [1,2], "Student"),
                new CourseParticipant(2, "liviemarybeth", 100000001, "Livie", "Marybeth", "livieMarybeth@student", "01/01/1992", "12345678B", "1234", "images/profile/2.jpeg", [2], "Student"),
                new CourseParticipant(3, "bertekfairuz", 100000002, "Bertek", "Fairuz", "bartekFairuz@student", "01/01/1992", "12345678C", "1234", "images/profile/3.jpeg", [1,2,3], "Student"),
                new CourseParticipant(4, "olivermadison", 100000003, "Oliver", "Madison", "oliverMadison@student", "01/01/1992", "12345678D", "1234", "images/profile/4.jpeg", [3,4], "Student"),
                new CourseParticipant(5, "elielonnie", 100000004, "Elie", "Lonnie", "eliLonnie@student", "01/01/1992", "12345678E", "1234", "images/profile/5.jpeg", [4,5], "Student"),
                new CourseParticipant(6, "marcylove", 100000005, "Marcy", "Love", "marcyLovell@student", "01/01/1992", "12345678F", "1234", "images/profile/6.jpeg", [2,6,7,8,9,10], "Student"),
                new CourseParticipant(7, "kristiedawn", 100000006, "Kristie", "Dawn", "kristieDawn@student", "01/01/1992", "12345678G", "1234", "images/profile/7.jpeg", [1,2,3,4], "Student"),
                new CourseParticipant(8, "dillioncyrus", 100000007, "Dillion", "Cyrus", "dillonCyrus@student", "01/01/1992", "12345678H", "1234", "images/profile/8.jpeg", [2,3], "Teacher"),
                new CourseParticipant(9, "rosalinedebbi", 100000008, "Rosaline", "Debbi", "rosalineDebbi@student", "01/01/1992", "12345678I", "1234", "images/profile/9.jpeg", [1,4,5], "Teacher"),
                new CourseParticipant(10, "aaronbernetta", 100000009, "Aaron", "Bernetta", "aaronBernetta@student", "01/01/1992", "12345678J", "1234", "images/profile/10.jpeg", [6,7,8,9,10], "Teacher"),
                new CourseParticipant(11, "lilyhubert", 100000010, "Lily", "Hubert", "lilyHubert@student", "01/01/1992", "12345678K", "1234", "images/profile/11.jpeg", [], "Admin")];

//Forum topics database
forumTopics = [new ForumTopic(1, 1, 9, "Welcome to the course!", "Hello, dear students. My name is Rosaline Debbi, and I am going to be your teacher for the Databases course. It is a pleasure for me to welcome you all to this course.", "10/09/2020", [new ForumPost(1, "10/09/2020", "Thank you!")]),
               new ForumTopic(2, 2, 8, "Welcome to the course!", "Hello, dear students. My name is Dillion Cyrus, and I am going to be your teacher for the Artificial Intelligence course. It is a pleasure for me to welcome you all to this course.", "10/09/2020", [new ForumPost(2, "10/20/2020", "Thank you!")]),
               new ForumTopic(3, 3, 8, "Welcome to the course!", "Hello, dear students. My name is Dillion Cyrus, and I am going to be your teacher for the Software course. It is a pleasure for me to welcome you all to this course.", "10/09/2020", [new ForumPost(3, "10/20/2020", "Thank you!")]),
               new ForumTopic(4, 4, 9, "Welcome to the course!", "Hello, dear students. My name is Rosaline Debbi, and I am going to be your teacher for the Operating Systems course. It is a pleasure for me to welcome you all to this course.", "10/09/2020", [new ForumPost(4, "10/09/2020", "Thank you!")]),
               new ForumTopic(5, 5, 9, "Welcome to the course!", "Hello, dear students. My name is Rosaline Debbi, and I am going to be your teacher for the Cryptography course. It is a pleasure for me to welcome you all to this course.", "10/09/2020", [new ForumPost(5, "10/09/2020", "Thank you!")]),
               new ForumTopic(6, 6, 10, "Welcome to the course!", "Hello, dear students. My name is Aaron Bernetta, and I am going to be your teacher for the R Programming course. It is a pleasure for me to welcome you all to this course.", "10/09/2020", [new ForumPost(6, "10/09/2020", "Thank you!")]),
               new ForumTopic(7, 7, 10, "Welcome to the course!", "Hello, dear students. My name is Aaron Bernetta, and I am going to be your teacher for the Business Management course. It is a pleasure for me to welcome you all to this course.", "10/09/2020", [new ForumPost(6, "10/09/2020", "Thank you!")]),
               new ForumTopic(8, 8, 10, "Welcome to the course!", "Hello, dear students. My name is Aaron Bernetta, and I am going to be your teacher for the Front-end design course. It is a pleasure for me to welcome you all to this course.", "10/09/2020", [new ForumPost(6, "10/09/2020", "Thank you!")]),
               new ForumTopic(9, 9, 10, "Welcome to the course!", "Hello, dear students. My name is Aaron Bernetta, and I am going to be your teacher for the User Interface course. It is a pleasure for me to welcome you all to this course.", "10/09/2020", [new ForumPost(6, "10/09/2020", "Thank you!")]),
               new ForumTopic(10, 10, 10, "Welcome to the course!", "Hello, dear students. My name is Aaron Bernetta, and I am going to be your teacher for the Python course. It is a pleasure for me to welcome you all to this course.", "10/09/2020", [new ForumPost(6, "10/09/2020", "Thank you!")])];

//Activity database
activities = [new Activity(1, "Lab Case UI",[1,2], true),
           new Activity(2, "Presentation project",[1,3], true),
           new Activity(3, "Contest",[5], true),
           new Activity(4, "Defense",[6,7], true)];

function getCourseByID(courseID)
{
    for(course in courses)
    {
        if(courses[course].id == courseID)
        {
            return courses[course];
        }
    }

    return null;
}
function getActivityByID(activityID)
{
    for(activity in activities)
    {
        if(activities[activity].id == activityID)
        {
            return activities[activity];
        }
    }

    return null;
}

function getParticipantByID(participantID)
{
    for(participant in participants)
    {
        if(participants[participant].id == participantID)
        {
            return participants[participant];
        }
    }

    return null;
}

function getForumTopicByID(id)
{
    for(topic in forumTopics)
    {
        if(forumTopics[topic].id == id)
        {
            return forumTopics[topic];
        }
    }

    return null;
}

function getForumTopicsByCourseID(courseID)
{
    var topics = [];
    for(topic in forumTopics)
    {
        if(forumTopics[topic].courseID == courseID)
        {
            topics.push(forumTopics[topic]);
        }
    }

    return topics;
}