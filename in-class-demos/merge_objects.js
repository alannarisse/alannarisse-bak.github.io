// EXAMPE ONE - simple merge using spread operator
const person = {
	name: 'Freddie'
}

const agePerson = {
	age: 24
}

const finalObject {
	... person, // all the properties of person object
	... agePerson
}

finalObject

// if both obects have have the same key, the second one will copy over the value




// EXAMPLE TWO https://www.javascripttutorial.net/object/javascript-merge-objects/

let employeeInfo = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};


let job = {
    jobTitle: 'JavaScript Developer',
    location: 'USA'
};

let employee = {
    ...employeeInfo,
    ...job
};

console.log(employee);


// USING OBJECT ASSIGN
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
};


let job = {
    jobTitle: 'JavaScript Developer',
    country: 'USA'
};


let employee = Object.assign(person, job);
console.log(employee);



