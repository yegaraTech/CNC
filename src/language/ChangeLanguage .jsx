import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ChangeLanguage  = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className='m-2'>
    <select
      value={selectedLanguage}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      <option value="en">En</option>
      <option value="am">አማ</option>
    </select>
  </div>
  );
};

export default ChangeLanguage ;