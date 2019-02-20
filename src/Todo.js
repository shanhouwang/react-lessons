import React, {Component} from 'react';
import ProTypes from 'prop-types'

export default class Todo extends Component {
    render() {
        return (
            <li
                onClick={this.props.onClick}
                className='todo'
                style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none',
                    cursor: this.props.completed ? 'default' : 'pointer'
                }}
            >
                {this.props.text}
            </li>
        );
    }
}

ProTypes.propTypes = {
    onClick: ProTypes.func.isRequired,
    text: ProTypes.string.isRequired,
    complete: ProTypes.bool.isRequired
}
