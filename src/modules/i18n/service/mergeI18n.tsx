
// Importe Autores 
import authors from '../translations/author';
// Importe as traduções comuns
import ptBR from '../../../common/i18n/ptBR';

// Merge das traduções com o nome dos autores para evidar duplicidade de tradução
const ptTranslation = {
  ...ptBR,
  ...authors
};

export { ptTranslation };
