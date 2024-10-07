//  Day-02, 03 October, 2024

// Task-11: Advanced Sorting
// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

type TStudent = {
  name: string;
  grades: number[];
};

type Student = {
  name: string;
  grades: number[];
};

const sortStudentsByAverageGrade = (students: TStudent[]): TStudent[] => {
  const studentsWithAverages = students.map((student) => ({
    ...student,
    averageGrade:
      student.grades.reduce((sum, grade) => sum + grade, 0) /
      student.grades.length,
  }));

  return studentsWithAverages
    .sort((a, b) => b.averageGrade - a.averageGrade)
    .map(({ averageGrade, ...students }) => students);
};

// Example usage:
const students: TStudent[] = [
  { name: "Alice", grades: [85, 90, 78] },
  { name: "Bob", grades: [75, 88, 82] },
  { name: "Charlie", grades: [93, 85, 89] },
];
console.log(sortStudentsByAverageGrade(students));
// Output:
// [
//   { name: "Charlie", grades: [93, 85, 89] },
//   { name: "Alice", grades: [85, 90, 78] },
//   { name: "Bob", grades: [75, 88, 82] },
// ];

// Task-12: Functional Programming - Reduce
// Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.

type TItem = {
  quantity: number;
  price: number;
};

function calculateTotalValue(items: TItem[]): number {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
}

// Example usage:
const cart: TItem[] = [
  { quantity: 2, price: 50 },
  { quantity: 1, price: 100 },
  { quantity: 3, price: 25 },
];
console.log(calculateTotalValue(cart));
// Output: 275

// Task-13: Array Intersection
// Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays.

const arrayIntersection = (arr1: number[], arr2: number[]): number[] => {
  return arr1.filter((item) => arr2.includes(item));
};

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(arrayIntersection(array1, array2));
// Output: [3, 4, 5]

// Task-14: Object Transformation
// Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases.

type TCustomer = {
  name: string;
  purchases: number;
  loyaltyPoints: number;
};

const doublingLoyaltyPoint = (customers: TCustomer[]): void => {
  customers.forEach((customer) => {
    customer.purchases > 5
      ? (customer.loyaltyPoints *= 2)
      : customer.loyaltyPoints;
  });
};

// Example usage:
const customers: TCustomer[] = [
  { name: "John", purchases: 6, loyaltyPoints: 100 },
  { name: "Jane", purchases: 3, loyaltyPoints: 50 },
  { name: "Mary", purchases: 7, loyaltyPoints: 150 },
];
doublingLoyaltyPoint(customers);
console.log(customers);
// Output:
// [
//   { name: "John", purchases: 6, loyaltyPoints: 200 },
//   { name: "Jane", purchases: 3, loyaltyPoints: 50 },
//   { name: "Mary", purchases: 7, loyaltyPoints: 300 },
// ];

// Task-15: Function Memoization
// Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again.

function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache: { [key: string]: ReturnType<T> } = {};

  return ((...args: Parameters<T>): ReturnType<T> => {
    // Serialize the arguments into a key string
    const key = JSON.stringify(args);
    if (cache[key]) {
      // If the result for these arguments is already in the cache, return it
      return cache[key];
    }
    // Otherwise, execute the original function
    const result = fn(...args);
    // Store the result in the cache for future reference
    cache[key] = result;
    // Return the newly computed result
    return result;
  }) as T;
}

// Example usage:
const expensiveCalculation = (a: number, b: number): number => {
  console.log("Calculating...");
  return a + b;
};
const memoizedCalculation = memoize(expensiveCalculation);
console.log(memoizedCalculation(5, 10));
// Output: "Calculating..." 15
console.log(memoizedCalculation(5, 10));
// Output: 15 (from cache)
