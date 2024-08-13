const merge = () => {
    let mergedArr = []

    let arr1 = [1, 2, 3]
    let arr2 = [4, 5, 6]
    for (let i = 0; i < arr1.length; i++) {
        mergedArr.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        mergedArr.push(arr2[i]);
    }
    console.log(mergedArr);
}
merge();