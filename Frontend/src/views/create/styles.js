import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`
export const Content = styled.div`
    width: 100%;
    height: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    margin-top: 150px;
`

export const TypeBar = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 64px;
        height: 64px;
    }

    button {
        outline: none;
        background: none;
        border: none;
        cursor: pointer;
    }

    span {
        font-weight: bold;
        margin-top: 10px;
        color: #212121;
    }
`

export const IconBar = styled.div`
    display: flex;
    flex-direction: row;
`

export const FormLine = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

export const FormItem = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    justify-content: start;

    label {
        font-weight: bold;
        color: #212121;
        padding-bottom: 5px;
        padding-top: 5px;
    }

    input {
        height: 25px;
        border: 2px solid #212121;
        border-radius: 5px;
    }

    textarea {
        border-radius: 10px;
        border: 2px solid #212121;
    }

    button {
        height: 40px;
        background: #00C853;
        color: #212121;
        border: none;
        outline: none;
        border-radius: 7px;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
    }
`
