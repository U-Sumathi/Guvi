console.log("wecome");
//window events
/* alert("if u click ok ...then loading  gone"); */


/* let namy=prompt("enter:");  *//*  if you enter name loading gone */
 /*console.log(namy);*/  /*  see ur enter data in console */


let names=confirm("click ok"); /*  if you click ok ..then loading gone */
 console.log(names);        /*  o/p==>true or false */


//null,undefined
 let z;
 console.log(z);
console.log(typeof(z));

let c=null;
console.log(c);
console.log(typeof(c));

//object
let area={
    areaname : "kpm"
}
console.log(typeof(area))    //o/p=>datatype is object


//with function but with no return
function arithmetic(a,b){
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
}
arithmetic(8,4)
arithmetic(200,300)

//func with return
function addy(e,d){
    return e-d;

}
console.log(addy(200,50));
//func with more 
function addys(f,g){
return (f+g) + "\n" + (f-g) + "\n" + (f*g) + "\n" + (f/g) + "\n" + (f%g) ;
   
                              //func return only one thing
}
console.log(addys(8,4));   

// $use 
function addyss(h,i){
    console.log(`${i} give`)
    console.log(`${h} sumo`)
    console.log(h +" " + i);
    
}
addyss("hi",700)

//array with return...return even numbers

var result=[];
function even(arr){
    for(var i=0;i<=arr.length-1;i=i+1){
       if( arr[i]%2==0){
        result.push(arr[i])
       }
    }

return result
}
console.log(even([1,2,3,4,5,6,7,8,9,10]));

//IIFE
var out=[];
(function (gets){
    for(i=0;i<=gets.length-1;i++){
        if(gets[i]%2==0){
            out.push(gets[i])
        }
    }
    console.log(out)

})([11,12,13,14,15,16,17,18,19,20])

//median of two sorted array without function
var j= [11,13,12,14]
var k=[15,17,16,18,19,20]
//var l=j.concat(k);
//var l=[...j,...k];
var l=j.concat(k).sort((a,b) => a-b);
console.log(l);
if(l.length%2!=0){     //odd
    var m=Math.floor(l.length/2);
console.log(l[m]);
}
else             //even
{
  var n=l.length/2;
  var o=n-1;
var p=(l[n]+l[o]) / 2;
  
    console.log(p);
}

//median of two sorted array with function
var q = (arr,arr1) => {
    var r =arr.concat(arr1);
    if (r.length%2!=0){
        var s=Math.floor(r.length/2);
        return r[s];
        
    }
    else{
      var  t=r.length/2;
         var u=t-1;
         var s=(r[t]+r[u]) / 2;
         return s;

    }
        }
console.log(q([1,2,3,4],[5,6,7,8]));

//rotate and array by k times==>without function
var v=[1,2,3,4,5];
for(i=1;i<=5;i++){

    var w= v.shift();
    v.push(w);
 console.log(v);
}
//rotate and array by k times==>with function
var x = (arr) =>{
    for(i=1;i<=5;i++){
        var y=arr.shift();  //remove at begin
        arr.push(y); //add at end
        console.log(arr);

    }
}
x([11,12,13,14,15]);

//print odd numbers
var odd=[];
var b= (arr) =>{
    for(i=0;i<=arr.length-1;i++){
        if(arr[i]%2!=0){
        odd.push(arr[i]);
        }

    }
return odd;
}
console.log(b([1,2,3,4,5,6,7,8,9,10]));


//do while
var a=0;
do{
    
    a += 1;
    console.log(a)

}while(a<5);       

//while with no infinity
var a=0;
var b=0;
while(a<3){
    a++;

b += a;
console.log(b);  // 1 3 6
}
console.log(b); //6


