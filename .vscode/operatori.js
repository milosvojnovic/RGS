// Spread operator
function f(...niz){

}
f(4);
f(5,6,7);
function Suma(...brojevi){
var Suma=0;
brojevi.forEach(
    function(value){
        suma+= value;
    }
)
return suma;
}
