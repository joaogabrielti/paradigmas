import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`
export const Content = styled.div`
    width: 100%;
    height: 380px;
    display: flex;
    flex-direction: column;
    align-itens: center;
    box-sizing: border-box;

    table {
        width: 100%;
        border-spacing: 0px;
    }

    th {
        background: #212121;
        color: #00C853;
        font-size: 21px;
    }

    td {
        text-align: center;
        color: #212121;
        font-weight: bold; 
    }

`

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    img {
        width: 30px;
        height: 30px;
    }

`

export const Item = styled.div`
    width: 30%;

    button {
        cursor: pointer;
        background: none;
        border: none;
        outline: none;
    }

`