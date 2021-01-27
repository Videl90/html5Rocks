

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('check');
  }
}, false);
// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
   
    var inputValue = document.getElementById("todoInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Debes agregar una tarea :)");
    } else {
      document.getElementById("todoList").appendChild(li);
    }
    document.getElementById("todoInput").value = "";
  
    
  } 





