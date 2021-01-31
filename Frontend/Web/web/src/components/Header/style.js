import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #000066;
    border-bottom: 5px solid #FF9900;
    display: flex;
`

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img{
        width:110px;
        height:35px;
    }
`

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    a, button{
        color: #FFF;
        font-weight: bold;
        text-decoration: none;
        margin:0 10px;

        &:hover{
            color: #FF9900;
        }
    }

    button{

        background: none;
        border: none;
        cursor: pointer;
    }

    #notification{
        img{
            width:25px;
            height:25px;
        }

        span{
            background: #FFF;
            color: #FF9900;
            padding: 1px 5px;
            border-radius: 50%;
            position: relative;
            top: -16px;
            right: 11px;
        }

        &:hover{
            opacity: 0.9;
        }
    }

    .divisor::after{
        content: "|";
        color: #FFF;
        margin: 0 10px;
    }

    .sair{
        font-size: 18px;
    }
`