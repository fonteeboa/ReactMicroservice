
// Importe Autores 
import authors from '../translations/author';
// Importe as traduções comuns
import pt_BR from '../../../common/i18n/pt_BR';

// Merge das traduções com o nome dos autores para evidar duplicidade de tradução
let ptTranslation = {
  ...pt_BR,
  ...authors
};

export { ptTranslation };
