/* eslint-disable jsx-a11y/heading-has-content */
import i18next from 'i18next';
import React, { useEffect, useState } from 'react';
import './App.less';
import { Trans, useTranslation } from 'react-i18next';
import './locale/i18next';

const App = () => {
  const [userName, setUserName] = useState('');

  const { t } = useTranslation();

  const handleChangeLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
    i18next.changeLanguage(e.currentTarget.value);
  };

  // eslint-disable-next-line no-restricted-globals,no-alert
  // @ts-ignore
  // eslint-disable-next-line no-alert
  useEffect(() => setUserName(prompt(t('nameQuestion')), []));

  return (
    <div id="app">
      <h1>{t('helloMessage', { name: userName })}</h1>
      <Trans
        i18nKey="descriptionMessage"
        values={{ name: userName }}
        components={{ h2: <h2 /> }}
      >Значение по умолчанию
      </Trans>
      <div className="date-now">
        {t('date_format', { date: new Date() })}
      </div>
      <div className="language-buttons">
        <button value="en" type="button" onClick={handleChangeLanguage}>EN</button>
        <button value="ru" type="button" onClick={handleChangeLanguage}>RU</button>
        <button value="no" type="button" onClick={handleChangeLanguage}>NO</button>
      </div>
    </div>
  );
};

export default App;
