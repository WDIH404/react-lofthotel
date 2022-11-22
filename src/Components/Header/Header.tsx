import React, {FunctionComponent} from 'react';
import s from "./header.module.scss"
import { useNavigate } from 'react-router-dom';

import logo from "../../Assets/img/logo.svg"
import telegram from "../../Assets/img/telegram.svg"
import viber from "../../Assets/img/viber.svg"
import whatsapp from "../../Assets/img/whats.svg"

import geo from "../../Assets/img/geo.svg"
import call from "../../Assets/img/call.svg"

import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

function Header() {
  const navigate = useNavigate()
  return (
    <header className={s.navbar}>
      <div className={s.container}>
        <div className={s.navbar_top}>
          <div onClick={()=>navigate("/")} className={s.logo}>
            <img src={logo} alt="Logotype" className={s.logo__image} />
          </div>
          <div className={s.geo}>
            <img src={geo} alt="geo" className={s.geo__icon} />
            <a href="https://yandex.ru/maps/-/CCUZR4FvKB" target="_blank" className={s.geo__text}
              >Абхазия, г. Новый Афон, ул. Ладария
            </a>
          </div>

          <div className={s.call}>
            <img src={call} alt="call" className={s.call__icon} />
            <div className={s.call_text}>
              <a href="tel:+79409210555" className={s.call__number}>+7 (940) 921-05-55</a>
              <span className={s.call__info}>С 9:00 до 20:00</span>
            </div>
          </div>
          <div className={s.social}>
            <button className={s.social__button}>
              <img src={telegram} alt="Telegram" className={s.social__icon} />
            </button>
            <button className={s.social__button}>
              <img src={viber} alt="Viber" className={s.social__icon} />
            </button>
            <button className={s.social__button}>
              <img src={whatsapp} alt="Whatsapp" className={s.social__icon} />
            </button>
          </div>
          <PrimaryButton action={()=>navigate("/booking")} title={"Забронировать"}/>
        </div>
        <div className={s.navbar_bottom}>
          <nav className={s.navbar_menu}>
            <li className={s.navbar_menu__item}>
              <a href="#about" className={s.navbar_menu__link}>О нас</a>
            </li>

            <li className={s.navbar_menu__item}>
              <a href="#rooms" className={s.navbar_menu__link}>Размещение</a>
            </li>

            <li className={s.navbar_menu__item}>
              <a href="#gallery" className={s.navbar_menu__link}>Фотогалерея</a>
            </li>

            <li className={s.navbar_menu__item}>
              <a href="#" className={s.navbar_menu__link}>Контакты</a>
            </li>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;