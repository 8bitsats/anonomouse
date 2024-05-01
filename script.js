// Game logic
const codes = ['thetickerisrunes'];  // Sequence of codes for each stage
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
            explode(); // Trigger explosion effect
            setTimeout(() => {
                window.open('http://presale.thetickerisrunes.com/', '_blank'); // Open the specified URL
                resultContainer.innerHTML = `Congratulations! You have discovered the treasure.<br><a href="http://presale.thetickerisrunes.com/" target="_blank">Click here to claim your treasure</a>`;
            }, 2000); // Delay the link opening and message display for effect
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

function explode() {
    const explosion = document.createElement('div');
    explosion.className = 'explosion';
    document.body.appendChild(explosion);
    setTimeout(() => explosion.remove(), 1000); // Remove explosion effect after 1 second
}

function enterRaffle() {
    const walletInput = document.getElementById('walletInput').value.trim();
    const raffleResultContainer = document.getElementById('raffleResult');

    if (validateBitcoinWallet(walletInput)) {
        raffleResultContainer.innerHTML = `Successfully entered the raffle with wallet: ${walletInput}`;
        // Additional backend logic for raffle entry would go here
    } else {
        raffleResultContainer.textContent = 'Invalid Bitcoin wallet address. Please try again.';
    }
}

// Enhanced Bitcoin wallet validation
function validateBitcoinWallet(wallet) {
    const regex = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/; // Simple regex for wallet validation
    return regex.test(wallet);
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
