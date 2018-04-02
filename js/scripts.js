//business logic
function Task (todo) {
  this.todoItem = todo;
}


//user interface logic
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var todoInput = $("#todoItem").val();
    var newItem = new Task(todoInput)

    $("#todoList ul").prepend("<li class='item'>" + newItem.todoItem + "<button class='btn btn-danger remove'>X</button></li>");
    $("#form")[0].reset();


    $(".remove").click(function() {
      $(".item").remove();

    });
  });
});
