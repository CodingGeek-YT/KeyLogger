console.log("Deleting all of the keylog files in 5 seconds!")
setTimeout(function wait(){
  console.log("Deleting...")
  files = fs.readdirSync('./inputs')
  if(files.length <= 0) return console.log("There is no files to delete!")
  files.forEach(function (file) {
    fs.unlink(`./inputs/${file}`, function (err) {
      if (err) throw err;
    });
})
}, 5000)
var fs = require('fs');