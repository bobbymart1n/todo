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

    $("#todoList ul").prepend("<li class='item mt-2'>" + newItem.todoItem + "<button class='btn btn-danger remove ml-2'>X</button></li>");
    $("#form")[0].reset();

    //clicking button removes all list items...
    $(".remove").click(function() {
      $(this).parent().remove();
    });
  });
});
