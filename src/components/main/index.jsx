import React from 'react'
import { Container, Navbar, Logo, Button , Menu, Content, Text , Img, H1, P} from './style'
import art from '../../assets/img/art.svg'
import logo from '../../assets/img/MAXLOFT.svg'
import comfort from '../../assets/img/comfort2.jpg'

export const Main = () => {
  return (
    <Container imgUrl={art}>
        <Navbar>
            <Logo src={logo} />
            <Button>Оставить заявку</Button>
        </Navbar>
        <Menu>
            <Menu.item>О компании</Menu.item>
            <Menu.item>Каталог</Menu.item>
            <Menu.item>Приемущества</Menu.item>
            <Menu.item>Контакты</Menu.item>
        </Menu>
        <Content>
            <Text>
                <H1>Мебель на заказ</H1>
                <P>Мебель в стиле лофт на заказ по доступным ценам</P>
                <Button from={true} >Оставить заявку</Button>
            </Text>
            <Img src={comfort}/>
        </Content>

    </Container>
  )
}
export default Main