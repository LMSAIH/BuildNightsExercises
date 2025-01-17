
function addTask(e){

    e.preventDefault();

    let errorContainer = document.querySelector(".error");
    let error = document.querySelector(".errorText");
    let wordValue = document.getElementById("taskName");
    wordValue = wordValue.value;

    if(wordValue.length < 5){
       
        errorContainer.style.display = "block";
        error.innerHTML = "The task must be longer than 5 characters";
        return;
    } else if(wordValue.length > 50 ){
       
        errorContainer.style.display = "block";
        error.innerHTML = "The task name is too long";
        return;
    }

    let list = document.querySelector(".tasks");
    let newTask = document.createElement("li");

    newTask.addEventListener("click", () => {
        list.removeChild(newTask);
    });

    error.innerHTML = "";
    errorContainer.style.display = "none";

    newTask.textContent = wordValue;
    list.appendChild(newTask);

}