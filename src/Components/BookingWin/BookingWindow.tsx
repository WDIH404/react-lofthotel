import React, {FunctionComponent} from 'react';
import s from "./bookingWindow.module.scss"

import arrow from '../../Assets/img/arrow.svg'
import SquareButton from '../Buttons/SquareButton/SquareButton'

const BookingWindow: FunctionComponent = () => {

  return (
    <>
      <section className={s.booking}>
        <div className={s.container}>
          <div className={s.booking_wrapper}>
            <h2 className={s.booking__title}>
              Бронирование <br />
              номера
            </h2>
            <div className={s.vertical_line}></div>
            <div className={s.booking__input}>
              <span className={s.booking__label}>Заезд</span>
              <div className={s.booking__date}>
                <span className={s.booking__} style={{marginRight: '5px'}}>21/11/22</span>
                <img src={arrow} style={{height: '12px', width: '12px'}} alt="Arrow" />
              </div>
            </div>
            <div className={s.vertical_line}></div>
            <div className={s.booking__input}>
              <span className={s.booking__label}>Выезд</span>
              <div className={s.booking__date}>
                <span className={s.booking__} style={{marginRight: '5px'}}>22/11/22</span>
                <img src={arrow} style={{height: '12px', width: '12px'}} alt="Arrow" />
              </div>
            </div>
            <div className={s.vertical_line}></div>
            <SquareButton/>
          </div>
        </div>
      </section>
    </>
  )
}

export default BookingWindow