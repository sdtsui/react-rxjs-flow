var Rx = require('rx');
var Model = require('./model');
var React = require('react');
var TodoApp = require('./views/TodoApp');
import Intent from './intent';

// **since we're not filtering, we should just be able to use Model.subject, as it inherits Observable
var Observable = Model.subject.map(function (appState) {
  // var filteredList = appState.todos.filter(function (item) {
  //   var isEven = item % 2 === 0
  //   return appState.filterEvens ? !isEven : isEven;
  // });
  // return update(appState, {
  //   $merge: {
  //     filteredList: filteredList
  //   }
  // });
  // 
  // Do Nothing for Now:
  return appState;
});


//REACT ENTRYPOINT
Observable.subscribe((appState) => {
  //Dirty:
  
  appState.Intent = Intent;

  React.render(
    <TodoApp {...appState}/>,
    document.getElementById('app')
  );
});
