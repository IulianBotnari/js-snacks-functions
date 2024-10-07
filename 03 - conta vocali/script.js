/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

function findVocal(params) {

        let arrayChar = params.split("")
        
        let contatore = 0
        
        let vocalArray = ["a", "e", "i", "o", "u"]

        for (let i = 0; i < arrayChar.length; i++){

            let char = arrayChar[i]            

            if (vocalArray.includes(char)) {
                contatore++
            }



        }

        return contatore
        
}

let contaLeVocali = findVocal(word)

console.log(contaLeVocali);


// Dichiara la funzione qui.


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'javascript': 3 (a, a, i)