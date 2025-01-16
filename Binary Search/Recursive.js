function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1; // Base case: target not found
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid; // Target found
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right); // Search in the right half
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1); // Search in the left half
    }
};



// Example Usage
const array = [1, 3, 5, 7, 9, 11];
const target = 7;
console.log(binarySearchRecursive(array, target));