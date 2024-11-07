// Get the dark mode toggle button
const toggleButton1 = document.getElementById("myButton") as HTMLButtonElement | null;

// Get the form, input, textarea, fieldset, and resume-display elements
const form2 = document.getElementById("resume-form") as HTMLFormElement | null;
const input = document.querySelectorAll('input, textarea') as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;
const fieldset = document.querySelectorAll('fieldset') as NodeListOf<HTMLElement>;
const resumeDisplay1 = document.getElementById("resume-display") as HTMLElement | null;

// Add event listener to toggle dark mode on button click
if (toggleButton1) {
    toggleButton1.addEventListener("click", () => {
        // Check if form and resumeDisplay exist    
        if (form2 && resumeDisplay1) {
            // Toggle dark mode class for body and form
            document.body.classList.toggle("dark-mode");
            form2.classList.toggle("dark-mode");

            // Toggle dark mode for input and textarea fields
            input.forEach((input) => {
                input.classList.toggle('dark-mode');
            });

            // Toggle dark mode for fieldsets
            fieldset.forEach((fieldset) => {
                fieldset.classList.toggle('dark-mode');
            });

            // Toggle dark mode for resume display section
            resumeDisplay1.classList.toggle("dark-mode");
        } else {
            console.error("Form or resume display not found.");
        }
    });
} else {
    console.error("Toggle button not found.");
}





// Grab elements from the DOM 
const form3 = document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement1 = document.getElementById("resume-display") as HTMLDivElement;


//handle form submission
form3.addEventListener('submit', (event: Event) => {
    event.preventDefault(); //prevent page reload

    //collects input
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
        

    //gen resume
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Info</h3>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Phone:</b>${phone}</p>
    
    <h3>Education</h3>
    <p>${education}</p>
    
    <h3>Skills</h3>
    <p>${skills}</p>
    
    <h3>Experience</h3>
    <p>${experience}</p>
    
    <h3>Education</h3>
    <p>${education}</p>


    `;

    //display gen resume
    if(resumeDisplayElement1){
        resumeDisplayElement1.innerHTML = resumeHTML;
    } else {
        console.error('The Resume Dislay element is missing');
    }
})
