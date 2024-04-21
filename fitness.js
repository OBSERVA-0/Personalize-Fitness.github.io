const tri = document.getElementById("No");
tri.addEventListener("click", () => {
    alert("Glad to hear it! Now the universe is your oyster. Go out and make the most of it. You have the power to change the world. Don't give up");
    location.href = "info.html";
});
const tri2 = document.getElementById("Yes");
tri2.addEventListener("click", () => {
    alert("There is more to life than just Money, Fame, and Power. Remember to take care of yourself.There is only a little you can do in 24 hours with 10 Million but nothing when you're dead.");
    location.href = "info.html";
});

let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeButton.innerHTML = "&#127769;"; // Moon symbol
    } else {
        themeButton.innerHTML = "&#9728;"; // Sun symbol
    }
}

themeButton.addEventListener("click", toggleDarkMode);
