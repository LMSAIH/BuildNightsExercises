@Author: Axel Gael Velasquez Castaneda

If reading on github, please open it on raw, or download it and view it on your code editor.

Step by step guide to create this amazing little project!

Hello and welcome, dear build nights attender, I hope this is to your liking, and you are able to learn something from this. Here we will cover some of the major topics on HTML/CSS/JS, all in a simple, yet compelling project. Without further do: 

< HTML >

We will not cover the theory of HTML here, only its practical functionalities and how you can use them to create amazing things.

1. Open Visual Studio Code (or your preferred code editor) and create a new folder. You can name the folder anything you'd like. Inside this folder, 
create a new HTML file named todolist.html. In this file, type ! and press Enter (quickly if you're using VS Code). This is a shortcut that will automatically
generate an HTML skeleton for you. The basic HTML skeleton is the set of tags required of every HTML web page you build.

2. Once the HTML skeleton is created, locate the <title> tag in the <head> section and change its content
to your desired page title. For example:
<title>To-Do List</title>.

3. Link your JavaScript file:

Just below the <title> tag, create a <script> tag.
Inside the <script> tag, use the src attribute to link the JavaScript file, like so:
<script src="todolist.js"></script>.
The src attribute connects your HTML (visual elements) to the functionality defined in the JavaScript file.
Javascript files help you to specify new functionalities and features for your webpage that can't be directly added using HTML. 
An attribute is a keyword within an element that can adjust its behaviour.

4. Link your CSS file:

Right below the <script> tag, create a <link> tag to connect the CSS stylesheet.
The <link> tag should include the rel and href attributes, like this:
<link rel="stylesheet" href="todolist.css"/>.
This will apply the styles defined in your CSS file to the HTML structure.
CSS describes how HTML elements are to be displayed on screen, paper, or in other media.
CSS saves a lot of work. It can control the layout of multiple web pages all at once

5.In the same folder, create two additional files:

todolist.css (for styling your webpage).
todolist.js (for adding functionality to your to-do list).

6. Add a page title to the body:

Inside the <body> section, at the very top, just below your <body> tag, create a <h1></h1> tag.
This will serve as your page title. For example:
<h1>Welcome to my To-Do List!</h1>.
Note: h1 is the largest heading. If you want smaller headings, you can use h2 to h6. Only one h1 should be used per page, 
as it indicates that this is your main title.

7. Create a container for your to-do list:

Add a <div> element below the h1 tag.
A <div> is a structural element used to group or organize content on a webpage. It doesn’t have built-in functionality but serves as a container.
Assign the class="listContainer" attribute to this <div> for styling purposes. Class is an attribute that every element has,
it provides a unique identifier to the element, so that it can be "selected" by other functions on our program.


8. Add a form for user input:

Inside the listContainer <div>, create a <form> element.
Assign the onsubmit="addTask(event)" attribute to the <form> tag.
The onsubmit attribute will trigger a JavaScript function (addTask) when the form is submitted.
This will be viewed in the coming steps. If the form is generated with any attributes once you create it,
please delete all of them. You only need onsubmit for this specific exercise.

9. Create input elements inside the form:

Inside the <form>:
Right after the form tag, create the first <input> element:
Use the attribute type="text" to specify that this is a text input field.
Add the attribute placeholder="Enter the task here..." to display a hint before the user types.
Add the attribute identifier id="taskName" to uniquely identify the input element for JavaScript.
Add the second <input> element right after the first input element:
Use the attribute type="submit" to make it a submit button.
Add the attribute class="submitButton" for styling.
Add the attribute value="Add task" to display the text "Add task" on the button.


10. Add a section for the task list:

Below the <form> element, add another <div> with class="taskList".
Inside this <div>, add a <p> element with class="taskHeader".
Write the text "Your tasks:" inside the <p> element to serve as a header for the task list.


11. Add an unordered list for tasks:

Inside the taskList <div>, add an empty <ul> element with the class="tasks".
The <ul> element (unordered list) will hold all the tasks.
Tasks will later be dynamically added as <li> (list item) elements inside this <ul>.
Add an error message container:

Below the taskList <div>, add another <div> with the following structure:
<div class="error" style="display: none;">
  <p class="errorText"></p>
</div>

This <div> will be used to display error messages when the user enters invalid input. The style="display: none;" ensures that it is hidden by default.


And you are finished with the html portion!

< JS >
Create the addTask(e) Function

1. Open your todolist.js file.
Write a function named addTask(e) {}. Functions are reusable blocks of code that perform a specific action. In this case, our function will handle adding tasks to the to-do list.

2. Understand the Argument (e)

The (e) inside the function is short for "event."
When the form is submitted (via the onsubmit attribute in the HTML), the addTask function will receive an object containing information about the form submission event. This allows us to control what happens during the form's submission.


3. Prevent Default Behavior

Add the following line to your function:
e.preventDefault();
This prevents the form from reloading the page or performing its default action when submitted.

4. Declare Variables

Use the let keyword to declare variables. These variables will store elements or values you want to work with.
For example:
wordValue: This will store the value of the input field.
errorContainer: This will reference the element for displaying errors.
error: This will reference the actual error text element.

5. Retrieve Input Value

Use document.getElementById() to get the input field by its id attribute
let wordValue = document.getElementById("taskName");

Since you only need the text the user entered, access the input's value and reassign wordValue:

wordValue = wordValue.value;

6. Retrieve Error Elements

Use document.querySelector() to access the error container and text elements by their class:

let errorContainer = document.querySelector(".error");
let error = document.querySelector(".errorText");

document.querySelector() allows you to select an element by its CSS class (preceded by .) or ID (preceded by #).

7. Validate Input Length

Add logic to check the length of wordValue:
If wordValue is less than 5 characters:

Set errorContainer.style.display to "block" to make the error visible.
Set error.innerHTML to display the message:

error.innerHTML = "The task must be longer than 5 characters";

Add a return; statement to stop further execution of the function.

Else if wordValue is greater than 50 characters, repeat the above steps but change the message to:

error.innerHTML = "The task name is too long";
Set errorContainer.style.display to "block" to make the error visible.

8. Create the List and Task Elements

Declare a variable list to retrieve the <ul> element with the class tasks:

let list = document.querySelector(".tasks");
Create a new <li> element to represent the task using document.createElement("li"):

let newTask = document.createElement("li");

9. Add Click Event to Remove Task

Add an event listener to the newTask element:

newTask.addEventListener("click", () => {
    list.removeChild(newTask);
});

This adds the event to remove an element of the list, however, you shouldn't stress over it as there are many advanced concepts surrounding it. 

10. Clear Error Messages

After passing the validation checks, clear any existing errors:

error.innerHTML = "";
errorContainer.style.display = "none";

11. Set Task Content

Assign the user's input (stored in wordValue) to the text content of newTask:

newTask.textContent = wordValue;

12. Add the Task to the List

Use appendChild() to add the newTask element to the list (the <ul> element):

list.appendChild(newTask);

Summary of Functionality:

The addTask function:

Prevents the form from refreshing the page.
Validates the input to ensure it’s not too short or too long.
Displays error messages when necessary.
Creates and adds a new task to the task list.
Allows tasks to be removed when clicked.

Challenges:

-- Add css on the todolist.css file to make it look good. --
-- Make it so the list has a trash icon and is deleted when the trash icon is clicked -- 