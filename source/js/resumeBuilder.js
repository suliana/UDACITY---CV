var bio = {
    "name": "Suliana Abbay",
    "role": "Web Developer",
    "contacts": {
        "mobile": "07946575618",
        "email": "Suliana@gmail.com",
        "github": "suliana",
        "location": "London"
    },
    "welcomeMessage": "TLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod" +
        "tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud" +
        "exercitationullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor" +
        "in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "skills": ["HTML5", "CSS3", "Javascript", "jQuery", "MongoDB", "MySQL", "Ruby", "Photoshop", "Iillustrator"],
    "biopic": "images/me.jpg"
};
var work = {
    "jobs": [{
        "employer": "Mosob",
        "title": "Marketing",
        "location": "London",
        "dates": "2011-2015",
        "description": "It is a long established fact that a reader will be distracted by the readable" +
            "exercitationullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor" +
            "in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    }, {
        "employer": "Dare",
        "title": "Senior front-end developer",
        "location": "London",
        "dates": "2006-2011",
        "description": "The point of using Lorem Ipsum is that it has a more-or-less normal distribution " +
            "of letters, as opposed to using \'Content here, content here', making it look like readable English. ",
    }, {
        "employer": "Dare",
        "title": "Senior front-end developer",
        "location": "London",
        "dates": "2006-2011",
        "description": "The point of using Lorem Ipsum is that it has a more-or-less normal distribution " +
            "of letters, as opposed to using \'Content here, content here', making it look like readable English. ",
    }, {
        "employer": "Attic Media",
        "title": "Frontend developer",
        "location": "London",
        "dates": "2002-2006",
        "description": "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of " +
            "eempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
            "exercitationullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor" +
            "in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    }]
};

var projects = {
    "projects": [{
        "title": "Sample Project 1",
        "dates": "2016",
        "description": "There are many variations of passages of Lorem Ipsum available, but the majority  " +
            "have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        "images": ["http://placehold.it/900x696"]
    }, {
        "title": "Sample Project 2",
        "dates": "2015",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt " +
            ".Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "images": ["http://placehold.it/900x696"]
    }]
};

var education = {
    "schools": [{
        "name": "London College",
        "location": "London",
        "degree": "BA",
        "majors": ["Fashion", "Design", "Illustration"],
        "dates": "2002",
        "url": "http://expample.com"
    }, {
        "name": "London College",
        "location": "London",
        "degree": "BA",
        "majors": ["Fashion", "Design", "Illustration"],
        "dates": "2002",
        "url": "http://expample.com"
    }, {
        "name": "Nazareth school",
        "location": "Addis Ababa",
        "degree": "School",
        "majors": ["Math", "Art", "Physics", "Biology"],
        "dates": "1997",
        "url": "http://expample.com"
    }],
    "onlineCourses": [{
        "title": "Frontend Development",
        "school": "Udacity",
        "date": "2015",
        "url": "https://www.udacity.com/course/"
    }, {
        "title": "MongoDB Certified Professional",
        "school": "Mongodb University",
        "date": "2016",
        "url": "https://university.mongodb.com/"
    }, {
        "title": "Ruby ",
        "school": "codeacadamy",
        "date": "2016",
        "url": "https://www.codeacadamy.com/"
    }]
};


bio.display = function() {
    $('.intro-message').prepend(HTMLheaderName.replace("%data%", bio.name), HTMLheaderRole.replace("%data%", bio.role));

    var formattedContact = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGit = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $('#topContacts').append(formattedContact, formattedEmail, formattedGit, formattedLocation);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#personalpic").append(formattedBiopic);

    var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedMsg);

    for (var skill = 0, length = bio.skills.length; skill < 5; skill++) {
        $("#toskills").append(HTMLskills.replace('%data%', bio.skills[skill]));
    }

};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescr = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescr);

        var proImage = project.images;
        for (var image in proImage) {
            if (proImage.hasOwnProperty(image)) {
                var formattedImage = HTMLprojectImage.replace("%data%", proImage[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }

    });
};


education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", school.name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        $(".education-entry:last").append(formattedName, formattedDegree, formattedDates, formattedLocation, formattedMajor);

    });

    education.onlineCourses.forEach(function(online) {
        $("#online").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", online.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", online.school);
        var formattedDates = HTMLonlineDates.replace("%data%", online.date);
        var formattedURL = HTMLonlineURL.replace("%data%", online.url);
        $(".education-entry:last").append(formattedTitle, formattedSchool, formattedDates, formattedURL);
    });
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedEmployerDetails = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
        $(".work-entry:last").append(formattedEmployerDetails);
    });
};


bio.display();
projects.display();
education.display();
work.display();



// this is the map section
$("#mapDiv").append(googleMap);
$(".location-text").click(function() {
    $('html,body').animate({ scrollTop: document.body.scrollHeight }, { duration: 1500, easing: 'swing' });
});

//Collecting Click Locations Solution

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});