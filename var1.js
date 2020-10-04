//1st class

var myName ="tuhin";
console.log(myName);

var myHobby="singing";
console.log("my hobby is",myHobby);

var a=12,b=13,c=14,d=15;
console.log(a,b,c,d);

//2nd class string number boolean

var word="earth";
var number=3.1416;
var earthIsRound=true;
console.log(" the results are",word,number,earthIsRound);

//cost of egg calculator

var eggPrice=5;
var numberOfEggs=12;
var totalCostOfEggs=eggPrice*numberOfEggs;

console.log("Total cost of eggs is",totalCostOfEggs,"taka");

//area of a circle calculator

var radius=7;
const pi =3.1416
var areaOfCircle=pi*(radius*radius);

console.log("Area of circle is",areaOfCircle, ("sq inch"));

//usd to bdt calculator

var usdToBdt=83.5;
var bdt=5000;
var usd=bdt/usdToBdt;

console.log("$",usd);

//aasignment operator

var x=1;
x++
console.log(x)

//condition

var n=7

if(n<10){
	console.log(n);
	console.log("this number",n,"is smaller than 10");
}

else if (n<20) {
	console.log("this number",n,"is smaller than 10");
}

else{
	console.log("this number",n,"is greater than 10");
}

var personOne="jamal";
var personTwo="kamal";
var areTheyBrother=true;

if("jamal"==personOne&&"kamal"==personTwo&& areTheyBrother){
	console.log("they are brother");
} else {
	console.log("they are not brother");
}

//loop//

//while//
var i=0;
while(i<10){
	console.log(i);
	i+=3;
}

var i=0;

while(true){
	console.log(i);

	if(10== i){
		break;
	}
	i++;
}

//do-while//

var i=0;

do{
	console.log(i);
	i++;
}while(i<10)

//for//

var i;

for (i=0;i<=10;i+=2){
	console.log(i);
}

//factorial//
factorial=1;
for (var i=1;i<=10;i++){
	factorial *=i;
	console.log("Factorial of",i,"is",factorial); 
}

//series//
var series="";
var n;
for(var i=1;i<10;i++){
	n=i*2;
	series = series+n+"";
}
console.log(series);

