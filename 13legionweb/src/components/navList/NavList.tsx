import styled from "./navList.module.css";
import TitleLogo from "../titlelogo/TitleLogo.tsx";
import Burger from "../burger/Burger.tsx";
import NavMobile from "./NavMobile";
import NavLinks from "./NavLinks.tsx";
import { useContext } from "react";
import { AppContext } from "../../context/Context.tsx";


const NavList = () => {
  const { isMenuOpenState, changeMenuHandler } = useContext(AppContext);

  return (
    <div className={styled.navList}>
      <TitleLogo classname="header" />
      <div className={styled.navList_form}>
        <Burger burgerClickHandler={changeMenuHandler} />
        {isMenuOpenState && <NavMobile />}
        {/* <div className={styled.overflow} /> */}
      </div>
      <div className={styled.navList_links}>
        <NavLinks />
      </div>
    </div>
  );
};

export default NavList;
