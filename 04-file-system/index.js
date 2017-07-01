const fs = require('fs')

//please do not do this, if you do this you are going tod lose node
// const fileContent = fs.readFileSync('./students.txt', 'utf8')
// console.log(fileContent)
// console.log('Xurupita\'s Farm')

function printFileContent(error, data) {
    if(error) {
        console.log('File not found!', error)
        return;
    }
    console.log(data)
}

fs.readFile('./students.txt', 'utf8', printFileContent)
console.log('Xurupita\'s Farm')