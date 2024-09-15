// TypeScript functionality to toggle the "Skills" section
var toggleBtn = document.getElementById('toggleSkillsBtn');
var skillsSection = document.getElementById('skillsSection');
toggleBtn.addEventListener('click', function () {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
        toggleBtn.textContent = 'Hide Skills Section';
    }
    else {
        skillsSection.style.display = 'none';
        toggleBtn.textContent = 'Show Skills Section';
    }
});
