import styled from 'styled-components';

export const Container = styled.div`
    width: 160px;
    height: 50px;
    background: ${props => props.actived ? '#FF9900' : '#000066'};
    border-radius: 5px;
    padding: 10px;
    
    display: flex;
    flex-direction:column;
    justify-content: space-around;

    img{
        width: 30px;
        height: 30px;
    }

    span{
        color: #FFF;
        font-weight: bold;
        align-self: flex-end;
    }

    &:hover{
        background: #FF9900;
        cursor: pointer;
        opacity: 0.9;
    }
`