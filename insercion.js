// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
var lista = []

function generarAletorios(){
  
    function aletorio(min, max) { 
            return Math.floor(Math.random() * (max - min + 1) + min)
    }

        for (let i = 0; i <= 20; i++) {
        // obtengo el aleatorio entre 2 y 9
             lista.push(aletorio(1, 1000));
        
        
    }
    console.log(lista)
}

let insertionSort = (e) => {
    let length = e.length;
    for (let i = 1; i < length; i++) {
        let x = e[i];
        let j = i - 1;
        while (j >= 0 && e[j] > x) {
            e[j + 1] = e[j];
            j = j - 1;
        }
        e[j + 1] = x;
    }
    console.log(e);
};



generarAletorios();
insertionSort(lista);   