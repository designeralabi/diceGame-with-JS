// select the h1 tag and store in heading variable
const heading = document.querySelector('h1');
// generate a random number within range 0 - 6
const random = Math.ceil(Math.random() * 6);
// select the dice from dice folder and concantenate with the random number generated to .png string
const dice = 'dice/dice' + random + '.png';

// print the dice result to the console 
// console.log(dice)

// select all the first image
const image = document.querySelectorAll('img')[0];

// set the first image src to the variable dice value
image.setAttribute('src', dice);

// generate a random number & round to upper number
const random2 = Math.ceil(Math.random()*6);

const dice2 = 'dice/dice' + random2 + '.png';
// select all the second image
const image2 = document.querySelectorAll('img')[1];
// set the second image src to the variable dice value
image2.setAttribute('src', dice2);


// this fires when the player1 value is greater than player2
if (dice > dice2){
    console.log('Player1 Wwwwins');
    heading.textContent = 'Player1 Wins';
    heading.style.color = 'aquamarine';
}

// this fires when the player2 value is greater than player1
else if (dice2 > dice ){
    console.log('Player 2wins');
    heading.textContent = 'Player2 Wins';
    heading.style.color = 'greenyellow';
}
// hence if they are not equal then prints draw
else {
    console.log('You Draw');
    heading.textContent = 'Your Draw';
    heading.style.color = "yellow";
}