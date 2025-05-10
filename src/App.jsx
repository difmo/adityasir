import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./layout/LayOut";
import Home from "./components/Home";

import AboutUs from "./components/AboutUs";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<LayOut />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
