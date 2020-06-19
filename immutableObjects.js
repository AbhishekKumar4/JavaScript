const array = [1, 2, 3];
console.log(array);

const newArray = [...array, 10, 20]
console.log(newArray);

const person = { name : "Manmeet"};
console.log(person);

//copying and adding more properties
const person2 = Object.assign({}, person, { name : "Ruchir", age : 32})
console.log(person2);

// copying and changing using spread operator
const person3 = {
    ...person,
    name : "Bob",
    age : 33
}

console.log(person3)

// (...) spread operator does the shallow copy. for example :

const employee = { name : "employee1",
address : {
    street : "Ghaziabad"
}
}

const copyEmp = {
    ...employee,
    name : "Employee2"
}
copyEmp.address.street = "Germany";

console.log(employee);
console.log(copyEmp);

// Making deep copy using spread operator
const copyEmp2 = {
    ...employee,
    address : {
        ...employee.address,
        street : "Netherland"
    },
    name : "Employee2"
}

console.log(copyEmp2);