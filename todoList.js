let todoList = {
  todos: [],

  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log('Your To-Do List is empty!')
    } else {
      console.log('My To-Do\'s:');
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].completed === true) {
        console.log('(x)', this.todos[i].todoText);
      }
      else {
        console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position){
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

// //function to displayTodos
// function displayTodos() {
//   console.log('My todos: ', todos);
// }
//
// //function to add
// function addTodo(element) {
//   todos.push(element)
//   displayTodos()
// }
//
// //function to change
// function changeTodo(position, newValue) {
//   todos[position] = newValue;
//   displayTodos()
// }
//
// //functin to delete
// function deleteTodo(position) {
//   todos.splice(position, 1)
//   displayTodos()
// }
//
// // displaytodos()
// // addTodo('item 10');
// // changeTodo(0, 'New Test')
// // deleteTodo(0)
