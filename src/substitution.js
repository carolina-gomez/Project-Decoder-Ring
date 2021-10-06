// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// When building the function, keep the following constraints and rules in mind:

// The input could include spaces and letters as well as special characters such as #, $, *, etc.
// Spaces should be maintained throughout.
// Capital letters can be ignored.
// The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
// All the characters in the alphabet parameter must be unique. Otherwise, it should return false.

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    //ERROR HANDLING
        //should ignore cap letters
        input = input.toLowerCase()
        //needs alphabet param and has to be 26 chars otherwise ret false
          if (!alphabet || alphabet.length !== 26){
            return false
          }
        //uique chars in alphabet param
          for (let i = 0; i < alphabet.length; i++){
            let index = 0
            let letter = alphabet[index]

            if (letter == alphabet[i]){
              return false
            } else {
              index ++
            }
          }

          //normal abc comparison
          const usualABC = "abcdefghijklmnopqrstuvwxyz"
          let output = ""
          
          //ENCODING
          if (encode == true){
            for(let i = 0; i < input.length; i++){
              for (let j = 0; j < usualABC.length; j++){
                if (input[i] == usualABC[j]){
                  output += alphabet[j]
                  console.log(output)
                } else {
                  output += input[i]
                  console.log(output)
                }
              }
            }
          } else {
          // DECODING

            for(let i = 0; i < input.length; i++){
              for (let j = 0; j < alphabet.length; j++){
                if (input[i] == alphabet[j]){
                  output += usualABC[j]
                } else {
                  output += input[i]
                }
              }
            }
          }
          
          return output
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
