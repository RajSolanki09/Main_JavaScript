const findnumber = () => {

    let arr = [1, 2, 4, 5, 6]
    let n = arr.length;

    let N = (n * (n + 1)) / 2;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    let missingNumber = sum - N;
    
    console.log(missingNumber);
}
findnumber();