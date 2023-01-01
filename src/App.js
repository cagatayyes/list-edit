import { Routes, Route } from "react-router-dom";
import List from "./components/list/list";
import Edit from "./components/edit/edit";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
