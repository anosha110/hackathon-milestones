const form= document.getElementById('resume') as HTMLFormElement;
const resume=document.getElementById('display-resume') as HTMLDivElement;

form.addEventListener('submit',(Event:Event)=>{
    Event.preventDefault();

    const name=(document.getElementById('name') as HTMLInputElement).value
    const Email=(document.getElementById('Email') as HTMLInputElement).value
    const phone=(document.getElementById('phone') as HTMLInputElement).value
    const Education=(document.getElementById('Education') as HTMLInputElement).value
    const Experience=(document.getElementById('Experience') as HTMLInputElement).value
    const skills=(document.getElementById('skills') as HTMLInputElement).value

    const resumeinput=`
    <h2> <b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p> <b> Name:</b>${name}</p>
    <p> <b> Email:</b>${Email}</p>
    <p> <b> phone:</b>${phone}</p>

    <h3>Education</h3>
    <p>${Education}</p>

    <h3>Experience</h3>
    <p>${Experience}</p>

    <h3>skills</h3>
    <p>${skills}</p>
    
    `
    if(resume){
        resume.innerHTML=resumeinput
    }
    else{
        console.error('something is missing')
    }

})
