var Rx = require('rx');
var Model = require('./model');

var React = require('react');
var MainSection = require('./views/components/MainSection');


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
  React.render(
    <MainSection {...appState}/>,
    document.getElementById('app')
  );
});
