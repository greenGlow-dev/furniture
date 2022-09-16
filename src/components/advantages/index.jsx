import React from 'react'
import { Container, Img, MainText, CatalogName, Galalery, Images } from './style'
import a1 from '../../assets/img/a1.png'
import a2 from '../../assets/img/a2.png'
import a3 from '../../assets/img/a3.png'
import a4 from '../../assets/img/a4.png'
import a5 from '../../assets/img/a5.png'
import a6 from '../../assets/img/a6.png'
import a7 from '../../assets/img/a7.png'
import a8 from '../../assets/img/a8.png'


export const Advantages = () => {
  return (
    <Container>
      <MainText>Наши приемущества</MainText>
      <Galalery>
        <Images>
          <Img src={a1} />
          <CatalogName>1. Собственное производство</CatalogName>
        </Images>
        <Images>
          <Img src={a2} />
          <CatalogName>2. Качественные материалы</CatalogName>
        </Images>
        <Images>
          <Img src={a3} />
          <CatalogName>3. Гарантия качества</CatalogName>
        </Images>
        <Images>
          <Img src={a4} />
          <CatalogName>4. Надежность</CatalogName>
        </Images>
        <Images>
          <Img src={a5} />
          <CatalogName>5. 3D Визуализация</CatalogName>
        </Images>
        <Images>
          <Img src={a6} />
          <CatalogName>6. Экологичность</CatalogName>
        </Images>
        <Images>
          <Img src={a7} />
          <CatalogName>7. Поддержка на всех этапах</CatalogName>
        </Images>
        <Images>
          <Img src={a8} />
          <CatalogName>8. Доставка и установка</CatalogName>
        </Images>
      </Galalery>
      
    </Container>
  )
}
export default Advantages 