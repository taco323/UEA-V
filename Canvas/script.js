let canvas=document.getElementById ("canvas")
let ctx = canvas.getContext("2d")

ctx.fillStyle="red";
ctx.fillRect(0, 0, 180,180);

ctx.fillStyle="green";
ctx.fillRect(320, 240, 180,180);

ctx.fillStyle="yellow";
ctx.fillRect(450, 240, 100,100);

ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();

console.log("canvas");