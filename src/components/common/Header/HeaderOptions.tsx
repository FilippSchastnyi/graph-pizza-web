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
        options.map(option => <Item key={option.name}>{option.name}</Item>)
      }
    </List>
  )
}

const List = styled.ul`
  display: flex
`

const Item = styled.li`
  margin-left: 10px;
`

export default HeaderOptions
