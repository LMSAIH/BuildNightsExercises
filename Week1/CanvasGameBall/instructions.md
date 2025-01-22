@Author: Axel Gael Velasquez Castaneda

If reading on github, please open it on raw, or download it and view it on your code editor.

<------------------------>

This is a more complex mini project, I suggest you attempt it only if you are already familiar with at least the basic concepts of conditionals, functions and variables in javascript. 

<------------------------>

Step by step guide to create this amazing little project!

Hello and welcome, dear build nights attender, I hope this is to your liking, and you are able to learn something from this. Here we will cover some of the major topics on HTML/CSS/JS, all in a simple, yet compelling project. Without further do: 

< HTML >

We will not cover the theory of HTML here, only its practical functionalities and how you can use them to create amazing things.

1. Open Visual Studio Code (or your preferred code editor) and create a new folder. You can name the folder anything you'd like. Inside this folder, 
create a new HTML file named canvasgameball.html. In this file, type ! and press Enter (quickly if you're using VS Code). This is a shortcut that will automatically
generate an HTML skeleton for you. The basic HTML skeleton is the set of tags required of every HTML web page you build.

2. Once the HTML skeleton is created, locate the <title> tag in the <head> section and change its content
to your desired page title. For example:
<title>Canvas game ball</title>.

3. Link your JavaScript file:

Just below the <title> tag, create a <script> tag.
Inside the <script> tag, use the src attribute to link the JavaScript file, like so:
<script src="canvasgameball.js"></script>.
The src attribute connects your HTML (visual elements) to the functionality defined in the JavaScript file.
Javascript files help you to specify new functionalities and features for your webpage that can't be directly added using HTML. 
An attribute is a keyword within an element that can adjust its behaviour.

4. Link your CSS file:

Right below the <script> tag, create a <link> tag to connect the CSS stylesheet.
The <link> tag should include the rel and href attributes, like this:
<link rel="stylesheet" href="canvasgameball.css"/>.
This will apply the styles defined in your CSS file to the HTML structure.
CSS describes how HTML elements are to be displayed on screen, paper, or in other media.
CSS saves a lot of work. It can control the layout of multiple web pages all at once

5. In the same folder, create two additional files:

canvasgameball.css (for styling your webpage).
canvasgameball.js (for adding functionality to your to-do list).

6. Add a page title to the body:

Inside the <body> section, at the very top, just below your <body> tag, create a <h1></h1> tag.
This will serve as your page title. For example:
<h1>Canvas game ball</h1>.
Note: h1 is the largest heading. If you want smaller headings, you can use h2 to h6. Only one h1 should be used per page, 
as it indicates that this is your main title.

7. Add some instructions 

Just below your <h1></h1> tag, you can create a <p></p> tag. That says Controls: Use WASD to move.

8. Create a container for your canvas list:

Add a <div> element below the p tag.
A <div> is a structural element used to group or organize content on a webpage. It doesn’t have built-in functionality but serves as a container.
Assign the class="canvasContainer" attribute to this <div> for styling purposes. Class is an attribute that every element has,
it provides a unique identifier to the element, so that it can be "selected" by other functions on our program.

9. Create your canvas:

Inside your previously created container, write:
<canvas width="600" height="600" id="canvas" style="border: solid;"></canvas> This will create a canvas of 600px X 600px on your screen, which you will use to draw on.

10. Adding the functionality of the canvas

Go back to your <body> tag. Inside you body tag, you will write the following attribute: onload = "init()", this is going to call the init function, 
thus providing functionality to your canvas game, as of now, it is just an empty shell.

And you are finished with the html portion!

< JS >

1. Declare and Initialize Variables

Declare Your Variables
Variables are like containers where you store information. You need two basic variables:

canvas: Refers to the <canvas> element in the HTML file.
ctx: Refers to the “drawing tool” used to draw on the canvas.
Also, define an object called ball that holds details about the ball, such as its position, size, and speed.

Add the following code at the top of your JavaScript file (canvasgameball.js):

let canvas = null; 
let ctx = null; 

The x is the initial position of the ball, along with the y. The radius is 15 and the color will be red, the ball's speed is 5, which is the amount of pixels it will move per click.
let ball = {
    x: 300, 
    y: 300,
    radius: 15,
    color: "red", 
    speed: 5 
};

2. Initialize the Game
To start the game, we need to:

Link the canvas variable to the <canvas> element in your HTML.
Set up the ctx (the drawing tool).
Draw the ball on the canvas for the first time.
Start listening for key presses to move the ball.
Here’s the function to initialize everything:

function init() {
    canvas = document.getElementById("canvas"); // Connect to the canvas element.
    ctx = canvas.getContext("2d"); // Set up the drawing tool.
    drawBall(); // Draw the ball on the canvas.
    // Listen for key presses (e.g., w, a, s, d)
    document.addEventListener("keydown", moveBall);
}

3. Draw the Ball

The drawBall() function will handle drawing the ball on the canvas. Here’s what it does:

Clear the canvas: This prevents the ball from leaving a trail.
Draw the ball: Use the ball’s position, size, and color to draw a circle.
Add this function to your file:

function drawBall() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas.

 ctx.beginPath(); // Start drawing.
ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2); // Draw the circle.
    ctx.fillStyle = ball.color; // Set the ball color.
    ctx.fill(); // Fill the circle with color.
    ctx.closePath(); // Finish drawing.
}

4. Move the Ball
Now we’ll write the moveBall() function, which makes the ball move when you press a key:

Detect which key is pressed (w, a, s, or d).
Adjust the ball’s position:
"w" (up): Decrease the vertical position (y).
"s" (down): Increase the vertical position (y).
"a" (left): Decrease the horizontal position (x).
"d" (right): Increase the horizontal position (x).

function moveBall(e) {
    switch (e.key) {
        case "w": // Move up.
            ball.y -= ball.speed;
            break;
        case "s": // Move down.
            ball.y += ball.speed;
            break;
        case "a": // Move left.
            ball.x -= ball.speed;
            break;
        case "d": // Move right.
            ball.x += ball.speed;
            break;
    }

    Keep the ball inside the canvas.
    if (ball.x - ball.radius < 0) {
        ball.x = ball.radius; // Prevent it from going too far left.
    }

    if (ball.x + ball.radius > canvas.width) {
        ball.x = canvas.width - ball.radius; // Prevent it from going too far right.
    }

    if (ball.y - ball.radius < 0) {
        ball.y = ball.radius; // Prevent it from going too far up.
    }

    if (ball.y + ball.radius > canvas.height) {
        ball.y = canvas.height - ball.radius; // Prevent it from going too far down.
    }

    drawBall(); // Redraw the ball in its new position.
}

Challenges:

-- Add css on the canvasgameball.css file to make it look good. --
-- Make it so that everytime the ball hits a boundary, it changes its color. --