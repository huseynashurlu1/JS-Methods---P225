// var ad = "Vusal Imanov geldi.Vusal Imanov 23 yasi var";
// var x = new String("Vusal");

// console.log(typeof ad)
// console.log(typeof x)

// // var a = 10;
// // var b = "30";
// // console.log(a+" " +b);
// // console.log(null+1)
// // console.log(null+undefined)
// // console.log(null+undefined)

// var new_name = ad.replace(/imanov/i,"Eliyev");
// console.log(ad.toUpperCase());

// let z = "  Code ".trim();
// console.log(ad.lastIndexOf("Vusal"))

// xxxx xxxx xxxx 1234


// let x = 20.5;
// let z = new Number("20");
// console.log(typeof z);

// toPrecision(2) = toFixed()

// toFixed / toExponential / toPrecision / valueOf / toString

// var x = "10";
// Number(x);
// var z = x.toExponential();
// console.log(z);

// // NaN 
// // isNaN

// let cars = ['Niva',"07","Audi","BMW"];
// cars.pop()
// console.log(cars)

// pop / push / shift / unshift

// var front_end = ['html','css','js'];
// front_end[0] = "salam";
// // var front = new Array('html','css','js');
// var back_end = ['c#','sql','server'];
// var full_stack = front_end + back_end;
// // full_stack.sort();
// // full_stack.reverse();
// console.log(full_stack)


// Function Declaration
// function DarkMode() {
//     document.body.style.backgroundColor = "black";
// }

// function Hello(ad) {
//     alert("Welcome " + ad)
// }

// Hello("Huseyn");
// DarkMode();


// // Function Expressions

// // let DarkMode = function() {
// //     document.body.style.backgroundColor = "black";
// // }

// function Hesabla(x,y) {
//     console.log(x*y);
// }

// let Calculate = function(x,y) {
//     console.log(x+y)
// }

// Hesabla(20,10);
// Calculate(20,10);

function Change() {
    document.getElementById('first').style.width = "100%";
}

let Resize = function() {
    document.getElementById('first').style.width = "0%";
}


let Resize1 = () => { 
    document.getElementById('first').style.width = "0%";
}

function Salam(firstName) {
    console.log("Salam " +firstName)
}

const Salam1 = firstName => console.log('salam ' + firstName);
    

// function Calc(x) {
//     return x*2;
// }

// const Calc = x => x*2;

// alert(Calc(10));

// let Person = {
//     ad: "Onur",
//     yas: 20,
//     tevellud() {
//         return new Date().getFullYear() - this.yas
//     },
//     tevellud: (t) => {
//         return new Date().getFullYear - Number(t);
//     }
// }

// console.log(Person.tevellud(Person.yas).toString());

// let btn = document.getElementById('btn1');

// btn.onclick = () => {

// }

// map , filter

var ages = [10,20,30,40,50];

var older = ages.reduce((x,y) => x+y);


 function Calc(x) {
     return x*2;
 }

 Calc();

 (function(){

 })();

 function Mode(){
     let body = document.body;
     let button = document.getElementById('btn');
     if(body.style.backgroundColor === "black") {
        body.style.backgroundColor = "white"
        body.style.color = "black"
        button.textContent = 'Dark Mode'
     }
     else{
        body.style.backgroundColor = "black"
        body.style.color = "white"
        button.textContent = 'Light Mode'
        
     }
 }



// for / forEach / while / for in /for of / do while

// var i;
// for(i=0;i<100;i+=5) {
  
//     if(i===10) {
//         console.log("Catdi");
//         continue;
//     }
//     console.log(i);
// }

// var students = ['Vusal','Murad','Ishaq','Onur','Maqsud'];

// for(var i=0;i<students.length;i++) {
//     document.write("Firstname: " + students[i] + "<br>")
// }

// for(let st of students) { 
//     console.log(st);
// }


let i;
i=0;
while(i<100) {
    i++;
    console.log(i);
}