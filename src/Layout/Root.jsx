import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
};

export default Root;