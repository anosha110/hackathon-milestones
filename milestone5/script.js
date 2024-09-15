var form = document.getElementById('resume');
var resumeContainer = document.getElementById('display-resume');
var shareLink = document.getElementById('share-link');
var linkContainer = document.getElementById('link-container');
var pdfDownload = document.getElementById('pdf-Download');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var username = document.getElementById('Username').value.trim();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('Email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var education = document.getElementById('Education').value.trim();
    var experience = document.getElementById('Experience').value.trim();
    var skills = document.getElementById('skills').value.trim();
    resumeContainer.innerHTML = "\n        <h2>".concat(name, "'s Resume</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Education:</strong> ").concat(education, "</p>\n        <p><strong>Work Experience:</strong> ").concat(experience, "</p>\n        <p><strong>Skills:</strong> ").concat(skills, "</p>\n    ");
    localStorage.setItem("resume-".concat(username), JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    }));
    var uniqueLink = "http://127.0.0.1:8080/resume.html?username=".concat(encodeURIComponent(username));
    shareLink.href = uniqueLink;
    shareLink.textContent = uniqueLink;
    linkContainer.style.display = 'block';
});
pdfDownload.addEventListener('click', function () {
    var printContent = resumeContainer.innerHTML;
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
});
