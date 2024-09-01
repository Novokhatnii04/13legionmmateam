import Titlesection from "../../../components/titlesection/titlesection";
import { Coaches } from "../../../resources/coaches";
import styles from "./Acquintance.module.css";
import CoachCard from "./CoachCard";

const Acquintance = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <Titlesection text="OUR TRAINERS" />
        <div className={styles.cards}>
          {Coaches.map((el, index) => {
            return <CoachCard key={index} {...el} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Acquintance;
