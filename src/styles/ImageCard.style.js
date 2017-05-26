import styled from 'styled-components';

export const ImageCardContainer = styled.div`
    height: 300px;
    width: 200px;
    background: url(${props => props.background});
    background-size: 100%;
    margin: 0 15px 0 15px;
    float: left;
    cursor: pointer;
`

/*
    transform: scale(${props => props.scale});
    box-shadow: 0px ${props => props.boxShadow}px 5px 0px rgba(50, 50, 50, 0.75);
*/