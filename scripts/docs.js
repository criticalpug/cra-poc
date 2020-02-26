const fs = require("fs-extra");

const source = 'build'
const destination = 'docs'

fs.removeSync(destination)
fs.copySync(source, destination)