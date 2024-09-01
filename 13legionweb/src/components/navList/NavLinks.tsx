import { FC, useContext } from "react";
import styled from "./navLinks.module.css";
import { AppContext } from "../../context/Context";

interface INavLinks {
  modifier?: string;
}

const NavLinks: FC<INavLinks> = ({ modifier = "" }) => {
  const { changeMenuHandler } = useContext(AppContext);

  const scrollToSection = (sectionId: string): void => {
    const toSection = document.getElementById(sectionId);
    if (toSection) {
      changeMenuHandler();
      toSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul
      className={`${styled.navLinks_wrapper} ${
        modifier ? styled[modifier] : ""
      }`}
    >
      <li onClick={() => scrollToSection("greeting")}>Home</li>
      <li onClick={() => scrollToSection("gallery")}>Gallery</li>
      <li onClick={() => scrollToSection("coaches")}>Coaches</li>
    </ul>
  );
};

export default NavLinks;
