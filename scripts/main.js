$(document).ready(function(){

    function renderTodos(){
    
    //Array for todos//
    var allToDos =[];
    var todoIndex = localStorage.length;

    //On click event for adding items to the list//
    $("button").on("click", function(e){
        e.preventDefault();
        var todos = $(".todoInput").val();
        allToDos.push(todos);
        //Local Storage//
       
        var todoText = $("<li>").html(todos);
        if (todos === ''){
            alert("Debes agregar una tarea");
        } else {
            localStorage.setItem(todoIndex, todos);
            console.log(todos);
            todoText.prepend("<input type='checkbox' class='checkbox'></input>")
            $(".list-group").append(todoText);
            $(".list-group-item").text(todos);
        }
        
    })

    //On click event for stricking out the text//
    $(document).on("click", function(e){
        $target = $(e.target);
            $target.addClass('check')
    })
    }

    renderTodos();
})





