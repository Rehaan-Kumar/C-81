canvas = document.getElementById("my_canvas");

var ctx = canvas.getContext("2d");
console.log(ctx);

colour = "blue";

ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 2;
ctx.arc(100, 100, 40, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    console.log(e);
    colour = document.getElementById("Colour").value;
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x, mouse_y);
}

function circle(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = 2;
    ctx.arc(x, y, 40, 0, 2 * Math.PI);
    ctx.stroke();
}