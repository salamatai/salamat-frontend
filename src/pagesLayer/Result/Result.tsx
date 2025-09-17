import React from 'react'
import s from './Result.module.scss'

const Result = () => {
  return (
    <section className={s.result}>
      <h2>Ваши результаты:</h2>
      <div className={s.resultBlock}>
        <div className={s.left}>.</div>
        <div className={s.right}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          laborum quisquam! Fugit ea quam suscipit quae illo magni ut sapiente
          eligendi ratione saepe, alias accusantium temporibus officiis
          reprehenderit quisquam excepturi qui autem repudiandae nam nobis quia
          recusandae! Dicta, neque, magni ratione quos quidem officiis nemo hic
          corporis nam suscipit nesciunt?
        </div>
      </div>
    </section>
  );
};

export default Result;
