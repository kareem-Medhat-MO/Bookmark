const quotes = [
    {
        qoute: `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
        writer: `— Marilyn Monroe`
    }, {
        qoute: `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        writer: `— Albert Einstein`
    }, {
        qoute: `“A room without books is like a body without a soul.”`,
        writer: `— Marcus Tullius Cicero`
    }, {
        qoute: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
        writer: `— Bernard M. Baruch`
    }, {
        qoute: `““You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.”`,
        writer: `— William W. Purkey`
    }, {
        qoute: `“You only live once, but if you do it right, once is enough.”`,
        writer: `— Mae West`
    }, {
        qoute: `“If you tell the truth, you don't have to remember anything.”`,
        writer: `— Mark Twain`
    }, {
        qoute: `
    “I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”`,
        writer: `— Maya Angelou`
    }, {
        qoute: `“A friend is someone who knows all about you and still loves you.”`,
        writer: `— Elbert Hubbard`
    }, {
        qoute: `“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”`,
        writer: `— Marcus Tullius Cicero`
    }, {
        qoute: `“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
        writer: `— Mahatma Gandhi`
    },]

let btn = document.querySelector("#qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");
let newGeneratNumber;
let lastGeneratNumber;
let alreadyDisplayed = [];
btn.addEventListener("click", function () {
    if (alreadyDisplayed.length == quotes.length) 
        { alreadyDisplayed=[] }
    do {
        newGeneratNumber = Math.floor(Math.random() * quotes.length);
    } while (lastGeneratNumber == newGeneratNumber || alreadyDisplayed.includes(newGeneratNumber));
    lastGeneratNumber = newGeneratNumber;
    alreadyDisplayed.push(newGeneratNumber);
    quote.innerHTML = quotes[newGeneratNumber].qoute;
    writer.innerHTML = quotes[newGeneratNumber].writer;
    console.log(lastGeneratNumber);
})