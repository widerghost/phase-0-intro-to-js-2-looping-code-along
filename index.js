function writeCards(array, event) {
    const newArray = [];
    for (let i=0; i<3; i++){
        newArray.push (`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
        return newArray

}

function countDown() {
let count = 10
while (count >= 0) {
    console.log(count--)

}

}