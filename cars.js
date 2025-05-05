// Simple JS for handling the form submission (no actual backend)
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting us. We will get back to you shortly!");
});
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
