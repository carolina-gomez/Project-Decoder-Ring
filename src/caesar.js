// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope


  function caesar(input, shift, encode = true) {
    // your solution code here
    console.log(input);

    
    //SHOULD RETURN FALSE IF SHIFT IS TOO MUCH OR 0
    if (shift === 0 || shift < -25 || shift > 25){
      return false
    }
    //SHOULD IGNORE CAPITAL LETTERS
    input = input.toLowerCase()
    //store number values
    charcode = []
    output = ""

     //check encode to know if decoding or encoding
    if (encode === true){

        //loop through input
        for (let i = 0; i < input.length; i++){
             let number = input.charCodeAt(i)

             //change each character by shift or unshift
             let shiftedNumber = number + shift

             if (number < 97 || number > 122){
                charcode.push(number)
             } else if (shiftedNumber < 97){
                shiftedNumber = shiftedNumber + 26
                charcode.push(shiftedNumber)
             } else if (shiftedNumber > 122) {
                 shiftedNumber = shiftedNumber - 26
                 charcode.push(shiftedNumber)
             } else {
                charcode.push(shiftedNumber)
             }
        }

        for (let i = 0; i < charcode.length; i++){
            output += String.fromCharCode(charcode[i])
        }

        //return or console log result
        console.log(output)
        return output

    } else {
        //loop through input
        for (let i = 0; i < input.length; i++){
            let number = input.charCodeAt(i)
            //change each character by shift or unshift
            let shiftedNumber = number - shift

            if (number < 97 || number > 122){
               charcode.push(number)
            } else if (shiftedNumber < 97){
               shiftedNumber = shiftedNumber + 26
               charcode.push(shiftedNumber)
            } else if (shiftedNumber > 122) {
                shiftedNumber = shiftedNumber - 26
                charcode.push(shiftedNumber)
            } else {
               charcode.push(shiftedNumber)
            }
       }

       for (let i = 0; i < charcode.length; i++){
           output += String.fromCharCode(charcode[i])
       }

       //return or console log result
       console.log(output)
       return output
    }
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };