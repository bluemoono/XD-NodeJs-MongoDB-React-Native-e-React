import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`

export const FilterArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    flex-wrap: wrap;

    button{
        border: none;
        background: none;
    }
`

export const Title = styled.div` 
    width: 100%;
    border-bottom: 1px solid #000066;
    display: flex;
    justify-content: center;

    h2{
        color: #000066;
        position: relative;
        top: 35px;
        background: #FFF;
        padding 0 20px;
    }
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 100px;

    a{
        text-decoration: none;
        color: #000;
    }
`