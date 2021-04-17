canvas =
    document.getElementById("myCanvas");
ctx = canvas.getContext("2d")

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(250,250,40,0,2 * Math.PI)
ctx.strokeStyle();

ctx.beginPath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 5;
ctx.arc(200,200,0,2 * Math.PI)
ctx.strokeStyle();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(150,150,40,0,2 * Math.PI)
ctx.strokeStyle();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(100,100,40,0,2 * Math.PI)
ctx.strokeStyle();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(50,50,40,0,2 * Math.PI)
ctx.strokeStyle();