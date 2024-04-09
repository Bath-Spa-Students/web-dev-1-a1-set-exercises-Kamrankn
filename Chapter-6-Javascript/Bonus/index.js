document.addEventListener("DOMContentLoaded", function() {
    const colors = [
        "rgb(255, 0, 0)", // Red
        "rgb(0, 255, 0)", // Green
        "rgb(0, 0, 255)"  // Blue
    ];

    let correctColorIndex;
    let lives;

    const colorDisplay = document.getElementById("color-display");
    const optionsDiv = document.getElementById("options");

    function initGame() {
        lives = 3;
        document.getElementById("lives-count").textContent = lives;
        setMessage('');
        correctColorIndex = Math.floor(Math.random() * 3);
        displayColor(colors[correctColorIndex]);
        renderOptions();
    }

    function renderOptions() {
        optionsDiv.innerHTML = '';
        colors.forEach((color, index) => {
            const option = document.createElement("div");
            option.classList.add("option");
            option.style.backgroundColor = color;
            option.addEventListener("click", function() {
                handleGuess(index);
            });
            optionsDiv.appendChild(option);
        });
    }

    function handleGuess(index) {
        if (index === correctColorIndex) {
            setMessage("Correct! Well done!");
        } else {
            decrementLives();
            setMessage("Wrong! Try again.");
        }
    }

    function setMessage(message) {
        document.getElementById("message").textContent = message;
    }

    function decrementLives() {
        lives--;
        document.getElementById("lives-count").textContent = lives;
        if (lives === 0) {
            endGame();
        }
    }

    function endGame() {
        setMessage(`Game Over! Your final score is ${3 - lives}/3`);
        optionsDiv.innerHTML = '';
    }

    function displayColor(color) {
        colorDisplay.style.backgroundColor = color;
    }

    document.getElementById("restart-btn").addEventListener("click", function() {
        initGame();
    });

    // Initialize the game when the page loads
    initGame();
});
