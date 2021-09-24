const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);

const names = ["name1", "name2", "name3"]
const eventName = "surprise"
function writeCards(names, eventName) {
    let newArr = [];
    
    for (let i = 0; i < names.length; i++) {
        let thankYouNote = (`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
        newArr.push(thankYouNote);
    }
    return newArr;
}
function countDown(i) {
    
    while (i >= 0) {
        console.log(i);
        i--;
    }
}