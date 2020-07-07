const readline = require('readline');
const fs = require('fs')
files = fs.readdirSync("./inputs");
console.log(files.length)
fs.open(`./inputs/input-session${files.length + 1}.txt`, 'w', function (err, file) {
  if (err) throw err;
  console.log(`See the logged keys in ./inputs/input-session${files.length}.txt`);
});
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if(key.ctrl && key.name === "c") {
    process.exit();
  } else {
    console.log(`Key ${str} logged in ./inputs/input-session${files.length}`);
    fs.appendFile(`./inputs/input-session${files.length + 1}.txt`, `${str}`, function (err) {
      if (err) throw err;
    });
  }
});
// Node JS Saving.
function nodejsSave() {
  fs.open(`./saving/NodeJS/nodejs-save-${files.length + 1}`)
}