import styles from "./CoachCard.module.css";
import { ICoach } from "../../../resources/coaches";
import { FC } from "react";

const CoachCard: FC<ICoach> = ({ coachImage, coachName, coachDescription }) => {
  return (
    <article className={styles.card}>
      <img className={styles.card_image} src={coachImage} alt="" />
      <div className={styles.coach_title}>
        <span className={styles.coach_name}>{coachName}</span>
        <span className={styles.coach_desc}>{coachDescription}</span>
      </div>
    </article>
  );
};

export default CoachCard;
