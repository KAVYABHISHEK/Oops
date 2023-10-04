'use strict';

// const person = {
//   name:{
//   firstName:'Ross',
//   lastName:'Galler'
// },
//   age:32,
//   bio: function(){
//     console.log(`${this.name[0]} is ${this.age} years old.`)
//   },
//   introduce: function(){
//     console.log(`Hi i'm ${this.name[0]}`)
//   },
//   };
// console.log(person.name);
// person.introduce();
// console.log(person.name.firstName);
// console.log(person["age"])
// ;
let bandInfo ;

const band = {
  name : "Musical-Nights",
  nationality : "India",
  formed : 2020,
  genre :"EDM",
  members : 5,
  albums : [["perfect", 2022],["shape of you", 2021]],
  introduction : function(){
       console.log(`Hello all and welcome to ${this.name}`)
  }
  }
  
  bandInfo = `Today here we are having ${band.name} band, its formed in ${band.formed}
  it is well known for ${band.albums}.`
  console.log(bandInfo);
  band.introduction();
  console.log(band["formed"]);

  const cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log("Hello , said  ");
    }
  }


  //////////////////////    ES6 Classes    /////////////////////////////////
      
/// syntax:

  class className{
    constructor(){

    }
    add_Methods_Here(){

    }
  } 
/*
   for creating a class use class and inside the class should add 
   constructor method and after completing the constructor method,
  we can add methods outside the constructor scope
  these methods will be stored in prototypes not in objects
*/

// creating a class

class Dresses{
  constructor (Brand,price,discountPrice){
    this.Brand = Brand;
    this.price = price;
    this.discountPrice = discountPrice;
  }
  Moneysaved(){
    console.log(this.price-this.discountPrice);
  }
}

const Dresses1 = new Dresses("Zudio",299,199);
console.log(Dresses1);
Dresses1.Moneysaved()

Dresses.prototype.greet = function(){
  console.log(`Thankyou for purchasing ${this.Brand}.`);
}
Dresses1.greet();


