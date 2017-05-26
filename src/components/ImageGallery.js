import React, { Component } from 'react';
import update from 'react/lib/update';
import PropTypes from 'prop-types';
import { DragSource, DragDropContext, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { ImageGalleryContainer, ImageCardWrapper } from '../styles/ImageGallery.style';
import ImageCard from './ImageCard';
import { Types } from '../Constants/ItemTypes';

const springConfig = { stiffness: 300, damping: 50 };

@DragDropContext(HTML5Backend)
export default class ImageGallery extends Component{
    
    static propTypes = {
        opacity: PropTypes.number.isRequired,
    }

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

/*
    <ImageCard 
        key={image.id} 
        index={i} 
        id={image.id} 
        image={image.url} 
        moveImage={this.moveImage}
        scale={value.x}
    />

                            <Motion key={i} style={{x: spring(this.state.click ? 1.2 : 1)}}>
                            { value =>
                                <ImageCard 
                                    key={image.id} 
                                    index={i} 
                                    id={image.id} 
                                    image={image.url} 
                                    moveImage={this.moveImage}
                                />  
                            }
                        </Motion>
*/
