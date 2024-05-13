import { Footer } from "../layout/footer/Footer";
import { Header } from "../layout/header/Header";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Header />
      {/*  */}
      <Outlet />
      <Footer />
    </>
  );
}
