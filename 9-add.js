const {argv} = require('node:process')

if (argv[2] && argv[3]){
    let num1 = Number(argv[2])
    let num2 = Number(argv[3])
    if (num1 != NaN && num1 > 0 && num2 != NaN && num2 > 0){
        let result = num1 + num2
        console.log(result)
    }else{
        console.log(NaN)
    }
}else{
        console.log(NaN)
    }