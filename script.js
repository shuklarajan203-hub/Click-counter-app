let count = localStorage.getItem("count") || 0;

const countText = document.getElementById("count");
const button = document.getElementById("btn");

countText.innerText = count;

button.addEventListener("click", () => {
    count++;
    countText.innerText = count;

    localStorage.setItem("count", count);

    countText.style.transform = "scale(1.2)";
    setTimeout(() => {
        countText.style.transform = "scale(1)";
    }, 150);

    if (navigator.vibrate) {
        navigator.vibrate(30);
    }
});
