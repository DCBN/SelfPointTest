import styled from 'styled-components';

export const ImageGalleryContainer = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, ${props => props.opacity});
`

export const ImageCardWrapper = styled.div`
    height: 300px;
    width: 700px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`