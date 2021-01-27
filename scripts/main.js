$(document).ready(function(){

    function renderTodos(){
        
    var allToDos =[];
    var todoIndex = localStorage.length;

    $("button").on("click", function(e){
        e.preventDefault();
        var todos = $(".todoInput").val();
        allToDos.push(todos);
        localStorage.setItem(todoIndex, todos);
        console.log(todos);
        var todoText = $("<li>").html(todos);
        $(".list-group").append(todoText);
        $(".list-group-item").text(todos);
    })
    }

    renderTodos();
})





