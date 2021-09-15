const args = process.argv.slice(2)

function randomRolls(numberofRolls) {
    let listOfRolls = [];
    for(let i = 0; i < numberofRolls; i++) {
     let num = Math.floor(Math.random() * 6);
     listOfRolls.push(num)
    }
    console.log(`rolled ${args}  dice: ${listOfRolls.join(' ')}`)
}



randomRolls(args);





//how to take the number and pass it through the function?