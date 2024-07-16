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
alert("hello")            //creates one time pop up

//
let n = prompt("Enter a number");             //it can take input from user

if(n % 5 == 0){
    console.log("Multiple of 5", n);

}else{
    console.log("Not a multiple of 5", n);
}
