// Grab elements from the DOM 
var button = document.getElementById("myButton");
button.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
//handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collects input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //gen resume
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Info</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Email:</b>").concat(email, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n    \n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    \n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    \n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    \n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n\n    ");
    //display gen resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Dislay element is missing');
    }
});
