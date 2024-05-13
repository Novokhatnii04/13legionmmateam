import { FC } from "react";
import styled from "./titleLogo.module.css";
import Logo from "../../assets/images/logo.png";

interface ITitleLogo {
  classname?: string;
}

const Title: FC<ITitleLogo> = ({ classname }) => {
  return (
    <article
      className={`${styled.title_wrapper} ${
        styled[classname ? classname : ""]
      }`}
    >
      <img
        src={Logo}
        alt="logo13legion"
        className={`${styled.logo} ${
          styled[classname ? `${classname}_logo` : ""]
        }`}
      />
      <h1
        className={`${styled.title} ${
          styled[classname ? `${classname}_title` : ""]
        }`}
      >
        XIII LEGION
      </h1>
    </article>
  );
};

export default Title;
