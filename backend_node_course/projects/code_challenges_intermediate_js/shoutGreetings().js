const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

const shoutGreetings = arr => arr.map(element => element.toUpperCase() + '!');


console.log(shoutGreetings(greetings));
