// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
var lista = []

function generarAletorios(){
  
    function aletorio(min, max) { 
            return Math.floor(Math.random() * (max - min + 1) + min)
    }

        for (let i = 0; i <= 20; i++) {
        // obtengo el aleatorio entre 1 y 1000
             lista.push(aletorio(1, 1000));
        
        
    }
    console.log(lista)
}

function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
                
            }
         }
         if (min != i) {
            
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
     
    }
       console.log(inputArr);

}


function Test(){
    console.log("1")
}

generarAletorios();
selectionSort(lista);