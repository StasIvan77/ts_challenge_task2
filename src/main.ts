interface ObjectShape {
    id: number;
    name: string;
    age: number;
  }
  
  
  async function updateObjectInArray<ObjectShape>(
    initialArray: ObjectShape[],
    key: keyof ObjectShape,
    value: ObjectShape[keyof ObjectShape],
    patch: Partial<ObjectShape>
  ): Promise<ObjectShape[]> {
    // Create a shallow copy of the initial array
    const clonedArray: ObjectShape[] = [...initialArray];
  
    // Find the index of the object to update
    const indexToUpdate = clonedArray.findIndex((obj) => obj[key] === value);
  
    if (indexToUpdate !== -1) {
      // Apply the patch using object spread
      clonedArray[indexToUpdate] = { ...clonedArray[indexToUpdate], ...patch };
    }
  
    // Simulating an asynchronous operation (e.g., API call)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(clonedArray);
      }, 0);
    });
  }
  
  // My arrays:
  const initialArray: ObjectShape[] = [
    { id: 1, name: 'Ivan', age: 29 },
    { id: 2, name: 'Igor', age: 23 },
    { id: 3, name: 'Alex', age: 25 }    
  ];


  async function exampleUsage(array: Array<ObjectShape>, key: keyof ObjectShape, value: number | string, patch: Partial<ObjectShape>) {
    try {
      const updatedArray = await updateObjectInArray(array, key, value, patch);
      console.log(updatedArray);
    } catch (error) {
      console.error(error);
    }
  } 

  //updating objects, note that it takes initial array copy
  exampleUsage(initialArray, 'id', 3, { name: 'Andrew'});
  exampleUsage(initialArray, 'name', 'Igor', { age: 46, name: 'Sergiy'});
  