const {argv} = require('node:process')

if (argv[2]){
    argv.forEach(arg => {
        console.log(arg)
    })
}else{
    console.log("No argument")
}