let textString = "kedar";
let binaryString =  new Uint8Array([107])

const TextToBinary = new TextEncoder().encode(textString);
// const binaryTotext = new TextDecoder().decode(binaryString)


console.log(textString)
console.log(TextToBinary)
// console.log(binaryTotext)


//string to hexadecimal converter 
let hexaDecimal = '';
for(let i = 0 ; i < TextToBinary.length; i++){
    const toAdd = TextToBinary[i].toString(16);
    console.log(toAdd , " lenght : " , toAdd.length) 
    

    hexaDecimal = hexaDecimal + `${toAdd}`
    
    
}
console.log(hexaDecimal);


