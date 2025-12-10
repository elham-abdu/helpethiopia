import Header from "../feature/layout/components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../feature/layout/components/Footer";

const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default UserLayout;
