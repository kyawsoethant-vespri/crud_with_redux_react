import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Update from "./Update";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/edit/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
