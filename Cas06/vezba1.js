    const array=[4,5,0,3,6,7]
    function moj_reduser(prosli,sadasnji){
        return prosli+ sadasnji;
    }
array.reduce(moj_reduser)
25
array.reduce(moj_reduser,-5)
20
const getMax= (a,b)=> Math.max(a,b)
[4,5,6,7].reduce(getMax)
7
[4,5,6,7].reduce(getMax)
7
const funkcija = function(x){return x+4;}
[5,6,7].reduce(getMax)
13
const funkcija = function(x){console.lod (x);return x+4;}
[5,6,7].reduce(funkcija)
15
9
13
const funkcija = function(x,y){console.lod ("X="+x+"Y=");return x-y;}
[5,6,7].reduce(funkcija)
x=5 y=6
x=-1 y=7