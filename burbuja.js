function Burbuja() {
    var lista = []
    
    function aletorio(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    for (let i = 0; i <= 20; i++) {
    // obtengo el aleatorio entre 1 y 1000
        lista.push(aletorio(1, 1000));
    }
    
    
    var n, i, k, aux;
    n = lista.length;
    console.log(lista); // Mostramos, por consola, la lista desordenada
    // Algoritmo de burbuja
    for (k = 1; k < n; k++) {
        for (i = 0; i < (n - k); i++) {
            if (lista[i] > lista[i + 1]) {
                aux = lista[i];
                lista[i] = lista[i + 1];
                lista[i + 1] = aux;
            }
        }
    }

    console.log(lista); // Mostramos, por consola, la lista ya ordenada
}


Burbuja();