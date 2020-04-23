//Arrays- Series of values next to each other and you can access them using index
var products = [
    "Apple",
    "Banana",
    "Mangoes"
 ];
 //Also can be created like this
 // var products = new Arrays("hello"); slower day, dont use this
 
 products[products.length] = "Another Fruit";
 
 //add to the last of array
 products.push("last value");
 console.log(products)
 
 //Associated array, means we dont use 0,1,2 as index but key values
 
 var person = [];
 person["name"] = "Abhishek";
 person["Surname"] = "Kumar";
 console.log(person);
 console.log(person.name)
 
 //Useful Array Methods
 var items = ['Cars', 'Bikes', 'Planes'];
 // join is used to join elements by sent arguments
 console.log(items.join("||"));
 // length - just returns the length of the array
 
 //concat - concatenate - concat two arrays
 //pop - removing the last element
 //push - add an element to the end of an array
 //shift - removes the first element and returns it
 //unshift - moving all the elements in the array by 1 and adding a new element at the begining of the array
 //sort - sort the array alphabetically (doesnt work well for numbers) --
 // sort(function(a,b) {return a-b;})
 // slice(<index, index]) -- returns the values mentioned in positions || < means without this index and ] mean with this index
 //splice  -- arg1 -> from which place to start removing, arg2-> how many to remove, optional elemnts tp add after arg1 position 