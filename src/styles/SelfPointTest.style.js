import styled from 'styled-components';

export const AppContainer = styled.div`
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background: ${props => props.background}
`;

export const DarkmodeController = styled.div`
    height: 50px;
    width: 200px;
    position: absolute;
    top:0;
    right: 0;
    z-index: 20;
`

export const DarkmodeLabel = styled.span`
    float: left;
    line-height: 50px;
    color: ${props => props.color}
`