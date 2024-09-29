//  Day-01, 17 September, 2024

// Task-01: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

type TPerson = {
  name: string;
  age: number;
  gender: "male" | "female";
};

const people: TPerson[] = [
  { name: "Touhid", age: 30, gender: "male" },
  { name: "Urmi", age: 25, gender: "female" },
  { name: "Toufik", age: 35, gender: "male" },
  { name: "Jannatul", age: 22, gender: "female" },
];

const filterAndMapMales = (people: TPerson[]): string[] =>
  people
    .filter((person) => person.gender === "male")
    .map((person) => person.name);

const maleNames = filterAndMapMales(people);
console.log(maleNames);
// Output: ["Touhid", "Toufik"]

// Task-02: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

type TBook = {
  title: string;
  author: string;
  year: number;
};

const books: TBook[] = [
  { title: "Programming with JS", author: "JavaScript", year: 2010 },
  { title: "Typescript Technocrat", author: "TypeScript", year: 2015 },
  { title: "Next Ninja", author: "Ninja Publishers", year: 2024 },
];

const getBookTitles = (books: TBook[]): string[] =>
  books.map((book) => book.title);

const titles = getBookTitles(books);
console.log(titles);
// Output: ["Programming with JS", "Typescript Technocrat", "Next Ninja"]

// Task-03: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const square = (num: number): number => num * num;
const double = (num: number): number => num * 2;
const addFive = (num: number): number => num + 5;

const compose = (num: number): number => addFive(double(square(num)));

const result = compose(3);
console.log(result);
// Output: 23 (3^2 = 9, 9*2 = 18, 18+5 = 23)

// Task-04: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

type TCar = {
  make: string;
  model: string;
  year: number;
};

const cars: TCar[] = [
  { make: "Toyota", model: "Corolla", year: 2018 },
  { make: "Ford", model: "Mustang", year: 2015 },
  { make: "Tesla", model: "Model S", year: 2020 },
];

const sortCarsByYear = (cars: TCar[]): TCar[] =>
  cars.sort((a, b) => a.year - b.year);

const sortedCars = sortCarsByYear(cars);
console.log(sortedCars);
// Output: [
//  { make: 'Ford', model: 'Mustang', year: 2015 },
//  { make: 'Toyota', model: 'Corolla', year: 2018 },
//  { make: 'Tesla', model: 'Model S', year: 2020 }
// ]

// Task-05: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const modifyPersonAge = (
  people: TPerson[],
  name: string,
  newAge: number
): TPerson[] =>
  people.map((person) =>
    person.name === name ? { ...person, age: newAge } : person
  );

const updatedPeople = modifyPersonAge(people, "Touhid", 40);
console.log(updatedPeople);
// Output: [
//   { name: "Touhid", age: 40, gender: "male" },
//   { name: "Urmi", age: 25, gender: "female" },
//   { name: "Toufik", age: 35, gender: "male" },
//   { name: "Jannatul", age: 22, gender: "female" },
// ];
