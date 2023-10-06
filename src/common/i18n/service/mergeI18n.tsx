
// Importe Autores 
import authors from '../translations/author';
// Importe suas traduções
import pt_BR from '../translations/pt_BR';
// Merge das traduções com o nome dos autores para evidar duplicidade de tradução
let ptTranslation = {
  ...pt_BR,
  ...authors
};

export { ptTranslation };
