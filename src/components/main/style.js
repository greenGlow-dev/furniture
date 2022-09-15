import styled from 'styled-components'


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width:100%;
height:100%;
background: url(${(props)=>props.imgUrl}); 
background-position:top left;
background-repeat: no-repeat;
background-size: 290% contain ;
`;
export const Navbar = styled.div`
position: relative;
display: flex;
align-items: center;
width: 100%;
height: 90px;
padding-top: 2%;
`
export const Logo = styled.img`
position: absolute;
width: 15%;
left: 45%;
`
export const Button = styled.div`
position: absolute;
position:${({from}) => from && 'static' };
right: 5%;
/* left:${({from}) => from && '15%' }; */
display: flex;
align-items: center;
justify-content: center;
width: 15%;
width:${({from}) => from && '40%' };
height: 50px;
background: #EC7F00;
border-radius: 20px;
font-size: 100%;
`
export const Menu = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 60%;
height: 60px;
/* border: 2px solid red; */
margin-top: 50px;
`
Menu.item = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 20%;
/* border: 1px solid blue; */
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
cursor: pointer;
&:hover{
    color: #EC7F00;
}
`
export const Content = styled.div`
position: relative;
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 70vh;
border: 1px solid red;
box-sizing: border-box;
max-height: 800px;

`
export const Text = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 40%;
height: 60%;

border: 1px solid blue;

`
export const Img = styled.img`
display: flex;
align-items: flex-end   ;
width: 65%;
height: 100%;
/* max-height: 800px; */
float: right;
`
export const H1 = styled.div`
font-family: 'Impact';
font-style: normal;
font-weight: 400;
font-size: 68px;
line-height: 83px;
color: #FFFFFF;
`

export const P = styled.div`
width: 60%;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
color: #FFFFFF;
padding-bottom: 20px;
`