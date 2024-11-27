import Image from "next/image";
import React from "react";
import s from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.image}>
        <Image
          src="/images/site/max.png"
          alt="Person image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Max</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse dolore
        aperiam necessitatibus excepturi nesciunt tenetur.
      </p>
    </section>
  );
};

export default Hero;
