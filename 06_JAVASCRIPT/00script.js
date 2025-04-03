



// 1) html -> 
// 2) nodejs -> 








// console.log("Hello World");

// 1) What is JavaScript?
// JavaScript (JS) is a lightweight, interpreted (or just-in-time compiled) programming language primarily used to create interactive and dynamic web pages, but also used in server-side environments and other applications. 

// 2)Using the Console

// 3) Variables : A variable is a named container for storing data values.

// colony -> 101 , 102, 103  


// 14)IDENTIFIERS RULES

// • Names can contain letters, digits, underscores, and dollar signs. (no space)
// let a b = 10;
// let a_2b = 10;

// • Names must begin with a letter.

// • Names can also begin with $
// • Names are case sensitive (y and Y are different variables).
let a = 10;
let A = 20;
// Reserved words (like JavaScript keywords) CANNOT be used as names.




// let let = 10;

// let $aa = 10;

// let 2a = 10;








// CASE : 

// kritanshuChaurasiya
// kritanshu_chaurasiya
// KritanshuChaurasiya
// kritanshu-chaurasiya
// ankit || aniket 

// 1)camelCase : fullName: ITS NOT A RULE BUT TRY TO FOLLOW THIS CASE FOR JS.
// 2)snake_case : full_name
// 3)pascalCase : FullName
// 4)kabab case : full-name


// 4) Keywords : var, let, const 


{
    // var a1 = 10
    // let b = 10
}

// console.log(a1)
// console.log(b)




// 4. Data Types in JavaScript

// 1)Primitive Data Types : 

// 1)String : "Hello World", 'Hello World', `Hello World`   
// 2)Number : 10, 10.5, 10.55555, 11 
// 3)Boolean : true, false 
// 4)Null : null
// null => standalone value. AND IT MEANS KI VARIALE KO DECLARE KAR DIYA HAI AND INTENTIONALLY NULL DE DIYA HAI.
// undefined => THIS MEANS KI ABHI VALUE ASSINGN NAHI HUI HAI. AND HERE IT MEANS KI VARIABLE DECLARE KAR DIYA HAI AND ISKO ABHI DEFINE 
// 7)BigInt : 100 : -(2^53 - 1) to 2^53 - 1 : iske bhar agar : 9007199254740991.
//Symbol → Used to create unique and immutable identifiers.

// 2)Non-Primitive Data Types
//Object 
//Array
//Function

let aaaa = null;


//5)ARITHMATIC OPERATORS IN JS
// 1)+
// 2)-
// 3)*
// 4)/
// 5)%



// 10%3 = 1
// 10/3 = 3.3333333333333335
// |-a| = a => |-10| = 10
// | a| = a => |10| = 10      






//6)
// ->and : && 
// ->or : ||
// ->not : !


// kritanshu and vash have to come today. 
// kritanshu or vash have to come today.  

if(5>3 && 5>2){
    console.log("HELLO WORLD")
}else{
    console.log("HELLO WORLD 2")
}

















// AND(&&)
// VAL1  VAL2  VALUE
// 1       1       1
// 1       0       0
// 0       1       0
// 0       0       0

// OR(||)
// VAL1  VAL2  VALUE
// 1       1       1
// 1       0       1
// 0       1       1
// 0       0       0

// NOT 
// 0->1
// 1->0

// 4+1*6/2

// 4+1*6/2 -> 7 

// (2+1)*3 -> 9








//(5+2)/7+1*2 -> (7)/7 + 1*2 -> 1 + 1*2 -> 3

// ()
// **
// *,/,%
// +,-  


// binary OPERATORS :
// a + b -> here a and b are operands and "+" is OPERATOR

// unary OPERATORS :
// a++ 
// ++a 

// a--
// --a

let d = 10; // 11
// console.log(++d) // 11
console.log(d++) // 10 -> 11
console.log(d++)  // 11 -> 12
console.log(d++)  // 11 -> 12




let num = 5; 
let newNum = ++num;   // 6 6 
console.log(num)      // 6
console.log(newNum)   //6 
   

newNum = num++;   // 6->  6 ->  7 
console.log(num)      //6
console.log(newNum)   //6

newNum = ++num;    //
console.log(num)       
console.log(newNum)    



//5 6 6 6 7 7
// boolean -> true or false






// 16)typescript : stactic type language, where js is dynamic type language.
// microsoft : October 2012
// JavaScript was introduced in 1995 by Brendan Eich, a programmer at Netscape 


let z = 10;
z = "Hello World";
z = true;
z = null;
console.log(z);


// 18)STRING IN JS : STRINGS ARE TEXT OR SEQUENCE OF CHARACTERS

let name =" ratanshil "
let role = "developer"
let message = "Hello 'World'"
let message2 = ''
// let name23 = ""100""
// let name2 = ""100""
// let name2 = ''100''
// let name2 = "'100'"
// let name2 = '"100"'
// console.log(name2)
// ``









// ""hello ''world''""

// console.log("""hello ''world''""")


// console.log("hello 'world'")

let b = "KRITANSHU" ;


console.log(`hello 'world' ${b} ` )


// """", '''', '""', "''"  : ``










// """" | ''''


// ``

// let name12 = "ratanshil";
 
// ``  : Template Literal : backticks in normal language


// console.log(`good evening,  ${name12} `)


// 19)

// console.log(name12[name12.length - 1])


// console.log("ratanshil" + " " + "meshram")
// console.log( "hello " +  "'" + "'" + "world" + "'" + "'" )
//  ""hello ''world''""

// undefined
// A variable that has not been assigned a value is of 
// type undefined.

// let Z;
// undefined ;

// null
// The null value represents the intnetional absence of any object value
// to be explicitly defined
// let a = null;
// a;
// null;

//1) LET VAR COSNT 

// for(var i = 0; i<5; i++){
//     console.log(i)
// }


// 2)[10, 20, 40, 50, 20, 30, 40, 50, 60, 70, 80, 90, 100]



// 3) 10 20 30 40 50 60 70 80 90 100

// 4) 10 20 30 40 50 60 70 80 90 100





