// generate a random number
// link the random number to a string
// select the image
const heading = document.querySelector('h1');

const random = Math.ceil(Math.random() * 6);

const dice = 'dice/dice' + random + '.png';

// console.log(dice)

const image = document.querySelectorAll('img')[0];

image.setAttribute('src', dice);

// const image2 = document.querySelectorAll('img')[1];

// image2.setAttribute('src', dice)

const random2 = Math.ceil(Math.random()*6);

const dice2 = 'dice/dice' + random2 + '.png';

const image2 = document.querySelectorAll('img')[1];

image2.setAttribute('src', dice2);


// this fires when the player1 value is greater than player2
if (dice > dice2){
    console.log('Player1 Wwwwins')
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