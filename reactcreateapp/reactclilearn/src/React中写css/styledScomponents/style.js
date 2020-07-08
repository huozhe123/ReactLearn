import styled from 'styled-components';
export const HomeWrapper = styled.div`
  font-size: 50px;
  color:red;
  .title{
    color:tomato;
    span{
      &::after{
        content: "aaa"
      }
      &:hover{
        color:green;
      }
      &.active{
      color: blue;
      }
    }
    
  }
`
export const TitleWrapper = styled.span`
  text-decoration:underline;
`
export const H2Wrapper = styled.h2`
  color: ${props=>props.theme.themeColor}
`