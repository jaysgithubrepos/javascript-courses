//Primitive data types
//7 types
//1.String
//2.Number
//3.Boolean
//4.Null
//5.undefined
//6.symbol
//7.BigInt

//Non Primitive or Reference data types
//1.Array
//2.Objects
//3.functions


//Javascript is a single thread language

const score=100;
const scoreValue=100.3;
const isloggedin=true;
const temp=null;
let userEmail;
const id=Symbol('123');
const  anotherid=Symbol('123');
console.log(id==anotherid);

const bigNumber=2134356567678768675643423523212332546546546572343546546546545675233245n;
console.log(bigNumber);



let heroes=["spiderman","batman","hanuman","shaktiman"];
console.log(heroes);

let myObject={
    name:"jai",
    age:29

}
console.log(myObject);

let myperson=function jai(){
console.log("hello");
}

//console.log(myperson());


//Memory
//1.Stack memory ->used in primitive data types
//2.Heap Memory ->used in non prmitive data types



let myMotherName="Rajdevi";
let mymotheranotherName=myMotherName;
console.log(mymotheranotherName);
mymotheranotherName="Chai";
console.log(myMotherName);
console.log(mymotheranotherName);


let user={
email:"jayyadav0109@gmail.com",
upi_id:'7900083629@ybl'

}

let user1={
    email:"rupamaydav@gmail.com"
}

