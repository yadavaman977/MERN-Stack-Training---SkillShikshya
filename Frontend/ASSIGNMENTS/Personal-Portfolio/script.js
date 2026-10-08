
// HAMBURGER MENU



// Get the hamburger button

const menuBtn = document.getElementById("menuBtn");


// Get the navigation menu

const navLinks = document.getElementById("navLinks");


// When hamburger button is clicked

menuBtn.addEventListener("click", function() {

    // Add or remove the active class

    navLinks.classList.toggle("active");

});




// CLOSE MENU



// Get all navigation links

const navItems = document.querySelectorAll(".nav-links a");


// Go through every navigation link

navItems.forEach(function(link) {

    // When a link is clicked

    link.addEventListener("click", function() {

        // Close the menu

        navLinks.classList.remove("active");

    });

});


 
// CONTACT FORM


// Get the contact form

const contactForm = document.getElementById("contactForm");


// When the form is submitted

contactForm.addEventListener("submit", function(event) {


    // Stop the page from refreshing

    event.preventDefault();


    // Get the name entered by the user

    const name = document.getElementById("name").value;


    // Get the email entered by the user

    const email = document.getElementById("email").value;


    // Get the message entered by the user

    const message = document.getElementById("message").value;



    // Create email subject

    const subject =
        "New Portfolio Message from " + name;



    // Create email message

    const body =
        "Name: " + name + "\n\n" +
        "Email: " + email + "\n\n" +
        "Message: " + message;



    // Show alert

    alert("Thank you " + name + "!");


    // Open email

    window.location.href =
        "mailto:amankumaryadav2062@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);



    // Clear the form

    contactForm.reset();

});
