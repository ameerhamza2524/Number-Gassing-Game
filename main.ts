#! /usr/bin/env node
// import inquirer from 'inquirer';


// const randumNumber = Math.floor(Math.random()*10 +1)


// console.log('Welcome to Number Gassing Game')

// const answers = await inquirer.prompt([
//     {
//         name: 'GuessedNumber ',
//         type: 'number',
//         message: 'Gusse a Number'
//     }
// ]);

// if(answers.GuessedNumber === randumNumber){
//     console.log('Mubarak ho ap ne sahi Jawab diya he')

// }else{
//     console.log('Ap ne number sahi nahi btaya Plesse Dobara koshis karen')
// }
import inquirer from 'inquirer';

async function main() {
    const randumNumber = Math.floor(Math.random() * 10 + 1);

    console.log('Welcome to Number Guessing Game');

    const answers = await inquirer.prompt([
        {
            name: 'guessedNumber',
            type: 'number',
            message: 'Guess a Number'
        }
    ]);

    const guessedNumber = answers.guessedNumber;

    if (guessedNumber === randumNumber) {
        console.log('Congratulations! You guessed the correct number.');
    } else {
        console.log(`Sorry, the correct number was ${randumNumber}. Please try again.`);
    }
}

// Call the main function
main();

