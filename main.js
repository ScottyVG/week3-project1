// JavaScript Function Exercises

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.
var divideByTwo = function(x) {
  x = x / 2;
  console.log(x);
};

divideByTwo(6);

// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.

var greeting = function (name1, name2) {
  console.log("Good morning", name1);
  console.log("Good morning", name2);
};

greeting('Jenny', 'Bobby');
// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.
var priceCheck = function (pricePerUnit) {
  monthlyTotal = pricePerUnit * 6;
  console.log("The monthly cost will be $", monthlyTotal);
};
priceCheck(3.12);

// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to eachother in the array should be on the same team.
      teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]
var teams = function (teammates) {
  var team1 = [];
  var team2 = [];
  for (var i = 0; i < teammates.length; i++){
    if (i % 2 == 0) {
        team1.push(teammates[i]);
    } else if (i % 2 == 1) {
        team2.push(teammates[i]);
    }
  }
  console.log("Team 1: " + team1)
  console.log("Team 2: " + team2)
}
teams(teammates);

// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
var quarter = function (number) {
  number = number / 4;
  console.log(number);
}
quarter(1);

// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.
var area = function (p1, p2) {
  console.log(p1 * p2);
}

var perimeter = function (p1, p2) {
  console.log((p1 * 2) + (p2 * 2));
}

area(3,4);
perimeter(3,4);

// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.
var sleepings = function (hours) {
  if (hours < 8) {
    console.log("You should get some more rest!")
  }
  else {
    console.log("You got atleast 8 hours of sleep!")
  }
}
sleepings(7.5);

// 8. Prompt a user to enter a three digit number. Write a function that adds the numbers together.
//    HINT: You may need to google how to turn a string into an integer.
//          Note: Strings can be treated as arrays too.

// var addNumbers = function (threeDigitNumber) {
//   var threeDigitNumber = prompt("Enter a three digit number:");
//   var digits = parseInt(threeDigitNumber, 10);
//   var array = (""+digits).split("");
//   var sum = array.reduce((prev, curr) => prev*1 + curr*1 );
//   console.log(sum);
// }
// addNumbers();

// 9. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Googling the toFixed method will help you with the format.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
var piggyBank = function (quarters, dimes, nickels, pennies) {
  var quarters = (.25 * quarters);
  var dimes = (.10 * dimes);
  var nickels = (.05 * nickels);
  var pennies = (.01 * pennies);
  var totalInBank = (quarters + dimes + nickels + pennies);
  console.log(totalInBank);
}
piggyBank(25, 10, 5, 1);
// 10. Develop a function that determines a person's age by prompting them for their birth year.

// var ageCalc = function (birthYear) {
//   var age = 2016 - birthYear;
//   console.log("You are either this old or turning " + age + " this year.");
// }
// ageCalc(prompt("What is your birth year?"));

// 11. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.

// var cleanPhoneNumber = function (phoneNumber) {
//   if ((phoneNumber.length != 10) && (phoneNumber.length != 11)) {
//     console.log("You have input an invalid phone number for the opperation.");
//   }
//     else if (phoneNumber.length = 10){
//       console.log(phoneNumber);
//     }
//     else if ((phoneNumber.length = 11) && (phoneNumber.charAt(0) == 1)){
//       console.log(phoneNumber.trim(0));
//     }
//     else {
//       console.log("You have input an invalid phone number for the opperation.");
//     }
//
// }
// cleanPhoneNumber(prompt());
// works with prompt, but not when I just put the number directly in the function.

// 12. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       // arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]

var isThisANumber = function () {
  var arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"];
  var outputArray = [];
  for (var i = 0; i < arrayOfAllTheThings.length; i++){
    if (isNaN(arrayOfAllTheThings[i]) === true) {
      outputArray[i] = "Not A Number";
    }
      else {
        outputArray[i] = "Number";
    }
  }
  console.log(outputArray);
}

isThisANumber();


// 13. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     To get the random number rolled by each die, use Math.random and Math.floor.

var rollTheDice = function () {
  var die1 = Math.random();
  var die2 = Math.random();

  if ((die1.toFixed(2) >= 0) && (die1.toFixed(2) <= 0.16)) {
      var die1 = 1;
    }  else if ((die1.toFixed(2) >= 0.17) && (die1.toFixed(2) <= 0.33)) {
      var die1 = 2;
    }  else if ((die1.toFixed(2) >= 0.34) && (die1.toFixed(2) <= 0.5)) {
      var die1 = 3;
    }  else if ((die1.toFixed(2) >= 0.51) && (die1.toFixed(2) <= 0.66)) {
      var die1 = 4;
    }  else if ((die1.toFixed(2) >= 0.67) && (die1.toFixed(2) <= 0.83)) {
      var die1 = 5;
    }  else if ((die1.toFixed(2) >= 0.84) && (die1.toFixed(2) <= 1)) {
      var die1 = 6;
    }

  if ((die2.toFixed(2) >= 0) && (die2.toFixed(2) <= 0.16)) {
      var die2 = 1;
    }  else if ((die2.toFixed(2) >= 0.17) && (die2.toFixed(2) <= 0.33)) {
      var die2 = 2;
    }  else if ((die2.toFixed(2) >= 0.34) && (die2.toFixed(2) <= 0.5)) {
      var die2 = 3;
    }  else if ((die2.toFixed(2) >= 0.51) && (die2.toFixed(2) <= 0.66)) {
      var die2 = 4;
    }  else if ((die2.toFixed(2) >= 0.67) && (die2.toFixed(2) <= 0.83)) {
      var die2 = 5;
    }  else if ((die2.toFixed(2) >= 0.84) && (die2.toFixed(2) <= 1)) {
      var die2 = 6;
    }

  var rollValue = (die1 + die2);
  return rollValue;
}

// console.log(rollTheDice())

// 14. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.

var monopolyBoardRolls = function () {
  var totalRolls = 0;
  var i = 0;

  do {
    i += rollTheDice();
    totalRolls += 1;
    console.log(i);
  } while (i < 40);
  return totalRolls;
}
console.log("Total Number of Rolls: " + monopolyBoardRolls());


// Extra Challenge:
// 15. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is.

var leapYear = function(year) {
  if (((year % 4 == 0) && (year % 100 != 0)) || year % 400 == 0) {
    return year + " is a leap year.";
  }
  else {
    return year + " is not a leap year.";
  }
}
console.log(leapYear(2015));
