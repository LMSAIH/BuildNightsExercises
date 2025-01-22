@Author: Axel Gael Velasquez Castaneda

If reading on github, please open it on raw, or download it and view it on your code editor.

Step by step guide to create this amazing little project!

Hello and welcome, dear build nights attender, I hope this is to your liking, and you are able to learn something from this. Here we will cover some of the major topics on HTML/CSS/JS, all in a simple, yet compelling project. Without further do: 

< HTML >

We will not cover the theory of HTML here, only its practical functionalities and how you can use them to create amazing things.

1. Open Visual Studio Code (or your preferred code editor) and create a new folder. You can name the folder anything you'd like. Inside this folder, 
create a new HTML file named digitalclock.html. In this file, type ! and press Enter (quickly if you're using VS Code). This is a shortcut that will automatically
generate an HTML skeleton for you. The basic HTML skeleton is the set of tags required of every HTML web page you build.

2. Once the HTML skeleton is created, locate the <title> tag in the <head> section and change its content
to your desired page title. For example:
<title>Digital Clock</title>.

3. Link your JavaScript file:

Just below the <title> tag, create a <script> tag.
Inside the <script> tag, use the src attribute to link the JavaScript file, like so:
<script src="digitalclock.js"></script>.
The src attribute connects your HTML (visual elements) to the functionality defined in the JavaScript file.
Javascript files help you to specify new functionalities and features for your webpage that can't be directly added using HTML. 
An attribute is a keyword within an element that can adjust its behaviour.

4. Link your CSS file:

Right below the <script> tag, create a <link> tag to connect the CSS stylesheet.
The <link> tag should include the rel and href attributes, like this:
<link rel="stylesheet" href="digitalclock.css"/>.
This will apply the styles defined in your CSS file to the HTML structure.
CSS describes how HTML elements are to be displayed on screen, paper, or in other media.
CSS saves a lot of work. It can control the layout of multiple web pages all at once

5.In the same folder, create two additional files:

digitalclock.css (for styling your webpage).
digitalclock.js (for adding functionality to your to-do list).

6. Add a page title to the body:

Inside the <body> section, at the very top, just below your <body> tag, create a <h1></h1> tag.
This will serve as your page title. For example:
<h1>My Digital Clock</h1>.
Note: h1 is the largest heading. If you want smaller headings, you can use h2 to h6. Only one h1 should be used per page, 
as it indicates that this is your main title.

7. Create a container for your digital clock list:

Add a <div> element below the h1 tag.
A <div> is a structural element used to group or organize content on a webpage. It doesn’t have built-in functionality but serves as a container.
Assign the class="clockContainer" attribute to this <div> for styling purposes. Class is an attribute that every element has,
it provides a unique identifier to the element, so that it can be "selected" by other functions on our program.

8. Create a <p> ekement for your clock to display the text on:

Inside your previously created container, right under the <div>, 
create a new <p></p> element, with the class attribute of class="time"

9. Add functionality to the page

Go back to your <body> tag. Inside you body tag, you will write the following attribute: onload = "addSecond()", this is going to call the addSecond function, 
thus providing functionality to your clock, as of now, it is just an empty shell.

And you are finished with the html portion!

< JS >

1. Initial declarations

Open your digitalclocks.js file. The first thing you will do here is to declare something called a global variable. A variable is a location in memory to which you assign a value and will be able to access through the program. In javascript, we use the keyword let + your variable name; to declare a variable. 

You will declare the global variable currentTime like this

let currentTime = null;

We say that the variable is global because it is not inside a function, this makes it accessible to the whole program. It is initialized to null in order to make it have no value. Null, just like the english meaning, means it contains nothing. This is good to initialize a variable that hasn't been assigned a value yet. By default, javascript assigns the value of undefined to variables where you don't specify the value, like this let test; (this makes the variable be undefined).

2. Writing the first function.

Right under your newly created variable, you can now create a function called init(), in javascript, functions are pieces of code in your program that have a specific task and make your code compact and reusable, you can call a function in any part of your program. 

function init(){} is the way you will declare the function. 

3. init() function.

Inside the {}, goes your function content, in this case, all you have to do is intialize the value of your variable (currentTime) to be the current date, which you can accomplish by writing the following code:

currentTime = new Date();

This will call something called constructor for the date, but this is a more advanced concept so you don't need to worry for now. Just know, that this will give you the current date.

4. addSecond() function.

Finally, the function that you utilize to update the seconds on your html file.

First, you will create the function addSecond() right under the end of your previous function, inside the function, you will check if currentTime is null, if it is, then you will call the function init() to initialize the current time to the date. You can do so by writing:

if(!currentTime){
    init();
}

Afterwards, you will have to wrap your code in an interval, which is simply a function that repeats itself every certain amount of time that you indicate 
setInterval(()=>{},1000) you will have to write that right under the if statement that we've just written. This means, that whatever is inside the {} on the first argument of the function setInterval() will be run every 1 second or 1000 miliseconds, as it was specified on the second parameter. 

Function parameters are values that you can "feed" a function and contain information that you want the function to be able to access. 

5. Inside the interval.

Now we need to think about what we want to do once every second passes. Which in reality, is really simple, we just want to add a second to the date, or in this case, the currentTime variable. Inside the interval, you can write

currentTime.setSeconds(currentTime.getSeconds() + 1);

Which translated to english, just means that you are setting the seconds to increase by one. Since currentTime is an object, you can't just add 1 to it,
you need to use the methods available for it (functions) to make it work. That is why we use . instead of calling the function traditionally setSeconds().

this code is also compressed, but you could do something like this to better understand:

let newSecond = currentTime.getSeconds() + 1;
currentTime.setSeconds(newSecond);

Just below that, copy the following:

let hours = currentTime.getHours().toString().padStart(2, "0");
let minutes = currentTime.getMinutes().toString().padStart(2, "0");
let seconds = currentTime.getSeconds().toString().padStart(2, "0");

You now have the hours, minutes and seconds as strings and in a nice 2 digit format. 

6. Update the values in html

Now you will learn how to update the values. In order to access the <p></p> element that will display the hour, you will need to get the element. Right under the variables you just copied, declare a new variable called time, to 
be document.querySelector(".time").

document.querySelector() allows you to select an element by its CSS class (preceded by .) or ID (preceded by #).

Now check if time exists if(time){} and inside the if statement, you can change the newly declared time.innerHTML to display the hours, minutes and seconds. 

Like: time.innerHTML = `<span>${hours}</span><span>${minutes}</span><span>${seconds}</span>`;

However, if you so prefer it, you can do 

time.innerHTML = hours + ":" + minutes + ":" + seconds;

or any variation your creativity allows!

You are now done with the HTML and Javascript portion

Challenges:

-- Add css on the digitalclock.css file to make it look good. --
-- Make it so the hours, minutes and seconds are displayed on separate boxes --