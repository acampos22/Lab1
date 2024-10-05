import { Entree } from './entree.model';
import { SortedListOfImmutables } from './sorted-list-of-immutables.model';

describe('Entree equals', () => {
  /**
   * Nombre de la prueba: Verificar funcionalidad del Equals en varios parametros
   * Objetivo: Verificar que el método equals tenga el funcionamiento esperado, que es devolver true si son iguales y false si son diferentes.
   * Datos de prueba: Combinaciones de Comidota y Comida
   * Resultado esperado: True cuando los nombres sean iguales y false  si son diferentes.
   */

  const testCases = [
    { name1: "Comidota", name2: "Comidota", expected: true },
    { name1: "Comidota", name2: "Comida", expected: false },
    { name1: "Comida", name2: "Comida", expected: true },
    { name1: "Comida", name2: "Comidota", expected: false }
  ];

  testCases.forEach(({ name1, name2, expected }) => {
    it('Deberia devolver true si los nombres son iguales y false si son diferentes', () => {
      const foodList = new SortedListOfImmutables();
      const entree1 = new Entree(name1, foodList);
      const entree2 = new Entree(name2, foodList);
      
      expect(entree1.equals(entree2)).toBe(expected);
    });
  });
});

