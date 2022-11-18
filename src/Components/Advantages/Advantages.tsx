import React from 'react'

import s from "./advantages.module.scss"

interface OwnProps {
  
  title: string
  icon: string
}

type props = OwnProps;

function Advantages(props: props) {
  return (
    <div className={s.about_advantages__item}>
        <div className={s.about_advantages__icon}>
          <img src={props.icon} alt="Icon" />
        </div>
        <span className={s.about_advantages__text}>{props.title}</span>
    </div>
  )
}

export default Advantages