import React, { Component } from 'react';
import update from 'react/lib/update';
import PropTypes from 'prop-types';
import { DragSource, DragDropContext, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ImageCard from './ImageCard';
import { Types } from '../Constants/ItemTypes';
import { ImageGalleryContainer, ImageCardWrapper } from '../styles/ImageGallery.style';

// Kontext för react-dnd
@DragDropContext(HTML5Backend)
export default class ImageGallery extends Component{
    // Proptypes
    static propTypes = {
        opacity: PropTypes.number.isRequired,
    }

    // Init
    constructor(props) {
        super(props);
        this.state = {
            images: [
                {url: 'http://www.impawards.com/2017/posters/logan_ver5_xxlg.jpg', id: 1},
                {url: 'http://graphicdesignjunction.com/wp-content/uploads/2011/12/grey-movie-poster.jpg', id: 2},
                {url: 'http://www.impawards.com/2017/posters/beauty_and_the_beast_ver3_xxlg.jpg', id: 3},
            ],
            click: true
        };
        this.moveImage = this.moveImage.bind(this);
    }

    // moveImage - byt plats på två bilder när du dra en över den andra
    moveImage(dragIndex, hoverIndex) {
        const { images } = this.state;
        const dragImage = images[dragIndex];
        
        this.setState(update(this.state, {
            images: {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragImage],
                ],
            },
        }));
    }

    // Render
    render() {
        const { images } = this.state;
        return (
                <ImageGalleryContainer opacity={this.props.opacity}>
                    <ImageCardWrapper>  
                        {images.map((image, i) => (
                            <ImageCard 
                                key={image.id} 
                                index={i} 
                                id={image.id} 
                                image={image.url} 
                                moveImage={this.moveImage}
                            />
                        ))}
                    </ImageCardWrapper>
                </ImageGalleryContainer>
        )
    }
}