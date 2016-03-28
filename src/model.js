var Rx = require('rx');
var Keys = require('./keys');
var Intent = require('./intent');

var subject = new Rx.ReplaySubject(1);

let defaultTodo = {
  id: 0,
  text: "RFP Things",
  completed: false,
};

var state = {
  todos: [defaultTodo],
};

function _createNewTodo(text, completed = false) {
  let newTodo = Object.assign({}, {
    id: state.todos.length,
    text: text,
    completed: completed,
  });

  return newTodo;
}

function add(text) {
  let newTodo = _createNewTodo(text);
  let todos = state.todos.slice();

  todos.push(newTodo);
  state = Object.assign(
    {},
    state,
    {todos: todos},
  );

  subject.onNext(state);
}

function del(id) {
  let todos = state.todos.slice();
  todos = todos.filter(todo => todo.id !== id);

  state = Object.assign(
    {},
    state,
    {todos: todos},
  );

  subject.onNext(state);
}

function edit(id, text) {
  let editOneTodo = (todo) => {
    if (todo.id === id) {
      let editedTodo = Object.assign(
        {},
        _createNewTodo(text)
      );
      return editedTodo;
    } else {
      return todo;
    }
  };
  let todos = state.todos.slice();
  todos = todos.map(editOneTodo);

  state = Object.assign(
    {},
    state,
    {todos: todos},
  );

  subject.onNext(state);
}

function complete(id) {
  let completeOneTodo = (todo) => {
    if (todo.id === id) {
      let completedTodo = Object.assign(
        {},
        _createNewTodo(todo.text, true),
      );
      return completedTodo;
    } else {
      return todo;
    }
  };
  let todos = state.todos.slice();
  todos = todos.map(completeOneTodo);

  state = Object.assign(
    {},
    state,
    {todos: todos},
  );

  subject.onNext(state);
}

function completeAll() {
  let completeAllTodos = (todo) => {
    let completedTodo = Object.assign(
      {},
      _createNewTodo(todo.text, true),
    );

    return completedTodo;
  }

  let todos = state.todos.slice();
  todos = todos.map(completeAllTodos);

  state = Object.assign(
    {},
    state,
    {todos: todos},
  );

  subject.onNext(state);

}

function clearCompleted() {
  let notComplete = (todo) => !todo.completed

  let todos = state.todos.slice();
  todos = todos.filter(notComplete);

  state = Object.assign(
    {},
    state,
    {todos: todos},
  );

  subject.onNext(state);
}

Intent.subject.subscribe(function (payload) {
  switch(payload.key) {
    case Keys.TODO_ADD:
      add(payload.text);
      break;
    case Keys.TODO_DELETE:
      del(payload.id);
      break;
    case Keys.TODO_EDIT:
      edit(
        payload.id,
        payload.text,
      );
      break;
    case Keys.TODO_COMPLETE:
      complete(payload.id);
      break;
    case Keys.TODO_COMPLETE_ALL:
      completeAll();
      break;
    case Keys.TODOS_CLEAR_COMPLETED:
      clearCompleted();
      break;
    default:
      console.warn(`${payload.key} not recognized in model.`);
  }
});

subject.onNext(state);

module.exports = {
  subject: subject
};
