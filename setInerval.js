console.log('fist')
/* setInterval(() => {
    console.log('third')
}); */

let secounds = 0;
const timeId = setInterval(() => {
    // secounds++;
    console.log(++secounds)
    if (secounds > 15) {
        clearInterval(timeId)
    }
}, 1000);
console.log('secound')