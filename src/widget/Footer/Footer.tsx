import React from 'react'
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={s.footer}>
            <img src="img/logo.png" alt="" />
            <p>© Все права защищены.</p>
        </div>
    )
}

export default Footer