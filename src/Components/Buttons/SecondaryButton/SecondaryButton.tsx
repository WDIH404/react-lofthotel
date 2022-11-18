import React, {FunctionComponent} from 'react';
import s from "./secondaryButton.module.scss"

interface OwnProps {
  
  title: string
}

type Props = OwnProps;

const SecondaryButton: FunctionComponent<Props> = (props) => {

  return (
    <>
      <button className={s.secondary}>{props.title}</button>
    </>
  )
}

export default SecondaryButton