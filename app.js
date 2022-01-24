/*
function cambiaOrden(frase) {
    let fraseLimpia = frase.replaceAll(" ", "").toLowerCase();
    let texto = "";
    for (let letra of fraseLimpia) {
        texto = letra + texto;
    }
    console.log("Frase limpia: " + fraseLimpia);
    console.log("Nueva frase: " + texto);
    if (fraseLimpia == texto) {
        console.log("drome!");
    } else {
        console.log("No es drome");
    }
}

cambiaOrden("Anita lava la tina");
*/

function anaGrama(frase1, frase2) {
    arr1 = [];
    arr2 = [];
    arr1 = frase1.replaceAll(/ |,/g, "").toLowerCase().split("").sort();
    arr2 = frase2.replaceAll(/ |,/g, "").toLowerCase().split("").sort();
    /*
    = frase1Nueva
    frase2Nueva = frase2.replaceAll(" ", "").toLowerCase();
    arr2 = frase2Nueva.split("").sort();
    */
    console.log("Array 1: " + arr1);
    console.log("Array 2: " + arr2);
    longitud = arr1.length;
    tok = 0;
    if (arr2.length == longitud) {
        for (i = 0; i < longitud; i++) {
            if (arr1[i] == arr2[i]) { tok += 1; }
        }
        //console.log("Longitud: " + longitud + " , Tok: " + tok);
    }
    if (tok == longitud) { console.log("Es anagrama!"); } else { console.log("No es anagrama"); }
}

anaGrama("Anagrama", "amar, gana");

/*
function recibeFrases(primeraFrase, segundaFrase) {
    primeraFrase = limpiarFrase(primeraFrase);
    segundaFrase = limpiarFrase(segundaFrase);
    if (primeraFrase.length == segundaFrase.length) {
        nuevaSegunda = [...segundaFrase].reverse().join("");
        if (primeraFrase == nuevaSegunda) {
            console.log("Si es palindrome");
        } else {
            console.log("No es palindrome");
        }
    } else {
        console.log(false);
    }
}

recibeFrases("abba", "abba");
*/