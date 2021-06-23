import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 45px;
    background-color: #212121;
    display: flex;
    align-items: center;
    border-top: 12px solid #00C853;
    bottom: 0;
    position: fixed;
`

export const LeftSide = styled.div`
    width: 50%;
    height: 40px;  
    display: flex; 
    align-items: center;
    padding-left: 24px;
    box-sizing: border-box;

    span {
        font-size: 14px;
        color: #fff;
        font-weight: bold;
    }
`

export const RightSide = styled.div`
    width: 50%;
    height: 40px;  
    display: flex; 
    align-items: center;
    padding-right: 24px;
    justify-content: flex-end;
    box-sizing: border-box;

    img {
       width: 80px;
    }
`