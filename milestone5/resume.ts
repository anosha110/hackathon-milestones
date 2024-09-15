const editForm = document.getElementById('edit-resume') as HTMLFormElement;

const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

if (username) {
    const resumeData = localStorage.getItem(`resume-${username}`);

    if (resumeData) {
        const data = JSON.parse(resumeData);

        (document.getElementById('Username') as HTMLInputElement).value = username;
        (document.getElementById('name') as HTMLInputElement).value = data.name;
        (document.getElementById('Email') as HTMLInputElement).value = data.email;
        (document.getElementById('phone') as HTMLInputElement).value = data.phone;
        (document.getElementById('Education') as HTMLTextAreaElement).value = data.education;
        (document.getElementById('Experience') as HTMLTextAreaElement).value = data.experience;
        (document.getElementById('skills') as HTMLTextAreaElement).value = data.skills;
    } else {
        document.getElementById('resume-display')!.innerText = 'No resume found for this user.';
    }
} else {
    document.getElementById('resume-display')!.innerText = 'No username provided in URL.';
}

editForm.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('Email') as HTMLInputElement).value.trim();
    const phone = (document.getElementById('phone') as HTMLInputElement).value.trim();
    const education = (document.getElementById('Education') as HTMLTextAreaElement).value.trim();
    const experience = (document.getElementById('Experience') as HTMLTextAreaElement).value.trim();
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.trim();

    localStorage.setItem(`resume-${username}`, JSON.stringify({
        name, email, phone, education, experience, skills
    }));

    window.location.href = `resume.html?username=${encodeURIComponent(username)}`;
});
