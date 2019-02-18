import React, {Component} from 'react'
import ProTypes from 'prop-types'

export default class Footer extends Component {
    renderFilter(filter, name) {
        if (filter === this.props.filter) {
            return name;
        }
        return (
            <a href='#' onClick={e => {
                e.preventDefault()
                this.props.onFilterChange(filter)
            }}>
                {name}
            </a>
        )
    }

    render() {
        return (
            <p>
                Show;
                {' '}
                {this.renderFilter('SHOW_ALL', 'All')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED', 'Completed')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE', 'Active')}
                .
            </p>
        );
    }
}

ProTypes.proTypes = {
    onFilterChange: ProTypes.func.isRequired,
    filter: ProTypes.oneOf(['SHOW_ALL', 'SHOW_COMPLETED'])
};
