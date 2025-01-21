import { franc } from "franc";
import langs from "langs";
import colors from "colors";

const text = process.argv.slice(2).join(" ");
let langCode = franc(text);

if (langCode === 'und') {
    console.log('sorry cant figure out'.red);
} else {
    let language = langs.where('3', langCode);
    if (language) {
        console.log('language is: '.yellow +language.name.rainbow);
    } else {
        console.log('language is not in detabase'.red);
    }
}
