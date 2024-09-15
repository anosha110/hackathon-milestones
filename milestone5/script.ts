const form = document.getElementById('resume') as HTMLFormElement;
const resumeContainer = document.getElementById('display-resume') as HTMLDivElement;
const shareLink = document.getElementById('share-link') as HTMLAnchorElement;
const linkContainer = document.getElementById('link-container') as HTMLDivElement;
const pdfDownload = document.getElementById('pdf-Download') as HTMLButtonElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    const username = (document.getElementById('Username') as HTMLInputElement).value.trim();
    const name = (document.getElementById('name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('Email') as HTMLInputElement).value.trim();
    const phone = (document.getElementById('phone') as HTMLInputElement).value.trim();
    const education = (document.getElementById('Education') as HTMLTextAreaElement).value.trim();
    const experience = (document.getElementById('Experience') as HTMLTextAreaElement).value.trim();
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.trim();

    resumeContainer.innerHTML = `
        <h2>${name}'s Resume</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Work Experience:</strong> ${experience}</p>
        <p><strong>Skills:</strong> ${skills}</p>
    `;

    localStorage.setItem(`resume-${username}`, JSON.stringify({
        name, email, phone, education, experience, skills
    }));

    const uniqueLink = `http://127.0.0.1:8080/resume.html?username=${encodeURIComponent(username)}`;
    shareLink.href = uniqueLink;
    shareLink.textContent = uniqueLink;

    linkContainer.style.display = 'block';
});

pdfDownload.addEventListener('click', () => {
    const printContent = resumeContainer.innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();

    document.body.innerHTML = originalContent;
});
