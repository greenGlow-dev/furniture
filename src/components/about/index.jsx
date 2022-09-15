import React from 'react'
import { Container, Content, Img, Text, MainText, Inform } from './style'
import Poligon from '../../assets/img/polygon.jpg'

export const About = () => {
  return (
    <Container>
      <MainText>О компании</MainText>
      <Content>
        <Text>
          <Inform>
            Мы изготавливаем авторскую мебель на заказ в стиле лофт для дома и бизнеса. Мы работаем на рынках B2B и B2C. Мы не только продаем, но и сами проектируем и производим мебель от этапа отрисовки макета до доставки и монтажа готового изделия. Вся наша продукция изготавливается мелко-серийно либо по
            индивидуальным заказам.
          </Inform>
          <Inform>
Вы можете заказать изготовление мебели в стиле лофт любой сложности по:
          </Inform>
          <Inform>
    Дизайн проекту
          </Inform>
          <Inform>

    Фотографиям и картинкам
          </Inform>
          <Inform>
     Вашим эскизам и чертежам
          </Inform>
        </Text>
        <Img src={Poligon} />
      </Content>

    </Container>
  )
}
export default About 