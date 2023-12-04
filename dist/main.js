var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function updateObjectInArray(initialArray, key, value, patch) {
    return __awaiter(this, void 0, void 0, function* () {
        // Create a shallow copy of the initial array
        const clonedArray = [...initialArray];
        // Find the index of the object to update
        const indexToUpdate = clonedArray.findIndex((obj) => obj[key] === value);
        if (indexToUpdate !== -1) {
            // Apply the patch using object spread
            clonedArray[indexToUpdate] = Object.assign(Object.assign({}, clonedArray[indexToUpdate]), patch);
        }
        // Simulating an asynchronous operation (e.g., API call)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(clonedArray);
            }, 0);
        });
    });
}
// My arrays:
const initialArray = [
    { id: 1, name: 'Ivan', age: 29 },
    { id: 2, name: 'Igor', age: 23 },
    { id: 3, name: 'Alex', age: 25 }
];
function exampleUsage(array, key, value, patch) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedArray = yield updateObjectInArray(array, key, value, patch);
            console.log(updatedArray);
        }
        catch (error) {
            console.error(error);
        }
    });
}
//updating objects, note that it takes initial array copy
exampleUsage(initialArray, 'id', 3, { name: 'Andrew' });
exampleUsage(initialArray, 'name', 'Igor', { age: 46, name: 'Sergiy' });
