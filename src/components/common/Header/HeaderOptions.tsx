import { useId } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IHeaderOptions } from '../../../Interfaces/Options'

const HeaderOptions = ({setModalState}: IHeaderOptions): JSX.Element => {
  const options = [
    { name: "Пицца", route: "/pizzas", id: useId() },
    { name: "Закуски", route: "/snacks", id: useId() },
    { name: "Десерты", route: "/desserts", id: useId() },
    { name: "Напитки", route: "/drinks", id: useId() },
  ];


  return (
    <nav>
      <List>
        {options.map((option) => (
          <Item key={option.id}>
            <p>{option.id}</p>
            <Link to={option.route}>{option.name}</Link>
          </Item>
        ))}
      </List>
      <button onClick={()=>{setModalState(true)}}>
        Registration
      </button>
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
