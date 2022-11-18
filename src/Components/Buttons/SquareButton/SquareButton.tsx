import React, {FunctionComponent} from 'react';
import s from "./squareButton.module.scss"

import search from '../../../Assets/img/search.svg'

const SquareButton: FunctionComponent = () => {

  return (
    <>
      <button className={s.square}>
        <img src={search} alt="img" className={s.button__icon}/>
      </button>
    </>
  )
}

export default SquareButton