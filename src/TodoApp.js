import React, {Component} from 'react'
import ProTypes from 'prop-types'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Footer from './footer'

const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export default class TodoApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visibilityFilter: VisibilityFilters.SHOW_ALL,
            visibleTodos: []
        }
    }

    addTodo(text) {
        var nextVisibleTodos = [...this.state.visibleTodos]
        nextVisibleTodos.push({
            text: text,
            completed: false
        })
        // setState会重新走render
        this.setState({
            visibleTodos: nextVisibleTodos
        })
    }

    completeTodo(index) {
        var nextVisibleTodos = [...this.state.visibleTodos.slice(0, index),
            Object.assign({}, this.state.visibleTodos[index], {
                completed: true
            }),
            ...this.state.visibleTodos.slice(index + 1)]
        this.setState({
            visibleTodos: nextVisibleTodos
        })
    }

    setVisibilityFilter(nextFilter) {
        this.setState(
            {visibilityFilter: nextFilter}
        )
    }

    render() {
        const {visibleTodos, visibilityFilter} = this.state
        let todos = []
        switch (visibilityFilter) {
            case VisibilityFilters.SHOW_ALL:
                todos = visibleTodos
                break
            case VisibilityFilters.SHOW_COMPLETED:
                todos = visibleTodos.filter(todo => todo.completed)
                break
            case VisibilityFilters.SHOW_ACTIVE:
                todos = visibleTodos.filter(todo => !todo.completed)
                break
        }

        return (
            <div>
                <AddTodo onAddClick={text => this.addTodo(text)}/>
                <TodoList
                    todos={todos}
                    onTodoClick={index => this.completeTodo(index)}/>
                <Footer filter={visibilityFilter}
                        onFilterChange={nextFilter => this.setVisibilityFilter(nextFilter)}/>
            </div>
        )
    }
}

ProTypes.proTypes = {
    onAddClick: ProTypes.func.isRequired,
};
