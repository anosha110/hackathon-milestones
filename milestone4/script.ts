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
    <h2> <b> Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p> <b> Name:</b> <span editable="true">${name}</span></p>
    <p> <b> Email:</b> <span editable="true">${Email} </span></p>
    <p> <b> phone:</b> <span editable="true">${phone}</span></p>

    <h3>Education</h3>
    <p> <span editable="true">${Education}</p>

    <h3>Experience</h3>
    <p> <span editable="true">${Experience}</p>

    <h3>skills</h3>
    <p> <span editable="true">${skills}</p>
    
    `
    if(resume){
        resume.innerHTML=resumeinput
    }
    else{
        console.error('something is missing')
    }

})
