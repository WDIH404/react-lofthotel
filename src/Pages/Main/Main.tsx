import React, { FunctionComponent } from 'react';
import s from './main.module.scss';

// Components
import PrimaryButton from '../../Components/Buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../Components/Buttons/SecondaryButton/SecondaryButton';
import BookingWindow from '../../Components/BookingWin/BookingWindow';
import Advantages from '../../Components/Advantages/Advantages';
import Card from '../../Components/Card/Card';
import ContactsInfo from '../../Components/ContactsInfo/ContactsInfo';
import Footer from '../../Components/Footer/Footer';

// Images
import hero_image from '../../Assets/img/hero-image.svg';
import hotel_photo from '../../Assets/img/hotel-photo.png';
import map from '../../Assets/img/map.svg';

import wifi from '../../Assets/img/icons/wifi.svg';
import cold from '../../Assets/img/icons/cold.svg';
import sun from '../../Assets/img/icons/sun.svg';
import car from '../../Assets/img/icons/car.svg';

import image0 from '../../Assets/img/rooms/1.png';
import image1 from '../../Assets/img/rooms/2.png';
import image2 from '../../Assets/img/rooms/3.png';

function Main() {
  return (
    <>
      <section className={s.hero}>
        <div className={s.container}>
          <div className={s.hero_wrapper}>
            <div className={s.hero_left}>
              <h1 className={s.hero_left__title}>LOFT HOTEL</h1>
              <span className={s.hero_left__description}>
                Ваше идеальное решение для отдыха с природой
              </span>
              <div className={s.hero_left__buttons}>
                <PrimaryButton title={'Забронировать'} />
                <SecondaryButton title={'Узнать больше'} />
              </div>
            </div>
            <div className={s.hero_right}>
              <img src={hero_image} alt="img" className={s.hero__image} />
            </div>
          </div>
        </div>
      </section>
      <BookingWindow />
      <section className={s.about} id="about">
        <div className={s.container}>
          <div className={s.about_wrapper}>
            <div className={s.about_photo}>
              <img src={hotel_photo} alt="Hotel" className={s.about__image} />
            </div>
            <div className={s.about_info}>
              <div className={s.block_head}>
                <div className={s.title}>О нас</div>
              </div>
              <p className={s.about__description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id commodo duis pulvinar
                varius sapien. Metus, maecenas quam id elementum egestas enim odio urna in. Quis
                vitae fermentum odio sed amet, neque. Quis mollis auctor auctor sollicitudin donec
                commodo nibh ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                commodo duis pulvinar varius sapien.
              </p>
              <div className={s.about_advantages}>
                <Advantages title={'Бесплатный Wi-Fi'} icon={wifi} />
                <Advantages title={'Парковка для авто'} icon={car} />
                <Advantages title={'5 минут до пляжа'} icon={sun} />
                <Advantages title={'Кондиционер'} icon={cold} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={s.rooms} id="rooms">
        <div className={s.container}>
          <div className={s.rooms_wrapper}>
            <div className={s.block_head}>
              <div className={s.title}>Доступные номера</div>
            </div>
            <div className={s.rooms_cards}>
              <Card title={'Номер с балконом'} price={2000} images={[image0, image1, image2]} />
              <Card title={'Номер без балкона'} price={2500} images={[image1, image1, image2]} />
              <Card title={'Семейный номер'} price={3000} images={[image2, image1, image2]} />
            </div>
          </div>
        </div>
      </section>

      <section className={s.gallery} id="gallery">
        <div className={s.container}>
          <div className={s.block_head}>
            <div className={s.title}>Фотогалерея</div>
            <SecondaryButton title={'Посмотреть все'} />
          </div>
        </div>
      </section>

      <section className={s.contacts} id="contacts">
        <div className={s.container}>
          <div className={s.block_head}>
            <div className={s.contacts_wrapper}>
              <div className={s.title}>Контакты</div>
              <div className={s.contacts_content}>
                <div className={s.contacts__info}>
                  <div className={s.contacts__items}>
                    <ContactsInfo
                      label={'Адрес отеля'}
                      title={'Абхазия, г. Новый Афон, ул. Ладария'}
                    />
                    <ContactsInfo label={'Телефон'} title={'+7 (940) 921-05-55'} />
                    <ContactsInfo label={'Мессенеджеры для связи'} title={'Иконки'} />
                    <ContactsInfo label={'Электронная почта'} title={'loft@hotel.ru'} />
                  </div>
                  <PrimaryButton title={'Забронировать'} />
                </div>
                <a href="#">
                  <img src={map} alt="Map" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Main;
