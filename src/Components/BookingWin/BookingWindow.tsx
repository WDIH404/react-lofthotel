import React, {FunctionComponent} from 'react';
import s from "./bookingWindow.module.scss"

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
            <input type="text" className={s.booking__input} placeholder="Введите дату заезда" />
            <input type="text" className={s.booking__input} placeholder="Введите дату заезда" />
            <SquareButton/>
          </div>
        </div>
      </section>
    </>
  )
}

export default BookingWindow