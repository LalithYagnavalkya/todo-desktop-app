import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  console.log("hello");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<p>hello world</p>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
