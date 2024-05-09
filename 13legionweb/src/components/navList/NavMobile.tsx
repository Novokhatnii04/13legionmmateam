import { useEffect } from "react";
import styled from "./navMobile.module.css";
import NavLinks from "./NavLinks";

const NavMobile = () => {
  useEffect(() => {
    console.log("hmmmm");

    return () => {
      console.log("bye");
    };
  }, []);

  return (
    <div className={styled.navMobile_wrapper}>
      <NavLinks modifier="navLinks_mobile" />
    </div>
  );
};

export default NavMobile;
