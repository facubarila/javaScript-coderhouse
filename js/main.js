let tintaBic = 100;
let tintaFabercastell = 100;
const letrasXrenglon = 20;

while((tintaBic > 0) && (tintaFabercastell > 0)){ 
    let tintaXletraBic = Number(prompt("renglones con la bic"))
    let tintaXletraFabercastell = Number(prompt("renglones con la faber castell"))

    if (tintaXletraBic < tintaXletraFabercastell){
        tintaBic = tintaBic - (tintaXletraBic * letrasXrenglon);
        console.log("La birome bic puede escribir mas renglones y todavia te queda " + tintaBic + " de tinta");
    } else {
        tintaFabercastell = tintaFabercastell - (tintaXletraFabercastell * letrasXrenglon)
        console.log("La birome faber castell puede escribir mas renglones y todavia te queda " + tintaFabercastell + " de tinta")
    }
    function renglonesEscritos(renglonesbic, renglonesfabercastell){
    resultado = renglonesbic + renglonesfabercastell
    }
    function mostrar(mensaje){
        console.log(mensaje)
    }

    renglonesEscritos(tintaXletraBic, tintaXletraFabercastell);
    mostrar(resultado)
}


