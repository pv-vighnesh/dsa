export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do { 
        const mid = Math.floor((low + (high - low) / 2)); // Finding mid point
        const value = haystack[mid];

        if(value === needle) {
            return true;
        } else if(value > needle) { // if key is less than mid, search only lower part
            high = mid;
        } else {
            low = mid + 1; // if key is greater than mid, search the higher part
        } 
    } while(low < high); // Continue the loop until low is less than High
    return false;
}

// Binary Search 
// Array has to be sorted
// lo - always inclusive, hi - always exclusive
// halve the array, if the mid value is greater than the key, search lower part. Else search higher part.
// Big O - O(logN)
// Another Big O trick - If the input halves at each step, its likely O(LogN) or O(NlogN)