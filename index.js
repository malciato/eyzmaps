const fs = require('fs')
const p = require('path')
const maps = {}


var files = fs.readdirSync(p.join(__dirname,'maps')).map(f => {
  try {
      return fs.readFileSync(p.join(dir,f), 'utf8')
        .split('\n')
        // .filter(v => v.indexOf('##')!=0 && v.indexOf(' completed')>0 && regExp.exec(v))
        .map(v=> p.dirname(v))
  } catch(e) {
      console.log('Error:', e.stack);
  }
})

maps.files = files

exports = maps
// exports.printMsg = function() {
//   console.log("This is a message from the demo package", files);
// }
