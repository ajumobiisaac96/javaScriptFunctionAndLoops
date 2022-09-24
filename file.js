let animals = ['cat','dog','antelope','fish']
let fruits = ['orange','mango','carrots']
let names = ['john', 'angela', 'doe']

let combinedArray = ['john', 'carrots', 'doe','orange', 'angela','mango', 'cat', 'dog', 'antelope', 'fish']

function myFunction(){
    for (let i = 0; i < 1; i++){
        for (let j = 0; j < combinedArray.length; j++){
            if (animals[i] === combinedArray[j]){
                console.log("ANIMALS =" + animals)
            }
            else{
                console.log("ANIMALS : No data found")
            }
        }
    }
    for (let i = 0; i < 1; i++){
        for (let j = 0; j < combinedArray.length; j++){
            if (names[i] === combinedArray[j]){
                console.log("NAMES =" + names)
            }
            else{
                console.log("ANIMALS : No data found")
            }
        }
    }
    for (let i = 0; i < 1; i++){
        for (let j = 0; j < combinedArray.length; j++){
            if (fruits[i] === combinedArray[j]){
                console.log("FRUITS =" + fruits)
            }
            else{
                console.log("ANIMALS : No data found")
            }
        }
    }
}

console.log(myFunction())
