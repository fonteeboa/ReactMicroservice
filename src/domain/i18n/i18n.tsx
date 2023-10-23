
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
    lng: 'pt', // Idioma padrão
    fallbackLng: 'pt', // Idioma de fallback
    interpolation: {
      escapeValue: false, // Não escape strings traduzidas
    },
  });

export default i18n;
