import React from 'react'
import { Container, Img, MainText, CatalogName, Galalery, Images, Box, Content, ItemTitle, ItemCaption, ItemButton, ItemsPrice, ItemStar} from './style'
import caption from '../../assets/img/caption.png'


export const Items = () => {
  return (
    <Container>
      <MainText>Лучшие товары</MainText>
      <Galalery>

        <Images>
          <Box>
            <Img src='https://freepngimg.com/thumb/armchair/3-armchair-png-image.png' />
          </Box>
          <Box order={true} >

          <Content>
            <ItemTitle>Lorem ipsum dolor sit amet</ItemTitle>
            <ItemCaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.</ItemCaption>
            <ItemCaption>
                <ItemStar src={caption} />
                 <ItemsPrice>855 у.е.</ItemsPrice>
            </ItemCaption>
            <ItemButton>Добавить в корзину</ItemButton>
          </Content>
          </Box>
        
          
        </Images>
        <Images>
            <Box>
             <Img src='https://freepngimg.com/thumb/chair/16-chair-png-image.png' />
          </Box>
          <Box order={true} >
            <Content>
            <ItemTitle>Lorem ipsum dolor sit amet</ItemTitle>
            <ItemCaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.</ItemCaption>
            <ItemCaption>
                <ItemStar src={caption} />
                 <ItemsPrice>855 у.е.</ItemsPrice>
            </ItemCaption>
            <ItemButton>Добавить в корзину</ItemButton>
          </Content>
          </Box>
        </Images>
        <Images>
            <Box>
            <Img src='https://freepngimg.com/thumb/armchair/3-armchair-png-image.png' />
          </Box>
          <Box order={true} >
            <Content>
            <ItemTitle>Lorem ipsum dolor sit amet</ItemTitle>
            <ItemCaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.</ItemCaption>
            <ItemCaption>
                <ItemStar src={caption} />
                 <ItemsPrice>855 у.е.</ItemsPrice>
            </ItemCaption>
            <ItemButton>Добавить в корзину</ItemButton>
          </Content>
          </Box>
        </Images>
        <Images>
            <Box>
            <Img src='https://freepngimg.com/thumb/chair/16-chair-png-image.png' />
          </Box>
          <Box order={true} >
            <Content>
            <ItemTitle>Lorem ipsum dolor sit amet</ItemTitle>
            <ItemCaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sed odio sed nascetur.</ItemCaption>
            <ItemCaption>
                <ItemStar src={caption} />
                 <ItemsPrice>855 у.е.</ItemsPrice>
            </ItemCaption>
            <ItemButton>Добавить в корзину</ItemButton>
          </Content>
          </Box>
        </Images>
      
      </Galalery>
      
    </Container>
  )
}
export default Items 