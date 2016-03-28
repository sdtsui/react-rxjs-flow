import React, { Component, PropTypes } from 'react'
import Header from './components/Header'
import MainSection from './components/MainSection'
import Intent from '../intent'

class TodoApp extends Component {
  render() {
    const { todos, Intent } = this.props
    console.log("todos:", todos);
    console.log("____");
    console.log("Intent :", Intent);
    return (
      <div>
        <Header addTodo={Intent.add} />
        <MainSection todos={todos} Intent={Intent} />
      </div>
    )
  }
}

TodoApp.propTypes = {
  todos: PropTypes.array.isRequired,
  Intent: PropTypes.object.isRequired
}

// Do RxJS-React bindings exist?

export default TodoApp;