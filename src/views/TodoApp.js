import React, { Component, PropTypes } from 'react'
// import Header from '../components/Header'
// import MainSection from '../components/MainSection'
import Intent from '../intent'

class TodoApp extends Component {
  render() {
    const { todos, actions } = this.props
    // return (
    //   <div>
    //     <Header addTodo={actions.addTodo} />
    //     <MainSection todos={todos} actions={actions} />
    //   </div>
    // )
    // 
    return (
      <div>
      TODOAPP
      </div>
    );
  }
}

// TodoApp.propTypes = {
//   todos: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// }

// function mapStateToProps(state) {
//   return {
//     todos: state.todos
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(TodoActions, dispatch)
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoApp)

export default TodoApp;