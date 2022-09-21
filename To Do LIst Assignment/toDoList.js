let todoForm = document.getElementById("newTodo");
let todoList = document.getElementById("List");

todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let removeButton = document.createElement("button");
  removeButton.innerText = "Remove";

  let newTodo = document.createElement("li");
  newTodo.innerText = document.getElementById("task").value;

  todoList.appendChild(newTodo);
  newTodo.appendChild(removeButton);

  todoForm.reset();
});

document.addEventListener("click",function(e){
    const goAway = e.target.tagName.toLowerCase();
        if (goAway ==="li"){
         e.target.style.textDecoration = "line-through";}
        else if (goAway==="button"){
        e.target.parentNode.remove();
    }

});