/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// console.log(names);


// Dichiara la funzione qui.
function selectName (params) {
    let newArr = []
    for (let i = 0; i < params.length; i++) {    
        let name = params[i].slice("")
        
        let iniziali = name[0]
        
        newArr.push(iniziali)
        
    }

    return newArr
    

    // console.log(newArr);
    
}

let newArr = selectName(names)

console.log(newArr);


// console.log(selectName(names, newArr));



// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]