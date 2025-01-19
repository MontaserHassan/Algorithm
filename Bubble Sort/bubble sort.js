function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        // Track if any swaps happen in this pass
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                console.log([arr[j], arr[j + 1]]);
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                console.log([arr[j], arr[j + 1]]);
                swapped = true;
            };
        };
        // If no swaps occurred, the array is already sorted
        if (!swapped) break;
    };
    return arr;
};


// Example Usage
const array = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array));