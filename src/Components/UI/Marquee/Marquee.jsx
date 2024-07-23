import { StartMarqueeIcon } from "helpers/Protected/icons";
import React from "react";
import Marquee from 'react-fast-marquee';
import styles from './Marquee.module.scss'


const data = [
  { text: "Bonuslar"},
  { text: "tez & xavfsiz"},
  { text: "o‘yinlar"},
  { text: "Tez tranzaksiyalar"},
  { text: "Bonuslar"},
  { text: "tez & xavfsiz"},
  { text: "o‘yinlar"},
  { text: "Tez tranzaksiyalar"},
];

const MarqueeElem = () => {
  return (
    <div>
      <Marquee
        className={styles.marquee}
        pauseOnHover={false}
        speed={40}
        direction="right"
        gradientWidth={400}
        gradientColor={[255, 255, 255]}
      >

        {data?.map((item, index)=>(
        <div className={styles.marquee__item} key={index}>
          <h1><StartMarqueeIcon/> {item.text}</h1>
        </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeElem;
