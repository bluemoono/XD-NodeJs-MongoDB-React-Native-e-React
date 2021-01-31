import styled from 'styled-components';

export const Container = styled.div`
    width: 250px;
    height: 200px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin: 20px;
    curosr:pointer;
    transition: all 0.2 ease;
    opacity: ${props => props.done ? 0.6 : 1};

    &:hover{
        opacity: 0.6;
    }
`

export const TopCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img{
        width: 80px;
        height: 80px;
    }
`

export const BottomCard = styled.div`
    width:100%;
    display: flex;
    justify-content: space-around;

    strong{
        color: #FF9900;
        font-weight: bold;
    }

    span{
        color: #707070;
    }
`