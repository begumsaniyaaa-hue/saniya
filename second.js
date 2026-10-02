function secondLargest(numbers) {
    let largest = -Infinity;
    let second = -Infinity;

    for (let num of numbers) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num < largest && num > second) {
            second = num;
        }
    }

    if (second === -Infinity) {
        return "Not Found";
    }

    return second;
}

console.log(secondLargest([10, 45, 23, 78, 56]));