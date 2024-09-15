var editForm = document.getElementById('edit-resume');
var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');
if (username) {
    var resumeData = localStorage.getItem("resume-".concat(username));
    if (resumeData) {
        var data = JSON.parse(resumeData);
        document.getElementById('Username').value = username;
        document.getElementById('name').value = data.name;
        document.getElementById('Email').value = data.email;
        document.getElementById('phone').value = data.phone;
        document.getElementById('Education').value = data.education;
        document.getElementById('Experience').value = data.experience;
        document.getElementById('skills').value = data.skills;
    }
    else {
        document.getElementById('resume-display').innerText = 'No resume found for this user.';
    }
}
else {
    document.getElementById('resume-display').innerText = 'No username provided in URL.';
}
editForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('Email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var education = document.getElementById('Education').value.trim();
    var experience = document.getElementById('Experience').value.trim();
    var skills = document.getElementById('skills').value.trim();
    localStorage.setItem("resume-".concat(username), JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    }));
    window.location.href = "resume.html?username=".concat(encodeURIComponent(username));
});
