import { Food } from './food.model';
import { SortedListOfImmutables } from './sorted-list-of-immutables.model';



describe('Annadir elemento', () => {
  /**
   * Nombre de la prueba: Annadir un elemento de la lista 
   * Objetivo: Verificar que el método add annade un elemento de la lista.
   * Datos de prueba: comida linda
   * Resultado esperado: El alimento comida linda sera parte de la lista.
   */

  it('Debería annadir un elemento', () => {
    const list = new SortedListOfImmutables();
    const comida2 = new Food("Comida Linda", 373, 373, "Comida2.jpg");
    list.add(comida2);


    expect(list.get(0).getName()).toEqual("Comida Linda");
  });

  /**
   * Nombre de la prueba: Annadir Alfabeticamente
   * Objetivo: Verificar que el método add annade los elementos en orden alfabetico.
   * Datos de prueba: comida a, comida b, comida c
   * Resultado esperado: El alimento comida linda sera parte de la lista.
   */
  it('Annadir en orden alfabetico', () => {
    const list = new SortedListOfImmutables();
    const comida1 = new Food("Comida c", 373, 373, "Comida2.jpg");
    const comida2 = new Food("Comida a", 373, 373, "Comida2.jpg");
    const comida3 = new Food("Comida b", 373, 373, "Comida2.jpg");


    list.add(comida1);
    list.add(comida2);
    list.add(comida3);

    expect(list.get(0).getName()).toEqual("Comida a");
    expect(list.get(1).getName()).toEqual("Comida b");
    expect(list.get(2).getName()).toEqual("Comida c");
    
  });
});




describe('Eliminar elemento', () => {
  /**
   * Nombre de la prueba: Eliminar un elemento de la lista 
   * Objetivo: Verificar que el método remove elimina un elemento de la lista.
   * Datos de prueba: La lista [Comida Linda, Comida Fea]
   * Resultado esperado: El alimento Comida Fea debe ser eliminado de la lista.
   */

  it('Debería eliminar un elemento', () => {
    const list = new SortedListOfImmutables();
    const comida1 = new Food("Comida Fea", 373, 373, "Comida2.jpg");
    const comida2 = new Food("Comida Linda", 373, 373, "Comida2.jpg");
    list.add(comida1);
    list.add(comida2);

    list.remove(comida1);

    expect(list.getSize()).toEqual(1);
  });

  /**
   * Nombre de la prueba: Eliminar un elemento de la lista vacia que no se encuentra
   * Objetivo: Verificar que el método remove elimina no hace nada cuando un elemento no esta en la lista.
   * Datos de prueba: Comida linda
   * Resultado esperado: No Pasa nada
   */
  
  it('Lista vacia', () => {
    const list = new SortedListOfImmutables();
   
    const comida2 = new Food("Comida Linda", 373, 373, "Comida2.jpg");

    list.remove(comida2);

    expect(list.getSize()).toEqual(0);
  });
});

