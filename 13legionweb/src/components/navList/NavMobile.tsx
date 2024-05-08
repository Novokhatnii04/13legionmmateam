import React, { useEffect } from "react";
import styled from "./navMobile.module.css";

const NavMobile = () => {
  useEffect(() => {
    console.log("hmmmm");

    return () => {
        console.log('bye')
    }
  }, []);

  return <div className={styled.navMobile_wrapper}></div>;
};

export default NavMobile;
