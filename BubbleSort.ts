export default function bubble_sort(arr: number[]): void {
    let temp; // for swap
    for(let i = 0; i < arr.length; i++) { // iterate over entire array
        for(let j = 0; j < arr.length - 1 - i; j++) { // this should n - 1 and - i because we have to consider one element less for each iteration
            // Swap
            if(arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

/**
 * Bubble sort - O(n^2)
 * (n) n+1/2 
drop the constant
n^2 + n
drop the insignificant value -> n
(n^2)
 * iterates through the entire array. if the element at i+1 is bigger than i, swap positions
 * continue this operation until the array is sorted
 * every new iteration, last element can be ignored because it's already the largest number/sorted
 * (n+1)n/2 -> gives the sum of numbers between the range
 */