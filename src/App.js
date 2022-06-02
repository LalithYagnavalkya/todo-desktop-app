import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";

function App() {
  console.log("hello");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/todos" element={<TodoList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
