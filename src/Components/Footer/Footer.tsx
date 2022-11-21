import React, { FunctionComponent } from 'react';
import s from './footer.module.scss';

import logo from '../../Assets/img/logo.svg';

function Footer() {
  return (
    <header className={s.navbar}>
      <div className={s.container}>
        <div className={s.navbar_top}>
          <a href="#" className={s.logo}>
            <img src={logo} alt="Logotype" className={s.logo__image} />
          </a>
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
  );
}

export default Footer;
