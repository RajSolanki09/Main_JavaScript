const remove = () => {
    let originalArray = [1, 2, 2, 3, 4, 4, 5];
    let distinctArray = [];
    let n = originalArray.length

    for (let i = 0; i < n; i++) {
        let foundDuplicate = false;
        for (let j = 0; j < distinctArray.length; j++) {
            if (originalArray[i] === distinctArray[j]) {
                foundDuplicate = true;
            }
        }
        if (!foundDuplicate) {
            distinctArray.push(originalArray[i]);
        }
    }

    console.log(distinctArray);
}
remove()