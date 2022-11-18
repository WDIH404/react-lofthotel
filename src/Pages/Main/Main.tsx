import React, {FunctionComponent} from 'react';
import s from "./main.module.scss"

// Components
import PrimaryButton from '../../Components/Buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../Components/Buttons/SecondaryButton/SecondaryButton';
import BookingWindow from '../../Components/BookingWin/BookingWindow';
import Advantages from '../../Components/Advantages/Advantages';

// Images
import hero_image from '../../Assets/img/hero-image.svg'
import hotel_photo from '../../Assets/img/hotel-photo.png'

import wifi from '../../Assets/img/icons/wifi.svg'
import cold from '../../Assets/img/icons/cold.svg'
import sun from '../../Assets/img/icons/sun.svg'
import car from '../../Assets/img/icons/car.svg'



function Main() {
  return (
    <>
      <section className={s.hero}>
        <div className={s.container}>
          <div className={s.hero_wrapper}>
            <div className={s.hero_left}>
              <h1 className={s.hero_left__title}>LOFT HOTEL</h1>
              <span className={s.hero_left__description}>Ваше идеальное решение для отдыха с природой</span>
              <div className={s.hero_left__buttons}>
                <PrimaryButton title = {"Забронировать"}/>
                <SecondaryButton title = {"Узнать больше"} />
              </div>
            </div>
            <div className={s.hero_right}>
              <img src={hero_image} alt="img" className={s.hero__image} />
            </div>
          </div>
        </div>
      </section>
      <BookingWindow />
      <section className={s.about }id="about">
        <div className={s.container}>
          <div className={s.about_wrapper}>
            <div className={s.about_photo}>
              <img src={hotel_photo} alt="Hotel Photo" className={s.about__image} />
            </div>
            <div className={s.about_info}>
              <div className={s.block_head}>
                <div className={s.title}>О нас</div>
              </div>
              <p className={s.about__description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id commodo duis pulvinar
                varius sapien. Metus, maecenas quam id elementum egestas enim odio urna in. Quis vitae
                fermentum odio sed amet, neque. Quis mollis auctor auctor sollicitudin donec commodo
                nibh ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id commodo duis
                pulvinar varius sapien.
              </p>
              <div className={s.about_advantages}>
                <Advantages title={"Бесплатный Wi-Fi"} icon={wifi}/>
                <Advantages title={"Парковка для авто"} icon={car}/>
                <Advantages title={"5 минут до пляжа"} icon={sun}/>
                <Advantages title={"Кондиционер"} icon={cold}/>
              </div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Main