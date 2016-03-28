import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem'
import Footer from './Footer'

const SHOW_ALL = 'show_all';
const SHOW_COMPLETED = 'show_completed';
const SHOW_ACTIVE = 'show_active';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { filter: SHOW_ALL }
  }

  handleClearCompleted() {
    Intent.clearCompleted();
  }

  handleShow(filter) {
    this.setState({ filter })
  }

  renderToggleAll(completedCount) {
    const { todos, Intent } = this.props
    if (todos.length > 0) {
      return (
        <input className="toggle-all"
               type="checkbox"
               checked={completedCount === todos.length}
               onChange={Intent.completeAll} />
      );
    }
  }

  renderFooter(completedCount) {
    const { todos } = this.props
    const { filter } = this.state
    const activeCount = todos.length - completedCount

    if (todos.length) {
      return (
        <Footer completedCount={completedCount}
                activeCount={activeCount}
                filter={filter}
                onClearCompleted={this.handleClearCompleted.bind(this)}
                onShow={this.handleShow.bind(this)} />
      )
    }
  }

  render() {
    const { todos, intents } = this.props
    const { filter } = this.state

    const filteredTodos = todos.filter(TODO_FILTERS[filter])
    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )

    return (
      <section className="main">
        {this.renderToggleAll(completedCount)}
        <ul className="todo-list">
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} Intent={this.props.Intent}/>
          )}
        </ul>
        {this.renderFooter(completedCount)}
      </section>
    )
  }
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default MainSection
