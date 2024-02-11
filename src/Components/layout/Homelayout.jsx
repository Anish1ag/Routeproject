import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Outlet } from "react-router-dom";
import "./homelayout.css";
function Homelayout() {
  //   const key = false;
  //   if (!key) {
  //     return <>404 not found</>;
  //   }
  return (
    <>
      <div style={{ display: "flex", height: "100%", flexDirection: "column" }}>
        <Navbar />

        <Outlet />

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Homelayout;
