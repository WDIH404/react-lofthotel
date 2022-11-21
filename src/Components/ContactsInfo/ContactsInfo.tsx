import React from 'react';
import s from './contactsInfo.module.scss';

interface OwnProps {
  label: string;
  title: string;
}

type props = OwnProps;

function ContactsInfo(props: props) {
  return (
    <>
      <div className={s.item_wrapper}>
        <span className={s.contacts__label}>{props.label}</span>
        <span className={s.contacts__title}>{props.title}</span>
      </div>
    </>
  );
}

export default ContactsInfo;
