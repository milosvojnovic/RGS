//Ispisuje prosledjeni niz brojeva jedan ispod drugog.
var a = [ 3,4,5,6,7,8];
for( i of a )
    console.log(i)
//Od prosledjenjog niza brojeva ispisuje samo parne.
for(i of a){
    if(a%2==0){
        console.log(i)
    }
}
//Racuna sumu prosledjenog niza.
var zbir
for(i of a){
    zbir+=a[i]  
}
console.log(zbir)
//Ispisuje koliko ima brojeva vecih od prvog elementa niza.
var kolbrojeva=0
for(i of a){
    if(a[0]>a[i+1])
        kolbrojeva++
    
}
console.log(kolbrojeva)