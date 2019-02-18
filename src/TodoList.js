import React, {Component} from 'react'
import Todo from './Todo'
import ProTypes from 'prop-types'

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((td, index) =>
                    <Todo {...td}
                          key={index}
                          onClick={() => this.props.onTodoClick(index)}/>
                )}
            </ul>
        );
    }
}

ProTypes.proTypes = {
    onTodoClick: ProTypes.func.isRequired
};
