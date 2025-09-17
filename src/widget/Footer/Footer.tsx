import React from 'react'
import s from './Footer.module.scss'
import {FaInstagram, FaLinkedin, FaTelegram} from 'react-icons/fa'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.left}>
                <a href="#main" className={s.logo}>
                    <img src="img/logo.png" alt="Salamat AI"/>
                </a>
                <p>© 2025 Salamat AI. Все права защищены.</p>
            </div>

            <div className={s.center}>
                <h4>Навигация</h4>
                <ul>
                    <li><a href="#main">Главная</a></li>
                    <li><a href="#about">О сервисе</a></li>
                    <li><Link href={'/try'}>Попробовать анализ</Link></li>
                </ul>
            </div>

            <div className={s.right}>
                <h4>Контакты</h4>
                <p>Email: support@salamat.ai</p>
                <p>Телефон: +996 123 456 789</p>
                <div className={s.socials}>
                    <a href="#"><FaInstagram/></a>
                    <a href="#"><FaLinkedin/></a>
                    <a href="#"><FaTelegram/></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer