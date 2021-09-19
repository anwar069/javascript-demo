// **** Boolean
// Datatype


// let a = '10';
// let b = 10;
// let c = true;
// let d;
// let e = null;

// console.log("Type of A", typeof a);
// console.log("Type of B", typeof b);
// console.log("Type of C", typeof c);
// console.log("Type of D", typeof d);
// console.log("Type of E", typeof e);

// console.log("A === B", a===b);
// console.log("A !== B", a!==b);
// console.log("A == B", a==b);
// console.log("A != B", a!=b);


// Print the following
// One Plus 1 
// One Plus 2 
// One Plus 3 
// One Plus 4 
// One Plus 5 
// One Plus 5t
// One Plus 6 
// One Plus 6t
// One Plus 7 
// One Plus 7t
// One Plus 7 Pro
// One Plus 7 Nord
// One Plus 8 
// One Plus 8t

let end = 8;
for (let index = 1; index <= end; index++) {
    console.log("One Plus", index);
    if (index > 4) {
        console.log("One Plus", index, "t");
    }
    if (index == 7) {
        console.log("One Plus", index, "Pro");
        for (let j = 1; j <= 10; j++) {
            console.log("One Plus", index, "Nord", j);
        }
    }
}
