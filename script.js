// Game logic
const answer = 'THETICKERISRUNES'; // Correct answer
const revealNumber = '69420'; // Number to reveal upon correct answer

function checkCode() {
    const userInput = document.getElementById('runicInput').value.toUpperCase();
    const resultContainer = document.getElementById('result');

    if (userInput === answer) {
        document.getElementById('runicInput').disabled = true;
        explode(); // Trigger explosion effect
        setTimeout(() => {
            resultContainer.innerHTML = `<h1>${revealNumber}</h1>`;
            window.open('https://presale.thetickerisrunes.com', '_blank'); // Open the specified URL
        }, 2000); // Delay the link opening and number display for effect
    } else {
        resultContainer.textContent = 'Incorrect answer, try again!';
    }
    document.getElementById('runicInput').value = ''; // Clear input for next attempt
}

function explode() {
    const explosion = document.createElement('div');
    explosion.className = 'explosion';
    document.body.appendChild(explosion);
    setTimeout(() => explosion.remove(), 1000); // Remove explosion effect after 1 second
}

// Matrix Effect Script
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const runicSymbols = '69420PRESALE.THETICKERISRUNES.COM'; // Updated symbols
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const rainDrops = Array.from({ length: columns }, () => 1);

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
