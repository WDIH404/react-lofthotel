import React, {FunctionComponent} from 'react';
import s from "./main.module.scss"

import hero_image from "../../Assets/img/hero-image.svg"
import PrimaryButton from '../../Components/Buttons/PrimaryButton/PrimaryButton';

function Main() {
  return (
    <section className={s.hero}>
      <div className={s.container}>
        <div className={s.hero_wrapper}>
          <div className={s.hero_left}>
            <h1 className={s.hero_left__title}>LOFT HOTEL</h1>
            <span className={s.hero_left__description}>Ваше идеальное решение для отдыха с природой</span>
            <div className={s.hero_left__buttons}>
              <PrimaryButton title = {"Забронировать"}/>
            </div>
          </div>
          <div className={s.hero_right}>
            <img src={hero_image} alt="img" className={s.hero__image} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main