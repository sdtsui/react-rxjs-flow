var Rx = require('rx');

var Keys = require('./keys');


//tracks the last "1" changes
var intentSubject = new Rx.ReplaySubject(1);

module.exports = {
  subject: intentSubject,

  add: function (text) {
    intentSubject.onNext({
      key: Keys.TODO_ADD,
      text: text,
    });
  },

  delete: function (id) {
    intentSubject.onNext({
      key: Keys.TODO_DELETE,
      id: id,
    });
  },

  edit: function (id, text) {
    intentSubject.onNext({
      key: Keys.TODO_EDIT,
      id: id,
      text: text,
    });
  },

  complete: function () {
    intentSubject.onNext({
      key: Keys.TODO_COMPLETE,
    });
  },

  completeAll: function () {
    intentSubject.onNext({
      key: Keys.TODOS_COMPLETE_ALL,
    });
  },

  clearCompleted: function () {
    intentSubject.onNext({
      key: Keys.TODOS_CLEAR_COMPLETED,
    });
  },
  // *** Note : Not actually a part of state. commenting out.
  // changeFilter: function () {
  //   intentSubject.onNext({
  //     key: Keys.CHANGE_FILTER,
  //   });
  // }
};
