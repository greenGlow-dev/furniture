import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100vh;
max-height: 1000px;
padding:23px 40px ;
/* border: 1px solid green; */
`
export const MainText = styled.div`
width: 100%;
height: 83px;
font-family: 'Impact';
font-style: normal;
font-weight: 600;
font-size: 68px;
line-height: 83px;
color: #EC7F00;
text-align: center;

@media (max-width: 1268px) {
font-weight: 600;
font-size: 48px;
line-height: 33px;
border: 1px solid rebeccapurple;
padding: 20px 0;
  }

`


export const CatalogName = styled.p`
display: flex;
/* width: 40%; */
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
padding: 1rem;
color: #000000;
`
export const CatalogNameSpan = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
margin-left: 10px;
color: #EC7F00;
`
export const Galalery = styled.div`
display: grid;
grid-template-columns: auto auto auto auto;
/* border:1px solid blue; */
align-items: center;
justify-content: space-evenly;
width: 100%;
height: 100%;
margin: 1rem;
/* @media(max-width:1230px){
    grid-template-columns: auto auto; 
} */
@media (max-width: 1268px) {
    display: flex;
    flex-direction: column;
  }
`


export const Images = styled.div`
width: 324px;
height: 622px;
left: 147px;
top: 1340px;
background: #FFFFFF;
box-shadow: 0px 0px 98px rgba(0, 0, 0, 0.05);
border-radius: 12px;
`

export const Img = styled.img`
/* display: flex; */
object-fit:cover;
object-position:50% 50%;
width: 80%;
height: 100%;
padding: 5px;
/* width: ${({order})=> order && '100px;'}; */

`

export const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 210px;
height: 390px;
background: #EC7F00;
border-radius: 20px;
cursor: pointer;
`

export const Box = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
justify-content: ${({order})=> order && 'none;'};
width: 100%;
height: 60%;
background-color: grey;
background-color: ${({order})=> order && 'white;'};
height: ${({order})=> order && '40%'};
/* border:1px solid red; */
border-radius: 12px 12px 0px 0px;
`
export const Content = styled.div`
display: grid;
column-gap: 50px;
justify-content: flex-start;
height: 100%;
width: 100%;
padding: 10px;
`
Content.item = styled.div`
padding: 15px;
`
export const ItemTitle = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 140%;
letter-spacing: 0.75px;
text-transform: uppercase;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #000000;
`
export const ItemCaption = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 54px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 140%;
letter-spacing: 0.4px;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #000000;
`
export const ItemButton = styled.div`
text-align:center;
align-items: center;
padding: 8px 24px;
/* gap: 10px; */
width: 300px;
height: 36px;
font-size: large;
background: #FFC000;
border-radius: 6px;
`

export const ItemsPrice = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: bold;
font-size: 10px;
line-height: 140%;
letter-spacing: 1.5px;
text-transform: uppercase;
font-feature-settings: 'pnum' on, 'lnum' on;
color: #000000;
`
export const ItemStar = styled.img`
width: 100px;
`

