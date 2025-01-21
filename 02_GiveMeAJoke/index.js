const Jokes = require("give-me-a-joke");
const colors = require("colors");
console.log("10 jokes:\n".red)
for (let i = 1; i < 11;i++) {
    Jokes.getRandomDadJoke(function (joke, err) {
        if (err) {
        console.error("Error fetching Dad joke:", err.message.red);
        } else {
            console.log(`>>> ${joke.blue}`);
            console.log('************************');
        }
    });
}

