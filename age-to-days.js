function calcAge(age) {
    let days = age * 365;
    console.log(days, "Days");
    let hours = days * 24;
    console.log(hours, "Hours");
    let minute = hours * 60;
    console.log(minute, "Minutes");
}

calcAge(65);