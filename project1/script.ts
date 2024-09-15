const toggleBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
const skillsSection = document.getElementById('skillsSection') as HTMLElement;

toggleBtn.addEventListener('click', () => {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
        toggleBtn.textContent = 'Hide Skills Section';
    } else {
        skillsSection.style.display = 'none';
        toggleBtn.textContent = 'Show Skills Section';
    }
});
