import styled from "styled-components"; 


export const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`
export const Post = styled.div`
    margin: 20px 0;
    a{
        font-weight: bold;
        font-size: 20px;
        color:white;
    }
`
export const Pagination = styled.div`
    text-align: center;
    a{
        padding: 20px;
        background-color: black;
        border-radius: 4px;
        &:hover{
            
            background-color: #999
            
        }
    }
`