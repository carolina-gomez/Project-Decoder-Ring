// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
      let cipher = []
      const usualABC = "abcdefghijklmnopqrstuvwxyz"
      let output = ""

    //ERROR HANDLING
     //should ignore cap letters
      input = input.toLowerCase()
    //needs alphabet param and has to be 26 chars otherwise ret false
      if (!alphabet || alphabet.length !== 26){
        return false
      }
    //check for unique chars in alphabet param and add to cipher array
    for (let i = 0; i < alphabet.length; i++){
          if (cipher.includes(alphabet[i])){
            return false
          } else {
            cipher.push(alphabet[i])
          }
      i++
    }

    
     //ENCODING
          if (encode == true){
           
            for(let i = 0; i < input.length; i++){
              if (usualABC.includes(input[i])){
                let alphaIndex = usualABC.indexOf(input[i])
                output += alphabet[alphaIndex]
              } else {
                output += input[i]
              }
            }

            return output 
          } else {
      //DECODING
             for(let i = 0; i < input.length; i++){
              if (alphabet.includes(input[i])){
                let alphaIndex = alphabet.indexOf(input[i])
                output += usualABC[alphaIndex]
              } else {
                output += input[i]
              }
            }
             return output
          }
    
   
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

