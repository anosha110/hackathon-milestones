var form = document.getElementById('resume');
var resume = document.getElementById('display-resume');
form.addEventListener('submit', function (Event) {
    Event.preventDefault();
    var name = document.getElementById('name').value;
    var Email = document.getElementById('Email').value;
    var phone = document.getElementById('phone').value;
    var Education = document.getElementById('Education').value;
    var Experience = document.getElementById('Experience').value;
    var skills = document.getElementById('skills').value;
    var resumeinput = "\n    <h2> <b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p> <b> Name:</b>".concat(name, "</p>\n    <p> <b> Email:</b>").concat(Email, "</p>\n    <p> <b> phone:</b>").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(Education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(Experience, "</p>\n\n    <h3>skills</h3>\n    <p>").concat(skills, "</p>\n    \n    ");
    if (resume) {
        resume.innerHTML = resumeinput;
    }
    else {
        console.error('something is missing');
    }
});
