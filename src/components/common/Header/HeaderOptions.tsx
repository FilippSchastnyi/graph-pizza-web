import styled from "styled-components";

const HeaderOptions = () => {

  const options = [
    {name: 'Пицца'},
    {name: 'Закуски'},
    {name: 'Десерты'},
    {name: 'Напитки'},
  ]

  return (
    <List>
      {
        options.map(option => <li key={option.name}>{option.name}</li>)
      }
    </List>
  )
}

const List = styled.ul`
 display:flex
`

export default HeaderOptions
