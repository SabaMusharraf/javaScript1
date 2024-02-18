//      Javascipt

/* Question:   What is Javascript?
   Answer:    JS is a programming language. We use it to give instructions to the computer.*/   

//     console.log

/* Question:    What is console.log?
   Answer:      Console.log is used to log (print) a message to the console.*/

   console.log("Hello World!");

   //    Variables

  // Variables are container for data.

  firstName = "Saba";     //firstName is a veriable
  lastName = "Hussain";    //lastName is a veriable
  console.log(firstName , lastName);

  w = 3;         //w is a veriable 
  x = 4;         //x is a veriable
 // sum = w + x;   //sum is a veriable
  

/*    Arthmetic Operators
Arthmetic operators is used to perform some operators on data.
+, -, *, /, %, **                */

let a = 6;
let b = 5;

console.log("a = ",a,"\nb = ",b);

console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=,",a%b);
console.log("a**b=",a**b); 

/*      Assignment Operators
+= , -= , *= , /= , %= , **=           */

//create a const object called "product" to store information shown in the picture

const product = {
   productName : "Patrollium Jelly 'Un Scent'",
   quantity: 3.75,
   sizeOption: 3,
   rating: 4,
   soldItemPastMonth: 9000,
   price: 2,
};
console.log(product);
product["price"] = product["price"] +5;
product["rating"] = product["rating"] +1;
product["soldItemPastMonth"] = product["soldItemPastMonth"] + 1000;

// create a const object called "profile" to store information shown in the picture.

const profile = {
   userName: "Shardha Khapra",
   post: 195,
   followers: 56900,
   following: 4,
   isfollow: true,
};
console.log(profile["profile"]);

// Unary Operators

/* There are 4 types of unary operators
1) post Increments a++
2) post Decrement a--
3) Pre Increment ++a
4) Pre Decrement --a  */

// post Increment
let y = 3;
console.log("y++", y++); 
console.log(y);

// pre Increment
let s = 9;
console.log("s++" ,++s);

//Post Decrement
let r = 55;
console.log("r--", r--);
console.log("r--", r--);

// pre Decrement
let t = 100;
console.log("--t",--t);

// Assigment Operators
// = , +=, -=, /=, %=, **=

let a1 = 3;
console.log("a1 += 3=", a1 += 3);
console.log("a1 -= 3=", a1 -= 3);
console.log("a1 /= 3=", a1 /= 3);
console.log("a1 %= 3=", a1 %= 3);
console.log("a1 **= 3=", a1 **= 3);

// Comparison Operators
// ==, ===, !=, !==

let c = 4;
let d = 5;
console.log("4==5", 4==5);
console.log("c!==d", c !== d);

let b1 = 9;
let b2 = 3*3;
console.log(b1===b2);

let c1 = 3;
let c2 = "3";
console.log(c1===c2);

let d1 = 4;
let d2 = 4;
console.log("d1 !== d2", d1 !== d2);

/* Logical Operators
logical And (&&)
Logical Or (||)
Logical Not (!)
*/
let num = 3;
let num2 = 12;
let cond1 = num < num2;
let cond2 = num > num2;
console.log(cond1 && cond2);
console.log(cond1 || cond2);


let num1 = 3;
if(num1 % 2 == 0){
   console.log(num1, "is a even number");
   }
else{
   console.log(num1, "is an odd number");
}

/* Practice Question
Get user to input a number using prompt ("Enter a number,"), check if the number is a multiple of 5 0r not */

let userInput = prompt("Enter a Number");
if(userInput % 5 === 0){
   console.log(userInput, "is a multiple of 5");
} else{
   console.log(userInput, "is not a multiple of 5");
}
 // Practice Question

 let percentage = prompt("Enter your Percentage");
 if(percentage >= 80 && percentage <=100){
   console.log("A+");
 }else if(
   percentage >= 70 && percentage <= 80){
    console.log("A");
   }else if(
      percentage >= 60 && percentage <= 70){
         console.log("B");
      }else if(percentage >= 50 && percentage <= 60){
         console.log("C");
      }else if(percentage >= 40 && percentage <= 50){
         console.log("D");
      }else if(percentage >= 33 && percentage <=40){
         console.log("E");
      }else if(percentage >= 0 && percentage <= 33){
         console.log("F");
      }else{
         console.log("You entered wrong");
      }

      /* Loops And Strings
      Loops are used to execute a piece of code again and again.*/

      //For loop:
      for(let i = 0; i <= 30; i++){
         console.log(i,"my name is Saba");
      }

      //types of loops
      //(1) for         (2)while       (3)dowhile
      
      //for loop
      // In for loop requird 3 statements. 1.Initialize, 2. Stopping Condition, 3. Updation
       // Calculate sum of 1 to 5
       
       let sum = 0;
       n = 1000;
       for(i=0; i<=n; i++){
         sum = sum+i;
       }
       console.log(sum);

       /* While loop
       In the while loop initialize before the loop and give stoping condition at the start
       If the while is true then the loops run */

       
