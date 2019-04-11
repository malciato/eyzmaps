const fs = require('fs')
const p = require('path')
const maps = {}
const folder = p.join(__dirname,'maps')

var files = fs.readdirSync(folder).map(f => {
  try {
      maps[p.basename(f, p.extname(f))] = require(`${p.join(folder,f)}`)
  } catch(e) {
      console.log('Error:', e.stack);
  }
})

module.exports = maps
