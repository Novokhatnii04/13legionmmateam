import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import NavList from "../components/navList/NavList";

const Layout = () => {
  return (
    <div>
      <Header>
        <NavList />
      </Header>
      <Outlet />
      {/* footer */}
    </div>
  );
};

export default Layout;
