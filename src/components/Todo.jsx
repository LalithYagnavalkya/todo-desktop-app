import React, { useState } from "react";
import styled from "styled-components";

const Todo = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <div className="content">{item}</div>
      <div className="right">
        <img src="https://img.icons8.com/material-outlined/24/undefined/minus.png" />
        <div>delete</div>
      </div>
    </Wrapper>
  );
};

export default Todo;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
  padding: 1.5rem 0.5rem;
  background-color: ${(props) => props.theme.primaryColor};
  /* filter: blur(4px); */
  border-radius: 10px;
  :hover {
    filter: brightness(1.1);
    filter: blur(0px);
    cursor: pointer;
  }
  .content {
    padding-left: 1rem;
    display: flex;
    justify-content: left;
    width: 70%;
    font-weight: 500;
    font-size: 1.3rem;
    /* background-color: black; */
  }
  .right {
    padding-right: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    column-gap: 1rem;
    div {
      cursor: pointer;
      background-color: #ef0107;
      padding: 0.3rem 0.7rem;
      border-radius: 15px;
      display: flex;
      color: white;
      transition: 0.2s;
    }
    div:hover {
      background-color: #ff0800;
    }
    img {
      cursor: pointer;
      border-radius: 50%;
      min-width: 30%;
      transition: 0.2s;
    }
    img:hover {
      background-color: #989898;
      color: white;
    }
  }
`;
