const express = require("express")
const server = require("./server")
const userData = require('../data/tutors.json');

const api = express()
server.api = api
server.start()

api.get("/ping", (req, res) => res.end("pong"))
api.post("/ping", (req, res) => {
    req.pipe(res);
});

api.get("/tutors/:course", (req, res) => {
    //Get parameter by req.params.<name here>
    res.send(JSON.stringify(getTutorbyCourse(req.params.course)))
});

api.get("/booktutor/:tutorName", (req, res) => {
    res.send(JSON.stringify(getTutorDetails(req.params.tutorName)))
});

function getTutorDetails (tutorName) {
    for (var i = 0; i < userData.length; i++) {
        var currentUser = userData[i];
        if (((currentUser.first_name.toLowerCase()).substring(0, 1) == tutorName.substring(0, 1) && (currentUser.last_name.toLowerCase()) == tutorName.substring(1, tutorName.length))) {
            return currentUser;
        }
    }
}

function getTutorbyCourse (course) {
    tutorFound = false;
    tutorForCourse = [];

    for (var i = 0; i < userData.length; i++) {
        var currentUser = userData[i];

        if (currentUser.math_courses != null) {
            for (var j = 0; j < currentUser.math_courses.length; j++) {
                if (currentUser.math_courses[j] == course) {
                    tutorForCourse.push(currentUser);
                    tutorFound = true;
                    break;  
                }
            }
        }
        if (currentUser.physics_courses != null) {
            for (var j = 0; j < currentUser.physics_courses.length; j++) {
                if (currentUser.physics_courses[j] == course) {
                    tutorForCourse.push(currentUser);
                    tutorFound = true;
                    break;  
                }
            }
        }
        if (currentUser.bio_courses != null) {
            for (var j = 0; j < currentUser.bio_courses.length; j++) {
                if (currentUser.bio_courses[j] == course) {
                    tutorForCourse.push(currentUser);
                    tutorFound = true;
                    break;  
                }
            }
        }
        if (currentUser.chem_course != null) {
            for (var j = 0; j < currentUser.chem_course.length; j++) {
                if (currentUser.chem_course[j] == course) {
                    tutorForCourse.push(currentUser);
                    tutorFound = true;
                    break;  
                }
            }
        }
        if (currentUser.cs_courses != null) {
            for (var j = 0; j < currentUser.cs_courses.length; j++) {
                if (currentUser.cs_courses[j] == course) {
                    tutorForCourse.push(currentUser);
                    tutorFound = true;
                    break;  
                }
            }
        }
        if (currentUser.language_courses != null) {
            for (var j = 0; j < currentUser.language_courses.length; j++) {
                if (currentUser.language_courses[j] == course) {
                    tutorForCourse.push(currentUser);
                    tutorFound = true;
                    break;  
                }
            }
        }
        if (currentUser.other_courses != null) {
            for (var j = 0; j < currentUser.other_courses.length; j++) {
                if (currentUser.other_courses[j] == course) {
                    tutorForCourse.push(currentUser);
                    tutorFound = true;
                    break;
                }  
            }
        }
    }

    if (!tutorFound) {
        console.log("No Tutors Found");
    }

    return tutorForCourse;
}
//https://tutors.imsa.edu/api/ping
//Should return pong