import styled from 'styled-components'
import { GoodsCardInfo } from './GoodsCardInfo'
import { useState } from 'react'
import Modal from '../Modal'

interface IGoodsCardProps {
  name: string;
  info: any[];
  image: string;
  description: string
}

export const GoodsCard = ({ name, info, image, description }: IGoodsCardProps): JSX.Element => {

  const [isAboutPopupOpen, setIsAboutPopupOpen] = useState<boolean>(true)

  const toggleAboutPopup = (): void => {
    setIsAboutPopupOpen(!isAboutPopupOpen)
  }

  return (
    <Container>
      <Modal closePopup={toggleAboutPopup} isOpen={isAboutPopupOpen}/>
      <Header onClick={()=>{setIsAboutPopupOpen(true)}}>
        <img src={image} alt='pizza' />
      </Header>

      <Inner>
        <Content>
          <h4>{name}</h4>
          {info.map((i, index) => {
            return (
              <GoodsCardInfo
                key={index}
                price={i.price}
                size={i.size}
                weight={i.weight}
              />
            )
          })}
        </Content>
      </Inner>
    </Container>)
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid black
`

const Inner = styled.div`
  height: calc(100% - 50px);
  padding: 10px;
`

const Header = styled.div`
  height: 50px;
  overflow: hidden;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 0;
  }
`

const Content = styled.div`
`

