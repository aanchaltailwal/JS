console.log("Welcome Aanchal");
console.log("I love javaScript");

//variables
fullname ="Aanchal";
x= null;
isFollow = true;  //boolean
console.log(isFollow);

const student = {
    fullName : "Aanchal Tailwal",
    age : 20,
    cgpa : 8.48,
    isPass : true,
}

student.age = student.age +1; 
console.log(student);
console.log(student.age);



const product = {
    name : "Ball Pen",
    rating : "4",
    offer : 5,
    price : 270,
};
console.log(product);
typeof product


//conditinal
mode = "dark";
let color;
if(mode === "dark"){
    color = "black";
}
else{
    color = "white";
}
console.log(color);

//alert
//alert("hello")            //creates one time pop up

//
/*let n = prompt("Enter your Marks:");             //it can take input from user

if(n >= 90 && n <= 100){
    console.log("A");

}else if(n >= 70  && n <= 89 ){
    console.log("B");
}else if(n >= 60 && n <= 69 ){
    console.log("C");
}else if(n >= 50  && n <= 59 ){
    console.log("B");
}else{
    console.log("F");
}*/
  
  
/*let num = prompt("Enter the number");
let sum = 0;
for(i = 1; i <= num; i ++){
    sum = sum + i;
}
console.log(sum);


let n = 100;

for(let i = 0; i <=n; i++){
    if(i % 2 === 0){
        console.log(i);

    }
    
}*/

/*let gameNum= 5;
let userNum = prompt("Enter the number:");

while(userNum != gameNum){
    userNum = prompt("oops you entered the wrong number. Try Again");
}
console.log("Congratulations , You guessed it right");*/

/*let username = prompt("Enter your username");
let user = "@" + username + username.length;


console.log(user);*/

let students = [85, 97, 44,37, 76, 60];
let sum = 0;
for(let val of students){
    sum = sum + val;
}
let avg = sum/students.length;
console.log(avg);