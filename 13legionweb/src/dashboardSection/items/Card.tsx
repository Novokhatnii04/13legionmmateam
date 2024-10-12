import { FC, useState } from "react";
import styles from "./Card.module.scss";

interface ICard {
  title: string;
  link: string;
  description: string;
  img: any
}


const Card: FC<ICard> = ({ title = "", img, description }) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  const onMouseEnterHandler = () => setMouseEnter(true);
  const onMouseLeaveHandler = () => setMouseEnter(false);

  const classNameCard = `${styles.card} ${mouseEnter ? styles[`card-${title}`] : ""
    }`;


  return (
    <article
      className={classNameCard}
      style={{ backgroundColor: "black", border: mouseEnter ? '2px solid red' : '2px solid black', transition: 'all 0.5s ease' }}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', position: 'absolute', top: '60px', zIndex: 10, background: 'red', left: 0 }}>
        <span style={{ fontSize: '20px' }}>Price</span>
        <span style={{ fontSize: '40px' }}>999 UAH</span>
      </div>
      <div className={styles.blur} style={{ opacity: mouseEnter ? 0.5 : 0.2, transition: 'all 0.5s ease', backgroundImage: `url(${img})`, width: '100%', height: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', position: 'absolute', top: 0 }} />
      <div style={{ padding: ' 0 20px', display: "flex", zIndex: 10, flexDirection: 'column', alignItems: 'start', textAlign: 'start', paddingLeft: '5%', gap: '10px', marginTop: 'auto  ' }}>
        <h1 style={{ fontSize: '24px', color: 'white' }}>{title}</h1>
        <span style={{ fontSize: '18px', color: 'white' }}> {description}</span>
      </div>
    </article >
  );
};

export default Card;
