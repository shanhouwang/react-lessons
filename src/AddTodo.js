import React, {Component} from 'react'
import ProTypes from 'prop-types'

export default class AddTodo extends Component {
    handleClick(e) {
        // react 提供了一个特殊的属性 refs，可以是字符串，也可以是function，当refs传入一个方法的时候，方法的参数
        // 是一个类的实例或者一个DOM节点。上面AddTodo组件通过refs获取输入框节点，直接对节点进行赋值操作
        const node = this.refs.input
        const text = node.value.trim()
        this.props.onAddClick(text)
        node.value = ''
    }

    render() {
        return (
            <div>
                <input type='text' ref='input'/>
                <button onClick={(e) => this.handleClick(e)}>Add</button>
            </div>
        );
    }
}

ProTypes.proTypes = {
    onAddClick: ProTypes.func.isRequired,
};
