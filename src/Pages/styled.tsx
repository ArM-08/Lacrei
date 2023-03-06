import styled from "styled-components";

export const PageContainer = styled.div`
display: flex;
align-items: center;
width: 90%;
margin: 0 auto;
flex-wrap: wrap;
@media(max-width: 1330px){
justify-content: center;
}
`

export const FirstContainer = styled.div`
min-width: 50%;
display: flex;
flex-direction: column;

`

export const SecondContainer = styled.div`
min-width: 50%;
height: 720px;
display: flex;
align-items: center;
justify-content: end;
`



export const Title = styled.h1`
width: 453px;
font-family: 'Nunito', sans-serif;
line-height: 65px;
font-size: 48px;
`
export const Subtitle = styled.p`
width: 403px;
height: 66px;
font-family: 'Nunito';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 33px;
color: #515151;
margin-top: 48px;
margin-bottom: 32px;
`

export const Buttons = styled.div`
display: flex;
gap: 60px;
`
 export const Button = styled.a`
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
width: 192px;
height: 48px;
left: 325px;
top: 400px;
background: ${props => props.theme || '#FFF'};
border: 1px solid #018762;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;
font-family: 'Nunito';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
color:  ${props => props.color || '#FFF'}
`

export const ImgPage = styled.img``
