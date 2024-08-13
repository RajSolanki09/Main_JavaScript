let str = "red and white"

let n = str.length
let count = 0
for (let i = 0; i < n; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
        count++;
    }
}
console.log(count);