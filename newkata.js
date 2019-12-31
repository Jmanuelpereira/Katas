//KATAS

function disemvowel(str) {

    const arrLetters = str
    let noVowels = [];
    
        for(i = 0; i <= arrLetters.length; i++){
    
          noVowels = arrLetters.replace(/[aeiouAEIOU]/g,'')
    
       
    
        }//ending for i
    
        return noVowels
    
    }