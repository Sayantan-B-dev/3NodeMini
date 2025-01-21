const colors = require('colors');
const figlet = require("figlet");

const text = process.argv.slice(2);

figlet(text, function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data.rainbow);
});