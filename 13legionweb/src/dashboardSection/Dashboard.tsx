import Titlesection from "../components/titlesection/titlesection";
import styles from "./Dashboard.module.scss";
import { cardsData } from "./card";
import Card from "./items/Card";

import img2 from './img2.jpg'

const images = [img2]

const Dashboard = () => {
  return (
    <>
      <Titlesection text="ABONEMENTS" />
      <section style={{ marginTop: 0 }} className={styles.dashboard} id="abonements">
        <div className={styles.content}>
          {cardsData.map((el) => {
            return <Card key={Math.random() * 100} img={images} {...el} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
