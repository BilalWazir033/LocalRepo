console.log('Welcome to waziristan razmak');
let a='My World';
console.log(a)
let b=5;
let c=9; // global 
console.log('sum',b+c);
let name='Ilham';
let age=23;
console.log('Name:',name,'Age:',age);
var d=34; // local 
console.log('sub',d-c);
let person={name:"Ali", age:23}
console.log(person)
let Age=20;
let isadult=(Age>=18)? 'Yes':'No';
console.log(isadult);
let num=18;
if(num<18){
    console.log("You can't cast vote");
}
else if(num>=18 && num<60){
    console.log("You are eligible to cast vote");
}
else{
    console.log("you are too old. Rest please");
}
for (let i = 0; i < 5; i++) {
if (i === 2) {
continue;
}
console.log("Iteration:", i);
}
console.log("we");
for (let i = 0; i < 5; i++) {
if (i === 3) {
break;
}
console.log("Iteration:", i);
}
function greet(name){
    return `Hello, ${name}!`;
}
let mes=greet('wahid');
console.log(mes)

const button = document.getElementById('myButton');
button.addEventListener('click', function(event) {
// Handle the click event
console.log('Button clicked!');
});