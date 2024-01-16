// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './language/en/global.json';
import am from './language/am/global.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    am: { translation: am },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;