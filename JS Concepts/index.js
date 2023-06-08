/* let name ={
    firstName : "Vaishnavi",
    lastName : "Palanisamy",
    printFullName : function(){
        console.log(this.firstName+" "+this.lastName);
    }
}
let name2 ={
    firstName : "Vignesh",
    lastName : "Paramasivam",
    printFullName : function(){
        console.log(this.firstName+" "+this.lastName);
    }
}
name.printFullName.call(name2); */


// Function Currying using bind method

/* function multiply(x,y){
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,2);

multiplyByTwo(3); */

// Function Currying using closures

/* let multiply = function(x){
    return function(y){
        console.log(x*y);
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(9); */


//Event Bubbling

document.querySelector("#grandparent")
.addEventListener('click',(e)=>{
    console.log("GrandParent clicked");
},false)
document.querySelector("#parent")
.addEventListener('click',(e)=>{
    console.log("Parent clicked");
    e.stopPropagation();
},false)
document.querySelector("#child")
.addEventListener('click',()=>{
    console.log("Child clicked");
},false)

// Event Throttling
// document.querySelector("#grandparent")
// .addEventListener('click',()=>{
//     console.log("GrandParent clicked");
// },true)
// document.querySelector("#parent")
// .addEventListener('click',()=>{
//     console.log("Parent clicked");
// },true)
// document.querySelector("#child")
// .addEventListener('click',()=>{
//     console.log("Child clicked");
// },true)