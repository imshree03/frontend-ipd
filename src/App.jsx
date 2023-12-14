import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Upload from "./components/Upload";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="footer" element={<Footer />}></Route>
        <Route path="upload" element={<Upload />}></Route>
      </Routes>

      {/* <Footer /> */}
      {/* <Login /> */}
    </div>
  );
};

export default App;
