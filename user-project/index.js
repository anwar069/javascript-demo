import userData from "./user-data.js";

// console.log(userData[0]);

// for (let index = 0; index < userData.length; index++) {
//     const user = userData[index];
//     console.log(user.first_name,user.age)
// }

let userCount18Plus = 0;
let userCount18Less = 0;
let userCount18Equal = 0;

for (let index = 0; index < userData.length; index++) {
    const user = userData[index];
    if (user.age > 18) {
        userCount18Plus++;
    }
    if (user.age == 18) {
        userCount18Equal++;
    }
    if (user.age < 18) {
        userCount18Less++;
    }
}

console.log("18 walo ka count ", userCount18Equal);
console.log("18 se jada karne walo ka count ", userCount18Plus);
console.log("18 se kam walo ka count ", userCount18Less);
