function isPalindrome(text) {
    let arr = text.split("");
    console.log(arr);

    let loopEnd = Math.ceil(arr.length / 2);
    for (let index = 0; index < loopEnd; index++) {
        console.log(index, arr[index], arr.length - index, arr[arr.length - 1 - index]);
        let start = arr[index];
        let end = arr[arr.length - 1 - index];
        if (start != end) {
            return false
        }
    }

    return true;
}

function isPalindromeReverse(text) {
    // let arr = text.split("");
    // console.log(arr);
    // let rev = arr.reverse();
    // console.log(rev);
    // let joined = arr.join("");
    // console.log(joined);

    return text == text.split("").reverse().join("");
}


let text = "MADAM";

console.log(isPalindrome(text));
// console.log(isPalindromeReverse(text));