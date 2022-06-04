import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Time from "../components/Time";
import { useGlobalContext } from "../context";
import { motion } from "framer-motion";
const Home = () => {
  const { theme, themeToggler } = useGlobalContext();

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
      <motion.div className="container" drag>
        <div className="top">
          <Time />
          <div className="dark-btn" onClick={() => themeToggler()}>
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </div>
        </div>
        <div className="bottom">
          <Link to={"/todos"} style={{ textDecoration: "none" }}>
            <button className="todo-btn">Todo List</button>
          </Link>
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled(motion.div)`
  overflow: hidden;
  height: 100vh;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .container {
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.secondfontColor};
    border-radius: 10px;
    height: 33rem;
    width: 28rem;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* background-color: black; */
    padding: 3rem 0 0 0;
    justify-content: space-between;
    .top {
      display: flex;
      color: ${(props) => props.theme.heading};
      flex-direction: column;
      align-items: center;
      /* background-color: black; */
      justify-content: space-around;
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
    .bottom {
      min-width: 100%;
      .todo-btn {
        cursor: pointer;
        text-decoration: none;
        display: flex;
        justify-content: center;
        min-width: 100%;
        background-color: #00bfff;
        padding: 0.5rem 1.5rem;
        padding-top: 2rem;
        border-radius: 6px;
        font-size: 1.3rem;
        font-weight: 600;
        border: none;
        padding-bottom: 3rem;
      }
    }
  }
`;
