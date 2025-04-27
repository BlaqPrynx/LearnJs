//if(condition) statement


//if (condition){
//statement
// } else{
//statement
//}


//if(condition){
//statement}
//else if(condition){
   // statment
//}
//else if(condition){
  // statement
//}


// If and Else thatchecks users temperature and returns in console.-086y 
// let temp = prompt("Enter Body Temperature here")

// if (temp != 36) console.log("Wo Yale")

    //OR

// if (temp < 36  || temp > 36) console.log( "Wo yale")

//     //OR

// if (temp > 36){
//     console.log("Your Body Temperature is High")
// }

// else if (temp < 36) {
//     console.log("Your Body Temperature is Low")
// }

// else {
//     console.log("Body Temp is normal")
// }



// Voting System

// let Age = prompt("Please Enter Your Age")


// if (Age < 18) console.log ("Ineligible Voter")


    //OR

// if (Age < 18){
//     console.log(`You are ${Age} Years Please You  are ineligble to vote`)
// }
// else if (Age >= 18){
//     console.log(`You are ${Age} Years Please You  are Eligble to vote`)
// }
// else{
//     console.log("Invalid Entry")
// }



//Conditional statement to check whether number is EVen or Odd

// let Usernumber= prompt("Please Enter Number")

// if(Usernumber % 2 === 0){
//     console.log(`You Entered Number ${Usernumber} ,This is an Even Number`)
// }

// else{
//     console.log(`You Entered Number ${Usernumber} ,This is an odd Number`)
// }



//Assignmemt Grading System 80 = A  79-70 = B  , 69-60=C ,59-50  =D 49 -0 =F

// let result = prompt ("Please Enter Result")

// if (result <=100 && result >= 80){
//     console.log(`You had ${result} ,Which is Grade : A`)
// }

// else if (result <=79 && result >= 79){
//     console.log(`You had ${result} ,Which is Grade : B`)
// }

// else if (result <=69 && result >= 60){
//     console.log(`You had ${result} ,Which is Grade : C`)
// }

// else if (result <=59 && result >= 50){
//     console.log(`You had ${result} ,Which is a Grade : D (Gye Ko didi)`)
// }
// else if (result <=49 && result >= 0){
//     console.log(`Your had ${result} ,Which is Grade  : F (Joe Woawe)`)
// }

// else{
//     console.log("Invalid Input")
// }


//Using Switch for Grade assignment
let results = prompt("Please Enter Result")
switch(true){
    case (results <=100 && results >=80):
    console.log(`You had ${results} ,Which is Grade : A`)
         break;
    case (results <=79 && results >=70):
    console.log(`You had ${results} ,Which is Grade : B`)
         break;

    case (results <=69 && results >=60):
    console.log(`You had ${results} ,Which is Grade : C`)
         break;

    case (results <=59 && results >=50):
    console.log(`You had ${results} ,Which is Grade : D (Gye ko didi)`)
         break;

    case (results <=49 && results >=40):
    console.log(`You had ${results} ,Which is Grade : F (Joe Woawe)`)
        break;
    
        default:
            console.log(" wo baa ha b3 y33 d3n ")
}