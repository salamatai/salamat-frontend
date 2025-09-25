"use client";

import React from "react";
import s from "./Result.module.scss";
import { useRouter } from "next/navigation";
import BlueBtn from "../modules/BlueBtn/BlueBtn";
import WhiteBtn from "../modules/WhiteBtn/WhiteBtn";

const Result = () => {
  const router = useRouter();

  return (
    <section className={s.result}>
      <h2>Ваши результаты:</h2>
      <div className={s.resultBlock}>
        <div className={s.left}>.</div>
        <div className={s.right}>
          <section>
            <h3>📌 Диагноз (предварительный)</h3>
            <p>
              Высока вероятность <strong>туберкулёза лёгких</strong> (ТБ) —
              активная форма.
            </p>
          </section>

          <section>
            <h4>📌 Причины моего заключения:</h4>
            <ol>
              <li>
                <strong>Рентген/КТ:</strong>
                <ul>
                  <li>
                    На изображении чётко видны изменения, характерные для
                    туберкулёза:
                  </li>
                  <li>
                    Очаговые или кавернозные образования в лёгочной ткани.
                  </li>
                  <li>
                    Возможное уплотнение и “матовое стекло” вокруг очагов.
                  </li>
                  <li>Локализация изменений часто — верхние доли лёгких.</li>
                </ul>
              </li>
              <li>
                <strong>Симптомы:</strong>
                <ul>
                  <li>
                    <strong>Головная боль</strong> — может указывать на
                    системное воспаление или осложнения.
                  </li>
                  <li>
                    <strong>Температура</strong> — классический симптом
                    активного инфекционного процесса.
                  </li>
                  <li>
                    Совокупность симптомов + типичные изменения на КТ повышают
                    вероятность активной формы ТБ.
                  </li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h4>📌 Дальнейшие рекомендации:</h4>
            <ol>
              <li>
                <strong>Немедленно обратиться к врачу — фтизиатру</strong>.
              </li>
              <li>
                Не откладывать диагностику:
                <ul>
                  <li>Микроскопия мокроты.</li>
                  <li>
                    ПЦР-тест на <em>Mycobacterium tuberculosis</em>.
                  </li>
                  <li>Анализ на чувствительность к препаратам.</li>
                </ul>
              </li>
              <li>
                <strong>Изоляция</strong> до подтверждения диагноза.
              </li>
              <li>Информировать близких.</li>
            </ol>
          </section>

          <section>
            <h4>📌 Лечение:</h4>
            <ul>
              <li>Лечение только под контролем врача.</li>
              <li>
                Минимум <strong>6 месяцев</strong> схемы: Изониазид, Рифампицин,
                Пиразинамид, Этамбутол.
              </li>
              <li>Строго следовать схеме.</li>
              <li>Мультирезистентная форма — до 18–24 мес.</li>
            </ul>
          </section>

          <section style={{ paddingBottom: "50px" }}>
            <h4>📌 Что делать прямо сейчас:</h4>
            <ul>
              <li>Не откладывать визит к врачу.</li>
              <li>Не посещать общественные места без защиты.</li>
              <li>Избегать близкого контакта.</li>
              <li>Сохранять покой и пить воду.</li>
              <li>При ухудшении — вызвать скорую.</li>
            </ul>
          </section>
        </div>
      </div>
      <div className={s.string}>
        <BlueBtn text="Новое изображение" onClick={() => router.push("/try")} />
        <WhiteBtn text="На главную" onClick={() => router.push("/")} />
      </div>
    </section>
  );
};

export default Result;
