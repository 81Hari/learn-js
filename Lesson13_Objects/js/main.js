//Basics
const obj = {
	name: "Hari",
	age: 21,
	educated: true,
	skillset: ["C","C++","Java","Python"],
    school:{
        name:"Maharishi",
        location:"chennai"
    },
    schoolName: function(){
        return this.school.name;
    }
};

console.log(obj);
console.log(obj.name);
console.log(obj["age"]);
console.log(obj.school.location);
console.log(obj.schoolName());

const vehicle ={
    wheels: 4,
    engine: function(){
        return "Diesel";
    }
}

// Inheritance

const truck = Object.create(vehicle);

truck.doors = 2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());

const car = Object.create(vehicle);

car.doors = 4;

car.engine = function(){
    return "petrol";
}

console.log(car);
console.log(car.doors);
console.log(car.engine());

const tesla = Object.create(car);
car.engine = function(){
    return "electric";
}

console.log(tesla);
console.log(tesla.doors);
console.log(tesla.engine());

// Accessing Objects

const team = {
    frontend: "Tarun",
    backend: "Hari",
    dataanalyst: "sudharsan",
    tester: "Kalai"
};

console.log(Object.keys(team));
console.log(Object.values(team));

delete team.dataanalyst;

console.log(team.hasOwnProperty("dataanalyst"));
for(let pos in team){
	console.log(`${pos}: ${team[pos]}`);
}

//Destructuring objects

const {tester: tName} = team;
console.log(tName);

const {tester,frontend,backend} = team;
console.log(tester);
console.log(frontend);
console.log(backend);

function testerinfo({backend}){
    console.log(backend);
}

testerinfo(team);