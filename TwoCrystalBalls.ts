export default function two_crystal_balls(breaks: boolean[]): number {

    const jumpAmount = Math.floor(Math.sqrt(breaks.length)); // setting the jump amount to sqrt of length of array

    let i;
    for(i = jumpAmount; i < breaks.length; i += jumpAmount) {
        if(breaks[i]) { // iterating over array and breaking out of it if the ball breaks
            break;
        }
    }

    i -= jumpAmount; // decrement i to last jump amount

    for(let j = 0; j < jumpAmount && i < breaks.length; j++, i++) { // Linear search over the array
        if(breaks[i]) {
            return i; // return index of breaking point
        }
    }
    return -1;
}

// Two Crystal ball problem
// Big O - O(Sqrt(N))
