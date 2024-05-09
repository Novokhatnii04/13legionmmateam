import { useState } from "react";
import styled from "./navList.module.css";
import TitleLogo from "../title/TitleLogo";
import Burger from "../burger/Burger.tsx";
import NavMobile from "./NavMobile";
import NavLinks from "./NavLinks.tsx";

const NavList = () => {
  const [isMenuOpenState, setMenuState] = useState<boolean>(false);

  const changeMenuStateHandler = (): void => {
    setMenuState(!isMenuOpenState);
  };

  return (
    <div className={styled.navList}>
      <TitleLogo />
      <div className={styled.navList_form}>
        <Burger burgerClickHandler={changeMenuStateHandler} />
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
