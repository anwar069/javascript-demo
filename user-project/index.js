import userData from "./user-data.js";

/* console.log(userData[0]);

// for (let index = 0; index < userData.length; index++) {
//     const user = userData[index];
//     console.log(user.first_name,user.age)
 }*/


// let userCount18Plus = "Ahmwdhjhbjmbhbkn mn";
// let userCount18Less = 0;
// let userCount18Equal = 0;

// for (let index = 0; index < userData.length; index++) {
//     const user = userData[index];
//     if (user.age > 18) {
//         userCount18Plus = userCount18Plus + 3;
//     }
//     if (user.age == 18) {
//         userCount18Equal++;
//     }
//     if (user.age < 18) {
//         userCount18Less++;
//     }
// };

// console.log("18 walo ka count ", userCount18Equal);
// console.log("18 se jada karne walo ka count ", userCount18Plus);
// console.log("18 se kam walo ka count ", userCount18Less);

function userCounter(allUsers,userAge) {
    let count = 0;
    
    for (let index = 0; index < allUsers.length; index++) {
        const user = allUsers[index];
        if (user.age > userAge) {
            count++;
        }
    }
    return count;
}

// console.log('50+ walo k a count', userCounter(userData,50));

// console.log('80+ walo k a count', userCounter(userData,80));

// console.log('20+ walo k a count', userCounter(userData,20));

// console.log('10+ walo k a count', userCounter(userData,10));

function userCounterName(allUsers,userAge) {
    let userArr = [];
    
    for (let index = 0; index < allUsers.length; index++) {
        const user = allUsers[index];
        if (user.age > userAge) {
            userArr.push(user.first_name + ' ' + user.last_name+ ' : ' + user.city);
        }
    }

    return userArr;
}

let userList = userCounterName(userData,80);
 console.log('50+ walo k a count',userList.length ,userList );



