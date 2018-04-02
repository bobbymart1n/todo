//business logic
function Task (todo) {
  this.todoItem = todo;
}


//user interface logic
(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var todoInput = $("#todoItem").val();
  });
});
