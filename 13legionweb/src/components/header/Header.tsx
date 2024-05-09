import React, { ReactNode } from "react";
import styles from "./header.module.css";

interface HeaderProps {
  children: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header_content}>{children}</div>
    </header>
  );
};

export default Header;
