/**
 * 
 * Sorts an array of nums in ascending order using bubble sort algorithm:
 * 
 * Repeatedly stepping through the list comparing adjacent elements in groups of two, 
 * then swapping them if they are not in ascending order.
 * 
 * This continues until no more swaps are needed and the array is accurately sorted.
 * 
 */

function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i+1]) {

                //swaps the elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }

        // After each pass through the FileList, reduce n since the nth element is now sorted
        n--;
    } while (swapped);

    return arr;
}

module.exports = bubbleSort;
