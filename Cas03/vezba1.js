function f (){
    return "f"+ 4;
}
f();
function f (){
    return "f "+ 4;
}
f();
(function x (){
    console.log("X");
})();

var a = f;
var rez = a();
console.log(rez());
 var objekat ={
     a : function(){ return "a";},
     b : function(b){ return b;},
     a : function(c){ return c*c;}
 }
