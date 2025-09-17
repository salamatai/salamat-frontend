import React from 'react'
import s from './Try.module.scss'
import BlueBtn from '../modules/BlueBtn/BlueBtn'
import Input from '../modules/Input/Input'
import AddImgBtn from '../modules/AddImgBtn/AddImgBtn'

const Try = () => {
  return (
    <section className={s.try}>
      <div className={s.tryLeft}>
        <div className={s.tryText}>
          <h3>Инструкция к применению сервиса:</h3>
          <ul>
            <li>Нажмите на плюсик чтобы загрузить изображение.</li>
            <li>Загружайте качественные изображения для точно анализа.</li>
            <li>
              Заполняйте симптомы подробно - это улучшает точность предсказания.
            </li>
            <li>После загрузки изображения нажмите кнопку “Анализировать”.</li>
            <li>На экране появится индикатор загрузки.</li>
            <li>
              После загрузки вы можете посмотреть предположительный диагноз и
              вероятности заболеваний, а также рекомендации по дальнейшей
              диагностике и лечению
            </li>
          </ul>
          <h5>
            <span>!</span> Важное примечание: Используйте сервис только для
            поддержки принятия решений - AI не заменяет врача. Всегда проверяйте
            AI и ставьте диагноз самостоятельно.
          </h5>
        </div>
        <div className={s.addImgBlock}>
          <AddImgBtn />
          <Input />
          <BlueBtn text="Анализировать изображение" />
        </div>
      </div>
    </section>
  );
};

export default Try;
