function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index if target is found
        }
    }
    return -1; // Return -1 if target is not found
};



// Example Usage
const array = [10, 23, 45, 70, 11, 15];
const target = 70;
console.log(linearSearch(array, target));