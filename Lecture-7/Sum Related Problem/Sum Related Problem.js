const sum = () => {
    let evenSum = 0
    let oddSum = 0
    let N = document.getElementById('input').value;


    for (let i = 1; i <= N; i++) {
        if (i % 2 === 0) {
            evenSum += i
        }
        else {
            oddSum += i
        }
    }

    if (evenSum > oddSum) {
        document.getElementById('result').innerHTML = "even"
    } else {
        document.getElementById('result').innerHTML = "odd"
    }
}