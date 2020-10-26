const fs = require('fs')

function writeDataToFile(filename, content){
    fs.writeFileSync(filename, JSON.stringify(conetnt), 'utf8', (err) => {
        if(err){
            console.log(err)
        }
    })
}


module.exports = {
    writeDataToFile
}