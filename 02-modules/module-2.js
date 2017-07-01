console.log('module 2')
console.log(process.argv)

function getName(){
    return process.argv[2]
}

module.exports = getName