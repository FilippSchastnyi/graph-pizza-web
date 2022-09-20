import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderOptions = (): JSX.Element => {
  const options = [
    { name: "Пицца", route: "/pizzas" },
    { name: "Закуски", route: "/snacks" },
    { name: "Десерты", route: "/desserts" },
    { name: "Напитки", route: "/drinks" },
  ];

  return (
    <nav>
      <List>
        {options.map((option) => (
          <Item key={option.name}>
            <Link to={option.route}>{option.name}</Link>
          </Item>
        ))}
      </List>
    </nav>
  );
};

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  margin-left: 10px;
`;

export default HeaderOptions;
