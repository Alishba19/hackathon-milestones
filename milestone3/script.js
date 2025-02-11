var form = document.getElementById("resumeform");
var resumeDisplayElement = document.getElementById("resumeDisplay");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var Name = document.getElementById("Name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    var resumeHTML = "\n        <h2><b>My Resume</b></h2>\n        <h3><b>Personal Information</b></h3>\n        <p>Name:".concat(Name, "</p>\n        <p>Email:").concat(email, "</p>\n        <p>Phone:").concat(phone, "</p>\n        \n        <h3><b>Education</b></h3>\n        <p>Education:").concat(education, "</p>\n        \n        <h3><b>Skills<b/></h3>\n        <p>").concat(skills, "</p>\n        \n        <h3><b>Experience</b></h3>\n        <p>").concat(experience, "</P>");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing");
    }
});
