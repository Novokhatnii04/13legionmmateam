import { FC } from "react";
import styles from "./titleSection.module.css";
import image from "../../assets/images/orangeMaze.png";

interface ITitle {
  text: string;
}

const Titlesection: FC<ITitle> = ({ text }) => {
  return (
    <article className={styles.maze_wrapper}>
      <img src={image} className={styles.maze_image} />
      <h1 className={styles.maze_text}>{text}</h1>
    </article>
  );
};

export default Titlesection;
