import { FC } from "react";
import Video from "../../assets/video/main.mp4";
import styles from "./homePage.module.css";
import Greeting from "./greeting/greeting";
import Gallery from "./galleryslider/gallery";

const HomePage: FC = () => {
  return (
    <>
      <section className={styles.greeting}>
        <div className={styles.greeting_wrapper}>
          <video
            playsInline
            autoPlay
            loop
            muted
            preload="auto"
            style={{ width: "100%", minWidth: "1420px" }}
          >
            <source _ngcontent-serverapp-c2="" src={Video} type="video/mp4" />
          </video>
        </div>
        <div className={styles.greeting_wrapper}>
          <Greeting />
        </div>
      </section>
      <Gallery />
    </>
  );
};

export default HomePage;
