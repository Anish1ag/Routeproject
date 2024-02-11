import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import First from "./pages/home/contents/First";
import Second from "./pages/home/contents/Second";
import Third from "./pages/home/contents/Third";
import Fourth from "./pages/home/contents/Fourth";
import Fifth from "./pages/home/contents/Fifth";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact_us/Contact";
import Login from "./pages/login/Login";
import Homelayout from "./Components/layout/Homelayout";
import Error from "./Components/error/Error";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homelayout />}>
          <Route path="" element={<Home />}>
            <Route path="" element={<First />} />
            <Route path="/second" element={<Second />} />
            <Route path="/third" element={<Third />} />
            <Route path="/fourth" element={<Fourth />} />
            <Route path="/fifth" element={<Fifth />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact_us" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
