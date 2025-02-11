const form = document.getElementById("resumeform") as HTMLFormElement;
const resumeDisplayElement = document.getElementById("resumeDisplay") as HTMLDivElement;

form.addEventListener("submit", (event: Event)=>{
    event.preventDefault();

        const Name = (document.getElementById("Name") as HTMLInputElement).value
        const email = (document.getElementById("email") as HTMLInputElement).value
        const phone = (document.getElementById("phone") as HTMLInputElement).value
        const address = (document.getElementById("address") as HTMLInputElement).value
        const education = (document.getElementById("education") as HTMLInputElement).value
        const skills = (document.getElementById("skills") as HTMLInputElement).value
        const experience = (document.getElementById("experience") as HTMLInputElement).value;
         
        const resumeHTML =`
        <h2><b>My Resume</b></h2>
        <h3><b>Personal Information</b></h3>
        <p>Name:${Name}</p>
        <p>Email:${email}</p>
        <p>Phone:${phone}</p>
        
        <h3><b>Education</b></h3>
        <p>Education:${education}</p>
        
        <h3><b>Skills<b/></h3>
        <p>${skills}</p>
        
        <h3><b>Experience</b></h3>
        <p>${experience}</P>`;

       if(resumeDisplayElement){
            resumeDisplayElement.innerHTML = resumeHTML;
        }else {
            console.error("The resume display element is missing");
        }
    })
    