/*
This is empty on purpose! Your code to build the resume will go here.
 */

// Data Objects
var bio = {
    name: "Michael French Fulton Jr.",
    role: "Associate developer",
    contacts: {
        mobile: "914-462-7304",
        email: "frenchfultonjr@gmail.com",
        github: "https://github.com/frenchfulton94",
        location: "New York City"
    },
    welcomeMessage: "Hello World",
    skills: [
        "Graphic Design", "Programming", "Photography"
    ],
    biopic: new URL("https://scontent.xx.fbcdn.net/v/t31.0-8/19956090_501396906873870_7023472660382440097_o.jpg?oh=72a23caf993e8c1a572dc501e5c80981&oe=5A080D7D"),
    display: function () {
        console.log(this);
    }
};

var education = {
    schools: [
        {
            name: "Manhattan College",
            location: "Riverdale, New York",
            degree: "Bachelors of Arts",
            majors: ["Computer Science"],
            dates: "2012-2017",
            url: "Manhattan.edu"
        }
    ],
    onlineCourses: [
        {
            title: "Front-end Development",
            school: "Udacity",
            dates: "Currently in Progress",
            url: new URL('https://github.com/')
                }
            ],
    display: function () {
        console.log(this);
    }
};

var work = {
    jobs: [{
        employer: "Infosys",
        title: "Associate Developer",
        location: "West Lafayette, Indiana",
        dates: "Currently in Progress",
        description: "Software Consulting"
    }],
    display: function () {
        console.log(this);
    }
};

var projects = {
    projects: [{
        title: "Glance MC",
        dates: "2015-2017",
        description: "A student-created mobile app to help students quickly tackle everyday tasks at Manhattan College using their ubiquitous smartphone. Employees will also find this app useful.",
        images: ["http://a4.mzstatic.com/us/r30/Purple122/v4/e3/ad/c7/e3adc780-2660-c291-02aa-6b1e8c353c0d/screen696x696.jpeg", "http://a3.mzstatic.com/us/r30/Purple111/v4/d3/1d/9b/d31d9bbb-ebb0-438b-bd93-57eefd576529/screen696x696.jpeg", "http://a1.mzstatic.com/us/r30/Purple122/v4/26/64/7e/26647e73-89f0-ae57-f202-4745c71ffa22/screen696x696.jpeg"]
    }],

    display: function () {
        console.log(this);
    }
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(welcomeMessage);

// Add Contact Info 
function addContacts() {
    for (var item in bio.contacts) {
        var formatted = HTMLcontactGeneric.replace("%data%", bio.contacts[item]).replace("%contact%", item);

        $("#topContacts").append(formatted);

    }

    var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(bioPic);
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function (skill) {
        var formatted = HTMLskills.replace("%data%", skill);
        $("#skills").append(formatted);
    });
}

addContacts();

// Add Work Experience
function addWork(item) {
    $("#workExperience").append(HTMLworkStart);
    var employer = HTMLworkEmployer.replace("%data%", item.employer).replace("#", "https://www.infosys.com/");
    var title = HTMLworkTitle.replace("%data%", item.title);
    var dates = HTMLworkDates.replace("%data%", item.dates);
    var location = HTMLworkLocation.replace("%data%", item.location);
    var description = HTMLworkDescription.replace("%data%", item.description);
    var values = [employer + title, dates, location, description];
    values.forEach(function (item) {
        $(".work-entry:last").append(item);
    });
}

work.jobs.forEach(addWork);

// Add Projects 
function addProjects(item) {
    $("#projects").append(HTMLprojectStart);
    var title = HTMLprojectTitle.replace("%data%", item.title).replace("#", "https://inside.manhattan.edu/offices/its/mobile-apps/index.php");
    var dates = HTMLprojectDates.replace("%data%", item.dates);
    var description = HTMLprojectDescription.replace("%data%", item.description);

    var itemArray = [title, dates, description];
    item.images.forEach(function (image) {
        var formattedImageTags = HTMLprojectImage.replace("%data%", image);
        console.log(formattedImageTags);
        itemArray.push(formattedImageTags);
    });
    itemArray.forEach(function (item) {
        $(".project-entry:last").append(item);
    });
}

projects.projects.forEach(addProjects);

// Add Education
// Add Schools
function addSchools(item) {
    $("#education").append(HTMLschoolStart);
    var name = HTMLschoolName.replace("%data%", item.name).replace("#", "https://manhattan.edu/");
    var degree = HTMLschoolDegree.replace("%data%", item.degree);
    var dates = HTMLschoolDates.replace("%data%", item.dates);
    var location = HTMLschoolLocation.replace("%data%", item.location);
    var itemArray = [name + degree, dates, location, itemArray];

    item.majors.forEach(function (major) {
        var formattedMajor = HTMLschoolMajor.replace("%data%", major);
        itemArray.push(formattedMajor);
    });
    itemArray.forEach(function (item) {
        $(".education-entry:last").append(item);
    });
}

// Add Online courses
function addOnlineCourses(item) {
    $("#education").append(HTMLschoolStart);
    var title = HTMLonlineTitle.replace("%data%", item.title).replace("#", "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001");
    var schoolName = HTMLonlineSchool.replace("%data%", item.school);
    var dates = HTMLonlineDates.replace("%data%", item.dates);
    var url = HTMLonlineURL.replace("%data%", item.url);
    var itemArray = [title + schoolName, dates, url];
    itemArray.forEach(function (item) {
        $(".education-entry:last").append(item);
    });
}
education.schools.forEach(addSchools);
$("#education").append(HTMLonlineClasses);
education.onlineCourses.forEach(addOnlineCourses);

//Google Maps
$("#mapDiv").append(googleMap);
