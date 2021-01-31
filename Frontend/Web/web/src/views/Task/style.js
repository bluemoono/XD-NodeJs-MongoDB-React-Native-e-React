import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 70px;
`

export const Form = styled.div`
    width: 50%;
`

export const TypeIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    img{
        width: 50px;
        height: 50px;
        margin: 10px;
        cursor: pointer;

        &:hover{
            opacity: 0.6;
        }
    }

    button{
        border: none;
        background: none;
    }

    .inative{
        opacity: 0.4;
    }
`

export const Input = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    span{
        color: #707070;
        font-size: 18px;
        margin: 20px 0;
    }

    input{
        font-size: 16px;
        padding: 10px;
        border: none;
        border-bottom: 1px solid #FF9900;
    }
    
    img{
        width: 20px;
        height: 20px;
        position: relative;
        left: 90%;
        bottom: 35px;
    }
`

export const TextArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    span{
        color: #707070;
        font-size: 18px;
        margin: 20px 0;
    }

    textarea{
        font-size: 16px;
        padding: 10px;
        border: 1px solid #FF9900;
    }
`

export const Options = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    button{
        font-weight: bold;
        color: #000066;
        border: none;
        background: none;
        font-size: 20px;
        cursor: pointer;

        &:hover{
            opacity: 0.7;
        }
    }

    div{
        font-weight: bold;
        display: flex;
        align-items: center;
        color: #FF9900;
        font-size: 20px;
    }
`

export const Save = styled.div`
    width: 100%;

    button{
        width: 100%;
        background-color: #FF9900;
        border: none;
        border-radius: 15px;
        color: #FFF;
        font-size: 24px;
        padding: 10px;
        margin: 30px 0;

        &:hover{
            opacity: 0.7;
        }
    }
`