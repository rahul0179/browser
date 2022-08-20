console.log(1)
console.log(22)
console.log(333)
/* setTimeout(() => {
    console.log('i love u ma',)
}, 5000); */
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
console.log(4444)
console.log(55555)
console.log(666666)

for (let i = 0; i < 100; i++) {
    const element = [i];
    console.log(element)

}