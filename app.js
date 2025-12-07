let jsonData = {};
fetch("main.json")
    .then((res) => res.json())
    .then((data) => (jsonData = data));

const userInput = document.getElementById("stenoChord");
const result = document.getElementById("definition");

userInput.addEventListener("input", () => {
    const query = userInput.value.trim().toUpperCase();

    if (query === "") {
        result.textContent = "";
        return;
    }

    const match = jsonData[query];

    if (match) {
        result.textContent = match;
    } else {
        result.textContent = "Not found";
    }
});
