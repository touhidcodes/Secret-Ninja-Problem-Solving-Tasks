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

// Task-14: Object Transformation
// Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases.

// Task-15: Function Memoization
// Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again.
