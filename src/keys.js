var keyMirror = require('keymirror');

module.exports = keyMirror({
  TODO_ADD: null,
  TODO_DELETE: null,
  TODO_EDIT: null,
  TODO_COMPLETE: null,
  TODOS_COMPLETE_ALL: null,
  TODOS_CLEAR_COMPLETED: null,
  // CHANGE_FILTER: null, 
  // change_filter isn't actually a part of app state. commenting out, moving to component state
});
