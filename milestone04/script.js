// select relevant elements
var toggleButton1 = document.getElementById("myButton");
var form2 = document.getElementById("resume-form");
var inputElements = document.querySelectorAll('input, textarea');
var fieldsets = document.querySelectorAll('fieldset');
var resumeDisplay1 = document.getElementById("resume-display");
var footer = document.querySelector("footer");
// single event listener for toggle button
if (toggleButton1) {
    toggleButton1.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        // toggle dark mode for form, resume display, and footer
        form2 === null || form2 === void 0 ? void 0 : form2.classList.toggle("dark-mode");
        resumeDisplay1 === null || resumeDisplay1 === void 0 ? void 0 : resumeDisplay1.classList.toggle("dark-mode");
        footer === null || footer === void 0 ? void 0 : footer.classList.toggle("dark-mode");
        // toggle dark mode for input and textarea fields
        inputElements.forEach(function (el) { return el.classList.toggle('dark-mode'); });
        // toggle dark mode for fieldsets
        fieldsets.forEach(function (fieldset) { return fieldset.classList.toggle('dark-mode'); });
    });
}
else {
    console.error("Toggle button not found.");
}
// grab elements from the DOM
var form3 = document.getElementById("resume-form");
var resumeDisplayElement1 = document.getElementById("resume-display");
// handle form submission and generate resume
form3.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // collect input values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var skills = document.getElementById('skills').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    // generate resume HTML
    var resumeHTML = "\n    <div style=\"font-family: Arial, sans-serif; color: #000000; max-width: 600px; margin: auto;\">\n        <h1 style=\"font-size: 2em; text-align: left; font-family: 'Cinzel', medium; color: #000000;\"><u>".concat(name, "</u></h1>\n            <section id=\"contact\" style=\"margin-bottom: 20px;\">  \n                <h2 style=\"font-family: 'Agdasima', sans-serif; font-weight: 24px; color: #000000;\"><u>CONTACT</u></h2>\n            \n                <p style=\"font-family: 'Open Sans', sans-serif; font-weight: 500; color: #000000; font-size: 16px; margin: 5px 0;\">\n                    <span class=\"material-icons\" style=\"font-size: 24px;display: inline-flex; vertical-align: middle;\">call</span> ").concat(phone, "\n                </p>\n            \n                <p style=\"font-family: 'Open Sans', sans-serif; font-weight: 500; color: #000000; font-size: 16px; margin: 5px 0;\">\n                    <span class=\"material-icons\" style=\"font-size: 24px;display: inline-flex; vertical-align: middle;\">mail</span> ").concat(email, "\n                </p>\n            \n                <p style=\"font-family: 'Open Sans', sans-serif; font-weight: 500; color: #000000; font-size: 16px; margin: 5px 0;\">\n                    <span class=\"material-icons\" style=\"font-size: 24px;display: inline-flex; vertical-align: middle;\">home</span> ").concat(address, "\n                </p>\n            </section>\n        \n                <hr style=\"border: 0; border-top: 1px solid #696969; margin: 20px 0;\" />\n\n            <section id=\"education\" style=\"margin-bottom: 20px;\">\n                <h2 style=\"font-family: 'Agdasima', sans-serif; font-weight: 24px; color: #000000;\"><u>EDUCATION</u></h2>\n                <p style=\"font-family: 'Open Sans', sans-serif; font-weight: 500; color: #000000; font-size: 16px; margin: 5px 0;\">").concat(education, "</p>\n            </section>\n        \n                <hr style=\"border: 0; border-top: 1px solid #696969; margin: 20px 0;\" />\n\n            <section id=\"experience\" style=\"margin-bottom: 20px;\">\n                <h2 style=\"font-family: 'Agdasima', sans-serif; font-weight: 24px; color: #000000;\"><u>EXPERIENCE</u></h2>\n                <p style=\"font-family: 'Open Sans', sans-serif; font-weight: 500; color: #000000; font-size: 16px; margin: 5px 0;\">").concat(experience, "</p>\n            </section>\n        \n                <hr style=\"border: 0; border-top: 1px solid #696969; margin: 20px 0;\" />\n\n            <section id=\"skills\" style=\"margin-bottom: 20px;\">\n                <h2 style=\"font-family: 'Agdasima', sans-serif; font-weight: 24px; color: #000000;\"><u>LEARNED SKILLS</u></h2>\n                <ul style=\"list-style-type: disc; padding-left: 20px; font-family: 'Open Sans', sans-serif; font-weight: 500; color: #000000; font-size: 16px; margin: 5px 0;\">\n                    ").concat(skills.split(',').map(function (skill) { return "<li style=\"margin-bottom: 5px;\">".concat(skill.trim(), "</li>"); }).join(''), "\n                </ul>\n            </section>\n    </div>\n    ");
    // display generated resume
    if (resumeDisplayElement1) {
        resumeDisplayElement1.innerHTML = resumeHTML;
    }
    else {
        console.error('The Resume Display element is missing');
    }
});

