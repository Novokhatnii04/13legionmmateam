import React from "react";
import styled from "./titleLogo.module.css";
import Logo from "../../assets/logo.png";

const Title = () => {
  return (
    <article className={styled.title_wrapper}>
      <img src={Logo} alt="logo13legion" className={styled.logo} />
      <h1 className={styled.title}>XIII LEGION</h1>
    </article>
  );
};

export default Title;
