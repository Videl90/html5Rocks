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
        todoText.prepend("<input type='checkbox' class='checkbox'></input>")
        $(".list-group").append(todoText);
        $(".list-group-item").text(todos);
    })

    $(document).on("click", function(e){
        $target = $(e.target);
            $target.addClass('check')
    })
    }

    renderTodos();
})





