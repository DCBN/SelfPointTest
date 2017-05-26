import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SwitchContainer, SwitchInput, SwitchLabel } from '../styles/Switch.style';

export default class Switch extends Component {
    // Proptypes
    static propTypes = {
        id: PropTypes.string.isRequired,
        callback: PropTypes.func.isRequired
    };

    // Init
    constructor() {
        super();   
        this.state = {
            checked: false,
        }
        this.toggleCheck = this.toggleCheck.bind(this);
    }

    // Toggle:a checkbox "check" state
     toggleCheck() {
        this.setState(prev => {
            return {
                checked: !this.state.checked
            }
        });
        this.props.callback();
    }

    // Render
    render() {
        return (
            <SwitchContainer ref='switch'>
                <SwitchInput type="checkbox" value="none" id={this.props.id} checked={ this.state.checked } onChange={this.toggleCheck} />
                <SwitchLabel htmlFor={this.props.id}> { this.state.checked ? 'ON' : 'OFF' } </SwitchLabel>
            </SwitchContainer>
        )
    }
}