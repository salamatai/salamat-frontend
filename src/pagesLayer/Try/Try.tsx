"use client";

import React, {useState} from 'react'
import s from './Try.module.scss'
import BlueBtn from '@/shared/ui/BlueBtn/BlueBtn'
import Input from '@/shared/ui/Input/Input'
import AddImgBtn from '@/shared/ui/AddImgBtn/AddImgBtn'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '@/store/store'

const Try = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [symptoms, setSymptoms] = useState("");

  const analysisState = useSelector((state: RootState) => state.analysis);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  const handleAnalyze = () => {
    if (!selectedFile) {
      alert("Пожалуйста, загрузите изображение!");
      return;
    }

    // dispatch(analyzeImageAction({ file: selectedFile, symptoms }));
  };

  return (
    <section className={s.try}>
      <div className={s.tryLeft}>
        <div className={s.tryText}>
          <h3>Инструкция к применению сервиса:</h3>
          <ul>
            <li>Нажмите на плюсик, чтобы загрузить изображение.</li>
            <li>Загружайте качественные изображения для точного анализа.</li>
            <li>
              Заполняйте симптомы подробно — это улучшает точность предсказания.
            </li>
            <li>После загрузки изображения нажмите кнопку “Анализировать”.</li>
            <li>На экране появится индикатор загрузки.</li>
            <li>
              После загрузки вы можете посмотреть предположительный диагноз и
              вероятности заболеваний, а также рекомендации по дальнейшей
              диагностике и лечению.
            </li>
          </ul>
          <h5>
            <span>!</span> Важное примечание: Используйте сервис только для
            поддержки принятия решений — AI не заменяет врача. Всегда проверяйте
            AI и ставьте диагноз самостоятельно.
          </h5>
        </div>

        <div className={s.addImgBlock}>
          <AddImgBtn onFileSelect={handleFileSelect} />

          <Input value={symptoms} onChange={setSymptoms} />

          <BlueBtn text="Анализировать изображение" onClick={handleAnalyze} />
        </div>

        {selectedFile && (
          <p className={s.select}>Выбран файл: {selectedFile.name}</p>
        )}

        {analysisState.loading && <p>Идёт анализ...</p>}
        {analysisState.result && (
          <div className={s.result}>
            <h4>Результат анализа:</h4>
            <pre>{JSON.stringify(analysisState.result, null, 2)}</pre>
          </div>
        )}
        {analysisState.error && (
          <p style={{ color: "red" }}>{analysisState.error}</p>
        )}
      </div>
    </section>
  );
};

export default Try;
