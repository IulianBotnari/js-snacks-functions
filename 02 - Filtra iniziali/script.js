/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.

function checkCharInArray(array, char) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        let string = array[i].slice("");

        let firstChar = string[0]

        if (firstChar === char) {
            newArr.push(string)
        }
        

        
    }

    return newArr
}




// Invoca la funzione qui e stampa il risultato in console

console.log(checkCharInArray(names, "A"));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]