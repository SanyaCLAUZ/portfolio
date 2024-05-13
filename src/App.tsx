import "./App.css";
import "./assets/fonts/Jersey15-Regular.ttf";
import {Outlet} from "react-router-dom";
import {Header} from "./layout/header/Header";
import {Footer} from "./layout/footer/Footer";

function App() {
  return (
      <>
          <Header />
          {/*  */}
          <Outlet />
          <Footer />
      </>
  );
}
export default App;
