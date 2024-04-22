/**
 * Merges two sorted arrays into a single sorted array using two-pointer method:
 * 
 * 
 * First, the result array is defined as an empty variable.
 * 
 * While loop iterates through each array at the same time, 
 * sorting through the two elements (pointed to by `i` & `j`) 
 * to determine which of the two is smaller. 
 * 
 * These elements are then placed into the result array.
 * 
 * This loop continues as long as there are elements in both arrays that haven't
 * been sorted and placed into the result array.
 * 
 * 
 * After the loop, one array may still have elements left; 
 * Since these elements are already sorted, they can just be appended 
 * to the result array.
 * 
 * Returns result array. :)
 * 
 */

function merge(arr1, arr2) {
    let result = [];
    let i = 0, j = 0; // pointers

    // Compares elements from both arrays and pushes the smaller of the two to result array
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++; // Moves pointer in arr1
        } else {
            result.push(arr2[j]);
            j++; // Moves pointer in arr2
        }
    }

    // If there are remaining elements in arr1 or arr2, concatenate to result
    if (i < arr1.length) {
        result = result.concat(arr1.slice(i));
    }
    if (j < arr2.length) {
        result = result.concat(arr2.slice(j));
    }

    return result;
};


/**
 * 
 * mergeSort sorts an array using the divide and conquer method.
 * 
 * First, by identifying the midpoint of the array and splitting the array int two halves.
 * 
 * These halves are recursively sorted until each array only contains one element,
 * then merged back together using the merge function (defined above), ensuring 
 * that the resulting arrays are both merged and sorted.
 * 
 * This continues, merging the divided arrays back into larger arrays until we end up with one single sorted array.
 */
function mergeSort(arr) {
    // We know an array with a single element is already sorted
    if (arr.length < 2) {
        return arr;
    }

    // Divides the array into two halves
    const midPoint = Math.floor(arr.length / 2);

    const leftArr = arr.slice(0, midPoint); // Slice from beginning to middle of arr
    const rightArr = arr.slice(midPoint); // Silce from middle to end of arr

    // Uses merge method to recursively sort both halves and merge them back together
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}


module.exports = { merge, mergeSort};