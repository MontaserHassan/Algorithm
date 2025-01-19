function linearSearchRecursive(arr, target, index = 0) {
    if (index >= arr.length) {
        return -1; // Base case: target not found
    }
    if (arr[index] === target) {
        return index; // Target found
    }
    return linearSearchRecursive(arr, target, index + 1); // Search in the rest of the array
};



// Example Usage
const array = [10, 23, 45, 70, 11, 15];
const target = 70;
console.log(linearSearchRecursive(array, target));  