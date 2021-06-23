import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 90px;
    background-color: #212121;
    border-bottom: 12px solid #00C853;
    display: flex;
    align-items: center;
`

export const LeftSide = styled.div`
    width: 50%;
    height: 75px;
    display: flex;
    align-items: center;
    padding-left: 12px;
    box-sizing: border-box;

    button {
        background: none;
        border: none;
        outline: none;
    }

`

export const RightSide = styled.div`
    width: 50%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    box-sizing: border-box;
`