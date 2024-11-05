// Get the dark mode toggle button
var toggleButton1 = document.getElementById("myButton");
// Get the form, input, textarea, fieldset, and resume-display elements
var form2 = document.getElementById("resume-form");
var input = document.querySelectorAll('input, textarea');
var fieldset = document.querySelectorAll('fieldset');
var resumeDisplay1 = document.getElementById("resume-display");
// Add event listener to toggle dark mode on button click
if (toggleButton1) {
    toggleButton1.addEventListener("click", function () {
        // Check if form and resumeDisplay exist    
        if (form2 && resumeDisplay1) {
            // Toggle dark mode class for body and form
            document.body.classList.toggle("dark-mode");
            form2.classList.toggle("dark-mode");
            // Toggle dark mode for input and textarea fields
            input.forEach(function (input) {
                input.classList.toggle('dark-mode');
            });
            // Toggle dark mode for fieldsets
            fieldset.forEach(function (fieldset) {
                fieldset.classList.toggle('dark-mode');
            });
            // Toggle dark mode for resume display section
            resumeDisplay1.classList.toggle("dark-mode");
        }
        else {
            console.error("Form or resume display not found.");
        }
    });
}
else {
    console.error("Toggle button not found.");
}
// Grab elements from the DOM 
var form3 = document.getElementById("resume-form");
var resumeDisplayElement1 = document.getElementById("resume-display");
//handle form submission
form3.addEventListener('submit', function (event) {
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
    if (resumeDisplayElement1) {
        resumeDisplayElement1.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Dislay element is missing');
    }
});
