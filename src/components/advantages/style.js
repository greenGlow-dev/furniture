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
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-around;
`

export const Img = styled.img`
/* display: flex; */
object-fit:cover;
   object-position:50% 50%;
balign-items: center;
width: 80%;
height: 100%;
padding: 5px;
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

