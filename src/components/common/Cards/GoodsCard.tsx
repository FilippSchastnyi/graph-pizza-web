import styled from 'styled-components'

interface IGoodsCardProps {
  text: string;
  image: string
}

export const GoodsCard = ({ text, image }: IGoodsCardProps): JSX.Element => {
  return (<Container>
    <Header>
      <img src={image} alt='pizza' />
    </Header>
    <Inner>
      <Content>
        {text}
      </Content>
      <Footer>
        PRICE 20$!
      </Footer>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Header = styled.div`
  height: 50px;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 0;
  }
`

const Content = styled.div`
`

const Footer = styled.div`

`

