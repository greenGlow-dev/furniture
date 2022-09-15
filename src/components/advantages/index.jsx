import React from 'react'
import { Container, Content, Img, Text, MainText, Inform, CatalogName, CatalogNameSpan, Galalery, Images, Button } from './style'
import first from '../../assets/img/1.png'
import second from '../../assets/img/2.png'
import thirt from '../../assets/img/3.png'


export const Advantages = () => {
  return (
    <Container>
      <MainText>Каталог продукции</MainText>
      <Content>

        <CatalogName>Мебель для <CatalogNameSpan> ДОМА</CatalogNameSpan></CatalogName>
        <Inform>Привнесите в свой дом уют
          и комфорт</Inform>

      </Content>
      <Galalery>
        <Images>
          <Img src={first} />
          <CatalogName>Стеллажи</CatalogName>
        </Images>
        <Images>
          <Img src={second} />
          <CatalogName>Столы</CatalogName>
        </Images>
        <Images>
          <Img src={thirt} />
          <CatalogName>Шкафы</CatalogName>
        </Images>
      </Galalery>
      <Button>Подробнее</Button>


      <Content>

        <CatalogName>Мебель для <CatalogNameSpan> ДОМА</CatalogNameSpan></CatalogName>
        <Inform>Привнесите в свой дом уют
          и комфорт</Inform>

      </Content>
      <Galalery>
        <Images>
          <Img src={first} />
          <CatalogName>Стеллажи</CatalogName>
        </Images>
        <Images>
          <Img src={second} />
          <CatalogName>Столы</CatalogName>
        </Images>
        <Images>
          <Img src={thirt} />
          <CatalogName>Шкафы</CatalogName>
        </Images>
      </Galalery>
      <Galalery>
        <Images>
          <Img src={first} />
          <CatalogName>Стеллажи</CatalogName>
        </Images>
        <Images>
          <Img src={second} />
          <CatalogName>Столы</CatalogName>
        </Images>
      </Galalery>
      <Button>Подробнее</Button>
      
    </Container>
  )
}
export default Advantages 