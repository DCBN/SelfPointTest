import styled from 'styled-components';

export const SwitchContainer = styled.div`
    width: 75px;
    height: 25px;
    background: white;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(0, -50%);
    border-radius: 2px;
    border: 1px solid #e3e3e3;
`;

export const SwitchInput = styled.input`
    visibility: hidden;
    &:checked + label {
        left: 0;
        border-radius: 2px 0 0 2px;
        background: #367ab2;
        color: white;
    }
`

export const SwitchLabel = styled.label`
    display: block;
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    cursor: pointer;
    background: black;
    border-radius: 0 2px 2px 0;
    transition: all 0.4s ease;
    background: #ededed;
    color: black
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 0.8em;
    text-align: center;
    line-height: 25px;
`