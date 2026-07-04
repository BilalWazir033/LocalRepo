// console.log('Welcome to waziristan razmak');
// let a='My World';
// console.log(a)
// let b=5;
// let c=9; // global 
// console.log('sum',b+c);
// let name='Ilham';
// let age=23;
// console.log('Name:',name,'Age:',age);
// var d=34; // local 
// console.log('sub',d-c);
// let person={name:"Ali", age:23}
// console.log(person)
// let Age=20;
// let isadult=(Age>=18)? 'Yes':'No';
// console.log(isadult);
// let num=18;
// if(num<18){
//     console.log("You can't cast vote");
// }
// else if(num>=18 && num<60){
//     console.log("You are eligible to cast vote");
// }
// else{
//     console.log("you are too old. Rest please");
// }
// for (let i = 0; i < 5; i++) {
// if (i === 2) {
// continue;
// }
// console.log("Iteration:", i);
// }
// console.log("we");
// for (let i = 0; i < 5; i++) {
// if (i === 3) {
// break;
// }
// console.log("Iteration:", i);
// }
// function greet(name){
//     return `Hello, ${name}!`;
// }
// let mes=greet('wahid');
// console.log(mes)

// // const button = document.getElementById('myButton');
// // button.addEventListener('click', function(event) {
// // // Handle the click event
// // console.log('Button clicked!');
// // });

// console.log("Start");

// setTimeout(() => {
//   console.log("Middle");
// }, 2000);
//  console.log("End");
// // setInterval(()=>{
// //     console.log("Repeating code execution");
// // },1000);

// function fetchData(callback) {
// // Simulating data fetching asynchronously
// // setTimeout(() => {
// // const data = 'Some fetched data';
// // callback(data);
// // }, 100);
// // }
// function processFetchedData(data) {
// console.log('Processing data:', data);
// }
// fetchData(processFetchedData);

// let promise = new Promise((resolve, reject) => {

//     let dataLoaded = true;

//     if (dataLoaded) {
//         resolve("Data loaded successfully ✅");
//     } else {
//         reject("Failed to load data ❌");
//     }

// });
let weight=20;
let isweighted=(weight>=18)?'yes':'no';
console.log(isweighted);
console.log(typeof weight)
let name='ali';
console.log(typeof name);
if(name=='ali'){
    console.log("Allow to Enter");
}
else{
    console.log('Invalid User');
}
let age=20;
if(age>18){
    if(age<60){
        console.log('You can cast the Vote');
    }
}
let day='Sunday';
switch(day){
    case "Monday":
        console.log("Working day");
        break;
    case "Tuesday":
        console.log("Working day");
        break;
    case "Sunday":
        console.log("Off day");
        break;
    default:
        console.log("invalid day");
}
let isStudent=false;
if(age>18 && !isStudent){
    console.log("Valid to Marry");
}
try{
    let result=10/0;
    console.log(result);
}catch(error){
    console.log("Division by Zero",error);
}
for(let i=0; i<5; i++){
    console.log("Allah Almighty")
}
let count=0;
while(count<10){
    console.log("Iterations: ",count);
    count++;
}
let c=2;
do{
    console.log("Happy Birthday");
    c++;
}while(c<6);


