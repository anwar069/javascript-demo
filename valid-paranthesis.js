
function isValid(text) {
    console.log('Original ', text);
    // string ka array banao
    let arr = text.split("");
    console.log('Array ', arr);
    // length nikalo array 
    let arrLength = arr.length;
    console.log('Length ', arrLength);

    //open bracket ko count kro
    let openCount = 0;
    //close bracket ko count kro    
    let closeCount = 0;

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == '{') {
            openCount++;
        }

        if (arr[index] == '}') {
            closeCount++;
        }
    }

    // console.log("Open", openCount);
    // console.log("Close", closeCount);
    // console.log("is Valid", openCount == closeCount);
    return openCount == closeCount;
}

function isValidStack(s) {
    let map = {
        '[': ']',
        '{': '}',
        '(': ')'
    }
    let stack = [];
    for (let index = 0; index < s.length; index++) {
        const element = s[index];
        if (Object.keys(map).includes(element)) {
            stack.push(element)
        }
        if (Object.values(map).includes(element)) {
            if (map[stack[stack.length - 1]] == element) {
                stack.pop()
            } else {
                return false
            }
        }
    }

    return !stack.length;
}


// this is a senetec
let str = '{{}}';

console.log(isValid(str));
console.log(isValidStack(str));
