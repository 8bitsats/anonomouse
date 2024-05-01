const codes = ['RUNES', 'MAGIC', 'QUEST'];  // Sequence of codes for each stage
const hints = [
    "Hint: It's what you are decoding!",
    "Hint: What do wizards cast?",
    "Hint: It's an adventure!"
];
let currentStage = 0;

function checkCode() {
    const userInput = document.getElementById('runicInput').value.toUpperCase();
    const resultContainer = document.getElementById('result');
    const hintContainer = document.getElementById('hint');

    if (userInput === codes[currentStage]) {
        currentStage++;
        if (currentStage === codes.length) {
            document.getElementById('runicInput').disabled = true;
            resultContainer.innerHTML = `Congratulations! You have discovered the treasure.<br><a href="https://presale.thetickerisrunes.com" target="_blank">Click here to claim your treasure</a>`;
        } else {
            resultContainer.textContent = 'Correct! Proceed to the next code.';
            hintContainer.textContent = '';
        }
    } else {
        resultContainer.textContent = 'Incorrect code, try again!';
        hintContainer.textContent = hints[currentStage];
    }
    document.getElementById('runicInput').value = ''; // Clear input for next attempt
}
// Add existing code check function and variable declarations here...

// Matrix Effect Script
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const runicSymbols = '69420RUNESMAGICQUEST';
const fontSize = 16;
const columns = canvas.width / fontSize; // Number of columns for the rain
const rainDrops = [];

for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
        const text = runicSymbols.charAt(Math.floor(Math.random() * runicSymbols.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
}

setInterval(draw, 50);
