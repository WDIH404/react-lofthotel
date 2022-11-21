import React from 'react'
import s from "./card.module.scss"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/autoplay';

interface OwnProps {
  title: string
  price: number
  images: string[]
}

type props = OwnProps;

function Card(props: props) {

  return (
      <a href="#" className={s.rooms_cards__item}>
        <Swiper style={{height: '300px', width: '410px', marginBottom: '20px'}}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          >
            {
              props.images.map((image) => {
                return (
                  <SwiperSlide><img src={image} alt="Photo" /></SwiperSlide>
                )
              })
            }
        </Swiper>
        <span className={s.rooms_cards__title}>{props.title}</span>
        <div className={s.rooms_cards__tags}>
          <span className={s.rooms_cards__tag}>Wi-Fi</span>
          <span className={s.rooms_cards__tag}>Кондиционер</span>
          <span className={s.rooms_cards__tag}>TV</span>
        </div>
        <span className={s.rooms_cards__price}>От {props.price}р за сутки</span>
      </a>
  )
}

export default Card