const express = require('express');
const { read } = require('fs');
const { join } = require('path');
const path = require('path');
const userData = require('./data/tutors.json');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

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

    readline.close();
    return tutorForCourse;
}

