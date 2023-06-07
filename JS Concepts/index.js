let name ={
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
name.printFullName.call(name2);