import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationAM from './locales/am.json';
import translationOM from './locales/om.json';
import translationTI from './locales/ti.json';
import translationSO from './locales/so.json';

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  am: {
    translation: translationAM,
  },
  om: {
    translation: translationOM,
  },
  ti: {
    translation: translationTI,
  },
  so: {
    translation: translationSO,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
