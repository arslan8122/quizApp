import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
