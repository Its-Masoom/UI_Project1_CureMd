console.log("Hello Babes");

//...............................................................................
// Script to change the color of navigation links when mouse is hover over them
//...............................................................................

const navlink = document.querySelectorAll('#navbar a');
for(let i = 0; i < navlink.length; i++){
    const link = navlink[i];

    link.addEventListener("mouseover", function(){
        link.style.color = "#f7598d";
    })

    link.addEventListener("mouseout", function(){
        link.style.color = "white";
    })

}
//...............................................................................
// Script for form validation check
//...............................................................................

const contact_form = document.getElementById('contact-form');

function check_validate(event){
    event.preventDefault();  // Prevent Form submission if validation fails
    
    const full_name = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const contact_number = document.getElementById('contact-number').value;
    const message = document.getElementById('message').value;
    
    if (!full_name || !email || ! contact_number || !message){
        alert('All fields are required.');
        return;
    }
    
    const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email_regex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // If all validations pass, the form can be submitted
    console.log('Form submitted successfully!');   
    const success_message = document.getElementById('success-message');
    success_message.textContent = 'Form submitted successfully!';
    
}

contact_form.addEventListener('submit', check_validate);

//...............................................................................
// Script for image switching
//...............................................................................
const slides = document.querySelectorAll(".slides");
var counter = 0;
slides.forEach(
    (slide, index) => {
        slide.style.left =`${index*100}%`;
    }
)

const goPrev = () => {
    if (counter == 0) {
        counter = slides.length - 1;
        slideImage();
    } else {
        counter--;
        slideImage();
    }
}

const goNext = () => {
    if (counter == slides.length - 1) {
        counter = 0;
        slideImage();
    } else {
        counter++;
        slideImage();
    }
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        }
    )
}

//...............................................................................
// Script to sort the table based on Price
//...............................................................................
