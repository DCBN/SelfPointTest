import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';
import { Motion, spring } from 'react-motion';
import { ImageCardContainer } from '../styles/ImageCard.style';
import { Types } from '../Constants/ItemTypes';

// imageSource för react-dnd
const imageSource = {
    beginDrag(props) {
        return {
            id: props.id,
            index: props.index
        };
    },
};

// imageTarget för react-dnd - 
const imageTarget = {
    hover(props, monitor, component) {
        // Spara index i variabler
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        // Ersätt inte ImageCards med sig själva
        if (dragIndex === hoverIndex) {
            return;
        }
        // Gör bytet mellan ImageCards
        props.moveImage(dragIndex, hoverIndex);
        // Mutation av state är bättre för prestanda i detta fallet
        monitor.getItem().index = hoverIndex;
    }
}

// DropTarget, DragSource - Decorators för ImageCard
@DropTarget(Types.imageCard, imageTarget, connect => ({
    connectDropTarget: connect.dropTarget(),
}))
@DragSource(Types.imageCard, imageSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))
export default class ImageCard extends Component{
    
    // Proptypes
    static propTypes = {
        connectDragSource: PropTypes.func.isRequired,
        connectDropTarget: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
        isDragging: PropTypes.bool.isRequired,
        id: PropTypes.any.isRequired,
        image: PropTypes.string.isRequired,
        moveImage: PropTypes.func.isRequired,
    };

    // Init
    constructor() {
        super();
        this.state = {
            hover: false
        }
    }

    // Hantera "hover" på ImageCardContainer
    handleHover = (e) => {
        this.setState(prev => {
            return {
                hover: !this.state.hover
            }
        })
    }

    // Render
    render() {
        const { image, isDragging, connectDragSource, connectDropTarget } = this.props;
        return connectDragSource(connectDropTarget(
            <div>
                <Motion key={this.props.id} style={{scale: spring(this.state.hover ? 1.2 : 1), boxShadow: spring(this.state.hover ? 10 : 1)}}>
                    { value =>
                        <ImageCardContainer 
                            background={image} 
                            onMouseOver={this.handleHover} 
                            onMouseOut={this.handleHover}
                            style={{
                                boxShadow: `rgba(0, 0, 0, 0.2) 0px ${value.boxShadow}px ${2 * value.boxShadow}px 0px`,
                                transform: `scale(${value.scale})`,
                            }} 
                        /> 
                    }
                </Motion>
            </div>
        ));
    }
}