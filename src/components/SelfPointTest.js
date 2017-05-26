import React, { Component } from 'react';
import { AppContainer, Overlay, DarkmodeController, DarkmodeLabel } from '../styles/SelfPointTest.style';
import Switch from './Switch';
import ImageGallery from './ImageGallery';

export default class SelfPointTest extends Component {
    // Init
    constructor() {
        super();
        this.state = {
            darkMode: false,
            scrollTop: 0
        }
        this.toggleDarkmode = this.toggleDarkmode.bind(this);
    }

    // Toggle:a mörk bakgrund för ImageGallery
    toggleDarkmode() {
        this.setState(prev => {
            return {
                darkMode: !this.state.darkMode
            }
        })
    }

    // Render
    render() {
        return (
            <AppContainer background="#3498db">
                <DarkmodeController>
                   <DarkmodeLabel color={this.state.darkMode ? 'white' : 'black'}>Dark mode:</DarkmodeLabel>
                    <Switch id="darkmode" callback={this.toggleDarkmode}/>
                </DarkmodeController>
                <ImageGallery opacity={this.state.darkMode ? 0.8 : 0} imagePosition={[40, 50]}/>
            </AppContainer>
        )
    }
}
