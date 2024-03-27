#! /usr/bin/env node 

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10  );

const answers = await inquirer.prompt([
    { message : "Hello Are You Ready To Play This Game ! Press Enter", 
     type : "string" , name : "game"},
    {
        name : "userGuestNumber",
        type : "number",
        message : "Please guess a number :"
    },
    
]);

// Apply Condition

if(answers.userGuestNumber === randomNumber){
    console.log("Congratulations! You Guest The Correct Number ");
}
else{
    console.log("Sorry Your Guest Number is Not Correct..");
}