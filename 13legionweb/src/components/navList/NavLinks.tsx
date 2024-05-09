import { FC } from "react";
import styled from "./navLinks.module.css";

interface INavLinks {
  modifier?: string;
}

const NavLinks: FC<INavLinks> = ({ modifier = "" }) => {
  return (
    <ul className={`${styled.navLinks_wrapper} ${styled[modifier]}`}>
      <li>Головна</li>
      <li>Контакти</li>
      <li>Про нас</li>
      <li>Галерея</li>
    </ul>
  );
};

export default NavLinks;
