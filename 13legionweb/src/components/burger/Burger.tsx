import { FC } from "react";
import styled from "./burger.module.css";

interface IBurger {
  burgerClickHandler: () => void;
}

const Burger: FC<IBurger> = ({ burgerClickHandler }) => {
  return (
    <label className={styled.burger}>
      <input type="checkbox" id="burger" onClick={burgerClickHandler} />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
};

export default Burger;
