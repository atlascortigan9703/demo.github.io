// Simple JavaScript for interactions
function learnMore() {
    alert('More information coming soon!');
}

// Example: form submission (you can integrate backend API for actual submission)
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Your message has been sent! Thank you for contacting us.");
});
