/**
 * Changes the display mode of an embedded a youtube video
 * @param {*} id 
 */
function displayVideo(id){
    $( id ).toggle();
}

/*
Dictionary that stores the content for the different courses
*/
var coursesTeacher = {
    "artificial-intelligence":{
        "title":"Artificial Intelligence",
        "unit-1":{
            "title": "AI history",
            "contents":[
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 1: presentation</a> <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",   
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 1 exercises</a> <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'>  <img class='course-icon' src='images/play.png' alt='course-icon'> <a onclick='displayVideo(\"#video-1\")' class='course-links' href='#!'>Class Recording</a> <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div><div class='video-courses centered' id='video-1'><iframe src='https://www.youtube.com/embed/7O60HOZRLng' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",
                "<div class='image-link'> <img class='course-icon' src='images/poll.png' alt='course-icon'> <a class='course-links' href='#poll-popup'>Poll: Deadline delivery </a><span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/paper-clip.png' alt='course-icon'> <a class='course-links' href='#delivery-popup'>Delivery of unit one exercises </a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>"
            ],
        },
        "unit-2":{
            "title": "Search algorithms",
            "contents":[
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 2: presentation </a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 2 exercises </a> <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/play.png' alt='course-icon'> <a onclick='displayVideo(\"#video-2\")' class='course-links' href='#!'>Class Recording</a> <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div> <div class='video-courses centered' id='video-2'><iframe src='https://www.youtube.com/embed/5OJv6iHMtVw' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",
                "<div class='image-link'> <img class='course-icon' src='images/poll.png' alt='course-icon'> <a class='course-links' href='#poll-popup'>Poll: Class Recovery</a> <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/paper-clip.png' alt='course-icon'> <a class='course-links' href='#delivery-popup'>Delivery lab 1</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>"
            ],
        } 
    },
    "databases":{
        "title":"Databases and File Systems",
        "unit-1":{
            "title": "Relational Design",
            "contents":[
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 1: presentation</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 1 exercises</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/play.png' alt='course-icon'> <a onclick='displayVideo(\"#video-1\")' class='course-links' href='#!'>Class Recording</a> <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div><div class='video-courses centered' id='video-1'><iframe src='https://www.youtube.com/embed/I_rxqSJAj6U' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",
                "<div class='image-link'> <img class='course-icon' src='images/poll.png' alt='course-icon'> <a class='course-links' href='#poll-popup'>Poll: Deadline delivery</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/paper-clip.png' alt='course-icon'> <a class='course-links' href='#delivery-popup'>Delivery of unit one exercises</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>"
            ],
        },
        "unit-2":{
            "title": "Relational Algebra",
            "contents":[
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 2: presentation</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 2 exercises</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/play.png' alt='course-icon'> <a onclick='displayVideo(\"#video-2\")' class='course-links' href='#!'>Class Recording</a> <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div><div class='video-courses centered' id='video-2'><iframe src='https://www.youtube.com/embed/RdZSrD4DUvs' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",
                "<div class='image-link'> <img class='course-icon' src='images/poll.png' alt='course-icon'> <a class='course-links' href='#poll-popup'>Poll: Class Recovery</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/paper-clip.png' alt='course-icon'> <a class='course-links' href='#delivery-popup'>Delivery lab 1</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>"
            ],
        } 
    },
    "crypto":{
        "title":"Cryptography",
        "unit-1":{
            "title": "Classical Cryptography",
            "contents":[
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 1: presentation</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 1 exercises</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/play.png' alt='course-icon'> <a onclick='displayVideo(\"#video-1\")' class='course-links' href='#!'>Class Recording</a> <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div><div class='video-courses centered' id='video-1'><iframe src='https://www.youtube.com/embed/jbumW7Ym03o' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",
                "<div class='image-link'> <img class='course-icon' src='images/poll.png' alt='course-icon'> <a class='course-links' href='#poll-popup'>Poll: Deadline delivery</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/paper-clip.png' alt='course-icon'> <a class='course-links' href='#delivery-popup'>Delivery of unit one exercises</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>"
            ],
        },
        "unit-2":{
            "title": "Authentication",
            "contents":[
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 2: presentation</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 2 exercises</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/play.png' alt='course-icon'> <a onclick='displayVideo(\"#video-2\")' class='course-links' href='#!'>Class Recording</a> <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div><div class='video-courses centered' id='video-2'><iframe src='https://www.youtube.com/embed/b4b8ktEV4Bg' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",
                "<div class='image-link'> <img class='course-icon' src='images/poll.png' alt='course-icon'> <a class='course-links' href='#poll-popup'>Poll: Class Recovery</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/paper-clip.png' alt='course-icon'> <a class='course-links' href='#delivery-popup'>Delivery lab 1</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>"
            ],
        } 
    },
    "os":{
        "title":"Operating Systems",
        "unit-1":{
            "title": "Filesystems",
            "contents":[
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 1: presentation</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 1 exercises</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/play.png' alt='course-icon'> <a onclick='displayVideo(\"#video-1\")' class='course-links' href='#!'>Class Recording</a> <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div><div class='video-courses centered' id='video-1'><iframe src='https://www.youtube.com/embed/KN8YgJnShPM' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",
                "<div class='image-link'> <img class='course-icon' src='images/poll.png' alt='course-icon'> <a class='course-links' href='#poll-popup'>Poll: Deadline delivery</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/paper-clip.png' alt='course-icon'> <a class='course-links' href='#delivery-popup'>Delivery of unit one exercises</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>"
            ],
        },
        "unit-2":{
            "title": "Multiprogramming",
            "contents":[
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 2: presentation</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 2 exercises</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/play.png' alt='course-icon'> <a  onclick='displayVideo(\"#video-2\")'class='course-links' href='#!'>Class Recording</a> <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div><div class='video-courses centered' id='video-2'><iframe src='https://www.youtube.com/embed/MB0yDMQj1lU' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",
                "<div class='image-link'> <img class='course-icon' src='images/poll.png' alt='course-icon'> <a class='course-links' href='#poll-popup'>Poll: Class Recovery</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/paper-clip.png' alt='course-icon'> <a class='course-links' href='#delivery-popup'>Delivery lab 1</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>"
            ],
        } 
    },
    "software":{
        "title":"Software",
        "unit-1":{
            "title": "Introduction to Requirements",
            "contents":[
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 1: presentation</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 1 exercises</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/play.png' alt='course-icon'> <a onclick='displayVideo(\"#video-1\")' class='course-links' href='#!'>Class Recording</a> <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div><div class='video-courses centered' id='video-1'><iframe src='https://www.youtube.com/embed/J_y2I09rj_I' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",
                "<div class='image-link'> <img class='course-icon' src='images/poll.png' alt='course-icon'> <a class='course-links' href='#poll-popup'>Poll: Deadline delivery</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/paper-clip.png' alt='course-icon'> <a class='course-links' href='#delivery-popup'>Delivery of unit one exercises</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>"
            ],
        },
        "unit-2":{
            "title": "Introduction to modelling",
            "contents":[
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 2: presentation</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 2 exercises</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/play.png' alt='course-icon'> <a onclick='displayVideo(\"#video-2\")' class='course-links' href='#!'>Class Recording <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></a></div><div class='video-courses centered' id='video-2'><iframe src='https://www.youtube.com/embed/UI6lqHOVHic' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",
                "<div class='image-link'> <img class='course-icon' src='images/poll.png' alt='course-icon'> <a class='course-links' href='#poll-popup'>Poll: Class Recovery</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>",
                "<div class='image-link'> <img class='course-icon' src='images/paper-clip.png' alt='course-icon'> <a class='course-links' href='#delivery-popup'>Delivery lab 1</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>"
            ],
        } 
    },
}

/*
Dictionary that stores the content for the different courses
*/
var coursesStudent = {
    "artificial-intelligence":{
        "title":"Artificial Intelligence",
        "unit-1":{
            "title": "AI history",
            "contents":[
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 1: presentation</a></div>",   
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 1 exercises</a></div>",
                "<div class='image-link'>  <img class='course-icon' src='images/play.png' alt='course-icon'> <a onclick='displayVideo(\"#video-3\")' class='course-links' href='#!'>Class Recording</a></div><div class='video-courses centered' id='video-3'><iframe src='https://www.youtube.com/embed/7O60HOZRLng' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",
                "<div class='image-link'> <img class='course-icon' src='images/poll.png' alt='course-icon'> <a class='course-links' href='#poll-popup'>Poll: Deadline delivery </a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/paper-clip.png' alt='course-icon'> <a class='course-links' href='#delivery-popup'>Delivery of unit one exercises </a></div>"
            ],
        },
        "unit-2":{
            "title": "Search algorithms",
            "contents":[
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 2: presentation </a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 2 exercises </a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/play.png' alt='course-icon'> <a onclick='displayVideo(\"#video-4\")' class='course-links' href='#!'>Class Recording</a></div> <div class='video-courses centered' id='video-4'><iframe src='https://www.youtube.com/embed/5OJv6iHMtVw' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",
                "<div class='image-link'> <img class='course-icon' src='images/poll.png' alt='course-icon'> <a class='course-links' href='#poll-popup'>Poll: Class Recovery</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/paper-clip.png' alt='course-icon'> <a class='course-links' href='#delivery-popup'>Delivery lab 1</a></div>"
            ],
        } 
    },
    "databases":{
        "title":"Databases and File Systems",
        "unit-1":{
            "title": "Relational Design",
            "contents":[
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 1: presentation</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 1 exercises</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/play.png' alt='course-icon'> <a onclick='displayVideo(\"#video-3\")' class='course-links' href='#!'>Class Recording</a></div><div class='video-courses centered' id='video-3'><iframe src='https://www.youtube.com/embed/I_rxqSJAj6U' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",
                "<div class='image-link'> <img class='course-icon' src='images/poll.png' alt='course-icon'> <a class='course-links' href='#poll-popup'>Poll: Deadline delivery</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/paper-clip.png' alt='course-icon'> <a class='course-links' href='#delivery-popup'>Delivery of unit one exercises</a></div>"
            ],
        },
        "unit-2":{
            "title": "Relational Algebra",
            "contents":[
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 2: presentation</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 2 exercises</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/play.png' alt='course-icon'> <a onclick='displayVideo(\"#video-4\")' class='course-links' href='#!'>Class Recording</a></div><div class='video-courses centered' id='video-4'><iframe src='https://www.youtube.com/embed/RdZSrD4DUvs' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",
                "<div class='image-link'> <img class='course-icon' src='images/poll.png' alt='course-icon'> <a class='course-links' href='#poll-popup'>Poll: Class Recovery</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/paper-clip.png' alt='course-icon'> <a class='course-links' href='#delivery-popup'>Delivery lab 1</a></div>"
            ],
        } 
    },
    "crypto":{
        "title":"Cryptography",
        "unit-1":{
            "title": "Classical Cryptography",
            "contents":[
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 1: presentation</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 1 exercises</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/play.png' alt='course-icon'> <a onclick='displayVideo(\"#video-3\")' class='course-links' href='#!'>Class Recording</a></div><div class='video-courses centered' id='video-3'><iframe src='https://www.youtube.com/embed/jbumW7Ym03o' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",
                "<div class='image-link'> <img class='course-icon' src='images/poll.png' alt='course-icon'> <a class='course-links' href='#poll-popup'>Poll: Deadline delivery</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/paper-clip.png' alt='course-icon'> <a class='course-links' href='#delivery-popup'>Delivery of unit one exercises</a></div>"
            ],
        },
        "unit-2":{
            "title": "Authentication",
            "contents":[
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 2: presentation</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 2 exercises</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/play.png' alt='course-icon'> <a onclick='displayVideo(\"#video-4\")' class='course-links' href='#!'>Class Recording</a></div><div class='video-courses centered' id='video-4'><iframe src='https://www.youtube.com/embed/b4b8ktEV4Bg' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",
                "<div class='image-link'> <img class='course-icon' src='images/poll.png' alt='course-icon'> <a class='course-links' href='#poll-popup'>Poll: Class Recovery</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/paper-clip.png' alt='course-icon'> <a class='course-links' href='#delivery-popup'>Delivery lab 1</a></div>"
            ],
        } 
    },
    "os":{
        "title":"Operating Systems",
        "unit-1":{
            "title": "Filesystems",
            "contents":[
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 1: presentation</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 1 exercises</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/play.png' alt='course-icon'> <a onclick='displayVideo(\"#video-3\")' class='course-links' href='#!'>Class Recording</a></div><div class='video-courses centered' id='video-3'><iframe src='https://www.youtube.com/embed/KN8YgJnShPM' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",
                "<div class='image-link'> <img class='course-icon' src='images/poll.png' alt='course-icon'> <a class='course-links' href='#poll-popup'>Poll: Deadline delivery</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/paper-clip.png' alt='course-icon'> <a class='course-links' href='#delivery-popup'>Delivery of unit one exercises</a></div>"
            ],
        },
        "unit-2":{
            "title": "Multiprogramming",
            "contents":[
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 2: presentation</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 2 exercises</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/play.png' alt='course-icon'> <a  onclick='displayVideo(\"#video-4\")'class='course-links' href='#!'>Class Recording</a></div><div class='video-courses centered' id='video-4'><iframe src='https://www.youtube.com/embed/MB0yDMQj1lU' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",
                "<div class='image-link'> <img class='course-icon' src='images/poll.png' alt='course-icon'> <a class='course-links' href='#poll-popup'>Poll: Class Recovery</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/paper-clip.png' alt='course-icon'> <a class='course-links' href='#delivery-popup'>Delivery lab 1</a></div>"
            ],
        } 
    },
    "software":{
        "title":"Software",
        "unit-1":{
            "title": "Introduction to Requirements",
            "contents":[
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 1: presentation</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 1 exercises</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/play.png' alt='course-icon'> <a onclick='displayVideo(\"#video-3\")' class='course-links' href='#!'>Class Recording</a></div><div class='video-courses centered' id='video-3'><iframe src='https://www.youtube.com/embed/J_y2I09rj_I' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",
                "<div class='image-link'> <img class='course-icon' src='images/poll.png' alt='course-icon'> <a class='course-links' href='#poll-popup'>Poll: Deadline delivery</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/paper-clip.png' alt='course-icon'> <a class='course-links' href='#delivery-popup'>Delivery of unit one exercises</a></div>"
            ],
        },
        "unit-2":{
            "title": "Introduction to modelling",
            "contents":[
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 2: presentation</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>Unit 2 exercises</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/play.png' alt='course-icon'> <a onclick='displayVideo(\"#video-4\")' class='course-links' href='#!'>Class Recording</a></div><div class='video-courses centered' id='video-4'><iframe src='https://www.youtube.com/embed/UI6lqHOVHic' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>",
                "<div class='image-link'> <img class='course-icon' src='images/poll.png' alt='course-icon'> <a class='course-links' href='#poll-popup'>Poll: Class Recovery</a></div>",
                "<div class='image-link'> <img class='course-icon' src='images/paper-clip.png' alt='course-icon'> <a class='course-links' href='#delivery-popup'>Delivery lab 1</a></div>"
            ],
        } 
    },
}

/**
 * Displays the intial course artificial intelligence
 */
$( document ).ready(function(){
    upadateTeacherCourses("artificial-intelligence")
    upadateStudentCourses("artificial-intelligence");});

/**
 * Function that changes the course displayed based on the option selected in the course select
 */
$( document ).ready(function() {
    $('#course-select').on('change', function(){
        upadateTeacherCourses(this.value)
    });
});
$( document ).ready(function() {
    $('#course-select-student').on('change', function(){
        upadateStudentCourses(this.value)
    });
});

/**
 * Display the course contents of the given course
 * @param {*} courseName 
 */
function upadateTeacherCourses(courseName) {
    // Taking from the dictionary the title of the course and the first two units.
    $("#course-title").html(coursesTeacher[courseName]["title"])
    $("#unit-1-title").html(coursesTeacher[courseName]["unit-1"]["title"])
    $("#unit-2-title").html(coursesTeacher[courseName]["unit-2"]["title"])
    // Displaying all the content in unit 1
    $("#unit-1-content").html(function(){
        var result = "";
        var contents = coursesTeacher[courseName]["unit-1"]["contents"]
        for(var i = 0; i < contents.length; i++ ){
            result += contents[i];
        }
        return result;
    })
    // Displaying all the content in unit 2
    $("#unit-2-content").html(function(){
        var result = "";
        var contents = coursesTeacher[courseName]["unit-2"]["contents"]
        for(var i = 0; i < contents.length; i++ ){
            result += contents[i];
        }
        return result;
    })
    
}

/**
 * Display the course contents of the given course
 * @param {*} courseName 
 */
function upadateStudentCourses(courseName) {
    // Taking from the dictionary the title of the course and the first two units.
    $("#course-title-student").html(coursesStudent[courseName]["title"])
    $("#unit-1-title-student").html(coursesStudent[courseName]["unit-1"]["title"])
    $("#unit-2-title-student").html(coursesStudent[courseName]["unit-2"]["title"])
    // Displaying all the content in unit 1
    $("#unit-1-content-student").html(function(){
        var result = "";
        var contents = coursesStudent[courseName]["unit-1"]["contents"]
        for(var i = 0; i < contents.length; i++ ){
            result += contents[i];
        }
        return result;
    })
    // Displaying all the content in unit 2
    $("#unit-2-content-student").html(function(){
        var result = "";
        var contents = coursesStudent[courseName]["unit-2"]["contents"]
        for(var i = 0; i < contents.length; i++ ){
            result += contents[i];
        }
        return result;
    })
    
}

/**
 * Displays an additional input field in the add material form depending on the type of document that it is wanted
 * to be uploaded.
 */
$( document ).ready(function() {
    $('#type-material').on('change', function(){
        if(this.value==="video"){
            $("#hide-video-material").show();
            $("#hide-file-material").hide();
            $("#hide-poll-material").hide();
            $("#hide-delivery-material").hide();
        }else if(this.value==="document"){
            $("#hide-video-material").hide();
            $("#hide-file-material").show();
            $("#hide-poll-material").hide();
            $("#hide-delivery-material").hide();
        }else if(this.value==="poll"){
            $("#hide-file-material").hide();
            $("#hide-video-material").hide();
            $("#hide-poll-material").show();
            $("#hide-delivery-material").hide();
        }else if(this.value==="delivery"){
            $("#hide-file-material").hide();
            $("#hide-video-material").hide();
            $("#hide-poll-material").hide();
            $("#hide-delivery-material").show();
            
        }
    });
});

/**
 * Adds a new content to a course
 */
function addMaterial(){
    //Selecting from the add material form the required data
    // Getting the name of material
    var name = document.forms["form-add-material"]["name-material"].value;
    // Type of material
    var type = document.forms["form-add-material"]["type-material"].value;
    // Getting the target course
    var course = document.forms["form-add-material"]["course-add-material"].value;
    // Getting the target unit
    var unit = document.forms["form-add-material"]["unit-add-material"].value;
    var html = "";
    var feedback = document.getElementById("feedback-material");
    
    if(type==="document"){
        var file = document.forms["form-add-material"]["file-selector"].value;
        // Check that user introduced a file. Notify if not.
        if(file === ""){
            feedback.innerHTML = "Be sure to select a file!"
            feedback.style.display = "block";
            return false;
        }
        // Set html content
        feedback.style.display = "none";
        html = "<div class='image-link'> <img class='course-icon' src='images/pdf.png' alt='course-icon'> <a onclick=downloadDocument(this) class='course-links' href='#!'>" + name + "</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>";
    } else if(type==="video"){
        var video = document.forms["form-add-material"]["video-link-add"].value;
        // Check that user introduced a video. Notify if not.
        if(video === ""){
            feedback.innerHTML = "Don't forget to introduce a Youtube link!"
            feedback.style.display = "block";
            return false;
        }
        feedback.style.display = "none";
        video = createEmbedLink(video);
        var randomID = Math.floor((Math.random()*100000));
        var randomID = randomID.toString();
        html = "<div class='image-link'> <img class='course-icon' src='images/play.png' alt='course-icon'> <a onclick='displayVideo(\"#video-"+ randomID +"\")' class='course-links' href='#!'>"+ name +"</a> <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div><div class='video-courses centered' id='video-"+ randomID +"'><iframe src='"+ video +"' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></div>";
                
    } else if(type==="poll"){
        var poll = document.forms["form-add-material"]["poll-options-selector"].value;
        if(poll==""){
            // Check that user introduced a pole. Notify if not.
            feedback.innerHTML = "Introduce some options, please."
            feedback.style.display = "block";
            return false;
        }
        feedback.style.display = "none";
        html = "<div class='image-link'> <img class='course-icon' src='images/poll.png' alt='course-icon'> <a class='course-links' href='#!'>"+name+"</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>"
    }else if(type==="delivery"){
        var deadline = document.forms["form-add-material"]["deadline-selector"].value;
        if(deadline===""){
            // Check that user introduced a delivery date. Notify if not.
            feedback.innerHTML = "Select a deadline, please."
            feedback.style.display = "block";
            return false;
        }
        feedback.style.display = "none";

        html = "<div class='image-link'> <img class='course-icon' src='images/paper-clip.png' alt='course-icon'> <a class='course-links' href='#!'>"+name+"</a>  <span class ='remove-list-item' onclick='removeMaterial(this)'>&times;</span></div>"
    }

    // Updating the contents in the dictionary
    coursesTeacher[course][unit]["contents"].push(html);
    // Re-rendering the page
    upadateTeacherCourses(course);

}

/**
 * Converts an html youtube link into an embedded youtube link to be displayed in the page
 * @param {*} html 
 */
function createEmbedLink(html){
    var videoID;
    if(html.includes("=")){
        videoID = html.split("=");
    }else{
        videoID = html.split("/");
    }
    return "https://www.youtube.com/embed/" + videoID[videoID.length - 1];
}

/**
 * Generates a pdf file to be downloaded when the user clicks on a document link
 * 
 * @param {*} link 
 */
function downloadDocument(link) {
    var documentTitle = link.text + ".pdf"
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("Your content here"));
    element.setAttribute('download', documentTitle);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  

  /**
   * 
   * Removes the parent element of the given element
   * 
   * @param {*} element 
   */
  function removeMaterial(element){
    $(element).parent().remove();
}
