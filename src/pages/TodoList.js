import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Todo from "../components/Todo";
import { useGlobalContext } from "../context";

const TodoList = () => {
  const navigate = useNavigate();
  const { theme, themeToggler } = useGlobalContext();
  const data = [
    "Need to learn React native",
    "should start working on my Project",
    "cook  food",
  ];
  return (
    <Wrapper
      initial={{
        width: 0,
        backgroundColor: `${(props) => props.theme.backgroundColor}`,
      }}
      animate={{ width: "100vw" }}
      exit={{
        x: window.innerWidth,
        backgroundColor: `${(props) => props.theme.backgroundColor}`,
        transition: { duration: 0.1 },
      }}
    >
      <div className="top">
        <div className="subleft">
          <div
            className="back"
            onClick={() => {
              navigate(-1);
            }}
          >
            <img src="https://img.icons8.com/ios-glyphs/30/undefined/back.png" />
          </div>
          <div className="heading">Todo List</div>
        </div>
        <div className="dark-btn" onClick={() => themeToggler()}>
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </div>
      </div>
      <div className="container">
        {data.map((item) => {
          return <Todo item={item} />;
        })}
      </div>
    </Wrapper>
  );
};

export default TodoList;
const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
  .top {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .subleft {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.secondfontColor};
      /* background-color: black; */
      height: 5rem;
      column-gap: 1.5rem;
      .back {
        cursor: pointer;
      }
      .heading {
        width: 100%;
        font-size: 2rem;
        font-weight: 600;
        display: flex;
        justify-content: left;
      }
    }
    .dark-btn {
      cursor: pointer;
      background-color: ${(props) => props.theme.primaryColor};
      padding: 0.5rem 1.5rem;
      border-radius: 6px;
      font-size: 1.3rem;
      font-weight: 500;

      width: fit-content;
    }
  }
  .container {
    width: 90%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
`;
