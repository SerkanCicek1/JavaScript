const arr = [12, 45, -2, -15, 24, -67, 51, 3, 9];

const findDifferenceBetweenPositiveAndNegative = (arr) => {
    let positiveSum = 0;
    let negativeSum = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i] > 0 ? positiveSum += arr[i] : negativeSum += arr[i];
    };

    return positiveSum + negativeSum;
};

console.log(findDifferenceBetweenPositiveAndNegative(arr)); // 60