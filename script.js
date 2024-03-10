const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const ballRadius = 10;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballColor = getRandomColor();
let speed = 2; // Initial speed in pixels per frame
let wallHitCount = 0;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = ballColor;
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
        ballColor = getRandomColor(); // Change ball color on wall hit
        wallHitCount++;
        updateSpeedDisplay();
    }
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
        ballColor = getRandomColor(); // Change ball color on wall hit
        wallHitCount++;
        updateSpeedDisplay();
    }

    x += dx;
    y += dy;
}

function updateSpeedDisplay() {
    const pixelsPerFrame = Math.sqrt(dx * dx + dy * dy); // Total pixels covered per frame
    const pixelsPerMinute = pixelsPerFrame * 60 * 60; // Total pixels covered per minute
    const speedInKmPerHour = pixelsPerMinute / 1000 / 1.61; // Convert pixels to km and minutes to hours
    document.getElementById("speedDisplay").textContent = `Speed on Ball: ${speedInKmPerHour.toFixed(2)} km/hr`;
}

function increaseSpeed() {
    speed += 1;
    dx = dx > 0 ? speed : -speed;
    dy = dy > 0 ? speed : -speed;
}

function decreaseSpeed() {
    speed = Math.max(1, speed - 1);
    dx = dx > 0 ? speed : -speed;
    dy = dy > 0 ? speed : -speed;
}

document.getElementById("increaseSpeedButton").addEventListener("click", increaseSpeed);
document.getElementById("decreaseSpeedButton").addEventListener("click", decreaseSpeed);

setInterval(draw, 10);
