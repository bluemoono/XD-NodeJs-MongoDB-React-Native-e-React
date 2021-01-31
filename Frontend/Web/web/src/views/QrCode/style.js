import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
`

export const Content = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        color: #FF9900;
    }

    h2{
        color: #000066;
    }
`
export const QrCodeArea = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ValidationCode = styled.div`
    width: 350px;
    display: flex;
    flex-direction: column;
    margin: 10px;

    span{
        text-transform: uppercase;
        font-weight: bold;
        text-align: center;
    }

    input{
        font-size: 18px;
        padding: 10px;
        text-align: center;
    }

    button{
        font-size: 18px;
        font-weight: bold;
        background: #FF9900;
        color: #FFFF;
        padding: 10px;
        border-radius: 30px;
        border: none;
        cursor: pointer;
        margin-top: 10px;

        &:hover{
        background: #000066;
        }
    }
`