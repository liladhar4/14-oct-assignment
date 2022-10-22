//Program to demonstrate different ways of creating objects.
//1.Creating object with a constructor:
function vehicle(name,maker,engine){
	this.name = name;
	this.maker = maker;
	this.engine = engine;
}

let car = new vehicle('GT','BMW','1998cc');

console.log(car.name);
console.log(car.maker);
console.log(car['engine']);

//2.creating js objects with object literal
let car1 = {
	name : 'GT',
	maker : 'BMW',
	engine : '1998cc'
};

console.log(car1.name); 
console.log(car1['maker']); 

//3.Creating object with Object.create() method:
const coder = {
	isStudying : false,
	printIntroduction : function(){
		console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
	}
};
const me = Object.create(coder);
me.name = 'Mukul';
me.isStudying = true;
me.printIntroduction();
