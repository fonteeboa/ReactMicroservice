
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importe suas traduções
import { ptTranslation } from './service/mergeI18n';

const resources = {
  pt: {
    translation: ptTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
