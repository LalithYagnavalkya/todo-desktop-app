import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Time from "../components/Time";
import { darkTheme, lightTheme, GlobalStyles } from "../themes";
const Home = () => {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  console.log(theme);
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {/* <GlobalStyles /> */}
      <Wrapper>
        <div className="container">
          <div className="top">
            <Time />
            <div className="dark-btn" onClick={() => themeToggler()}>
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </div>
          </div>
          <div className="bottom">
            <button>Todo List</button>
          </div>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Home;

const Wrapper = styled.div`
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
      button {
        cursor: pointer;
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
