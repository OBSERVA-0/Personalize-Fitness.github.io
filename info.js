let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

themeButton.addEventListener("click", toggleDarkMode);

document.getElementById("signup-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form submission
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var goals = document.getElementById("goals").value;
    // You can process form data here, for example, send it to a server via AJAX
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Password: " + password);
    console.log("Fitness Goals: " + goals);
    // For demonstration purposes, just log the values to console
    // You can replace this with your own logic to handle form submission
});