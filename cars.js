// Simple JS for handling the form submission (no actual backend)
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting us. We will get back to you shortly!");
});
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

function toggleDetails(button) {
    const card = button.parentElement;
    const details = card.querySelector('.car-details');
    if (details.style.display === 'none') {
        details.style.display = 'block';
        button.textContent = 'Hide Details';
    } else {
        details.style.display = 'none';
        button.textContent = 'Rent Now';
    }
}
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent actual form submission
    alert("Message sent successfully!");
    this.reset(); // Optional: Reset form after submission
});
