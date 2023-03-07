import styled from "styled-components";

export const PageContainer = styled.div`
display: flex;
align-items: center;
padding: 4rem 4rem 0px;
width: 93%;
justify-content: space-between;
margin: 0 auto;
flex-wrap: wrap;
@media(max-width: 1120px){
justify-content: center;
}
`

export const FirstContainer = styled.div`
max-width: 540px;
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
align-self: start;
`

export const SecondContainer = styled.div`
max-width: 50%;

display: flex;
align-items: end;
justify-content: end;
`



export const Title = styled.h1`
width: 453px;
font-family: 'Nunito', sans-serif;
line-height: 50px;
font-size: 48px;
`
interface subtitleProps{
    border: boolean;

}
export const Subtitle = styled.p<subtitleProps>`
border-left:  ${({ border }) => border?  '5px solid rgb(1, 135, 98)' : 'none'};;    
padding-left: 1rem;
width: 500px;
height: 120 px;
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
