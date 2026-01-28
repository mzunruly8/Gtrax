const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = config.canvasWidth;
canvas.height = config.canvasHeight;

function drawTarget() {
    ctx.strokeStyle = config.colors.glow;
    ctx.lineWidth = config.lineWidth;
    ctx.setLineDash([10, 6]);
    ctx.beginPath();
    ctx.roundRect(110, 110, 200, 200, 40);
    ctx.stroke();
}

function resetGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTarget();
    console.log("Gtrax reset | Entangle protocol active | G² & I synergy online");
}

// init
drawTarget();