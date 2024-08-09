// const {generateRandomNUmber, celciusToFahrenheit} = require('./utils');
// console.log(`Random Number: ${generateRandomNUmber()}`)
// console.log(`Celcius to fahrenheit: ${celciusToFahrenheit(0)}`)

import getPosts, {getPostsLength} from "./postController.js";

console.log(getPosts());
console.log(getPostsLength());