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