// MDN js , TEMPORAL is the proposal for making date and time functionality easy to be worked on , but as we know it is still proposal , so DATE will be doing by legacy method .

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// Dates ******

let myDate = new Date();
console.log(myDate); //2024-01-16T07:25:26.505Z 

console.log(myDate.toString()); //Tue Jan 16 2024 07:30:17 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()); //Tue Jan 16 2024
console.log(myDate.toLocaleString()); //1/16/2024, 7:50:23 AM

console.log(typeof myDate); // Object 

console.log(myDate.toISOString()); // 2024-01-16T07:53:37.970Z
console.log(myDate.toTimeString()); // 07:53:37 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toLocaleTimeString()); // 7:53:37 AM

//+++++ if we want an specific dates for us (by putting the arguments in parameter )++++++++++++

let myCreatedDate = new Date(2023,0,23);
console.log(myCreatedDate); // 2023-01-23T00:00:00.000Z
console.log(myCreatedDate.toString()); // Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time) ,,, Month are started with 0 in javascript .

let myCreatedDate2 = new Date(2023,0,23,5,3);
console.log(myCreatedDate2.toLocaleDateString());// 1/23/2023
console.log(myCreatedDate2.toLocaleString());//1/23/2023, 5:03:00 AM
console.log(myCreatedDate2.toDateString());//Mon Jan 23 2023

let mmddyy = new Date("01-16-2024");
console.log(mmddyy.toLocaleString()); // 1/16/2024, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(myTimeStamp); // value comes in ms millisecond 1705392437559

console.log(myCreatedDate2.getTime()); //1674450180000ms

console.log(Math.floor(Date.now()/1000)); // if we want te value to be converted into seconds then divide it by 1000 , and since the value will come in decimals we use Math.floor() 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate()); // 16 tha date 
console.log(newDate.getMonth()); // 0 Jan month 

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ''
})
