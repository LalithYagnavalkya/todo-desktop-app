import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./context";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./themes";
import AnimatedRoutes from "./AnimatedRoutes";
import styled from "styled-components";

function App() {
  const { theme } = useGlobalContext();
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Wrapper>
        <div className="App">
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
        </div>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
const Wrapper = styled.div`
  overflow: hidden;
  .App {
    background-color: ${(props) => props.theme.backgroundColor};
    text-align: center;
  }

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
