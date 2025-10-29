// Import RxJS functions and operators
const { of, from, merge, zip, concat } = require('rxjs');
const { map, filter, flatMap, reduce } = require('rxjs/operators');

// -------------------- 1️⃣ map Operator --------------------
console.log("\n--- MAP Operator ---");
from([1, 2, 3, 4, 5])
  .pipe(map(x => x * 2))
  .subscribe(result => console.log(result));
// ➤ Output: 2, 4, 6, 8, 10
// (map transforms each emitted value by multiplying it by 2)

// -------------------- 2️⃣ filter Operator --------------------
console.log("\n--- FILTER Operator ---");
from([10, 15, 20, 25, 30])
  .pipe(filter(num => num > 20))
  .subscribe(result => console.log(result));
// ➤ Output: 25, 30
// (filter emits only numbers greater than 20)

// -------------------- 3️⃣ flatMap Operator --------------------
console.log("\n--- FLATMAP Operator ---");
from(["A", "B", "C"])
  .pipe(flatMap(letter => from([letter + "1", letter + "2"])))
  .subscribe(result => console.log(result));
// ➤ Output: A1, A2, B1, B2, C1, C2
// (flatMap maps each element to an Observable and flattens the results)

// -------------------- 4️⃣ reduce Operator --------------------
console.log("\n--- REDUCE Operator ---");
from([1, 2, 3, 4])
  .pipe(reduce((acc, val) => acc + val, 0))
  .subscribe(result => console.log(result));
// ➤ Output: 10
// (reduce combines all values emitted by an observable)

// -------------------- 5️⃣ merge Operator --------------------
console.log("\n--- MERGE Operator ---");
const stream1 = of("A", "B");
const stream2 = of("1", "2");
merge(stream1, stream2).subscribe(result => console.log(result));
// ➤ Output: A, B, 1, 2
// (merge combines multiple streams, emitting values as they arrive)

// -------------------- 6️⃣ zip Operator --------------------
console.log("\n--- ZIP Operator ---");
const numbers = of(1, 2, 3);
const letters = of("A", "B", "C");
zip(numbers, letters).subscribe(result => console.log(result));
// ➤ Output: [1, 'A'], [2, 'B'], [3, 'C']
// (zip pairs corresponding values from multiple streams)

// -------------------- 7️⃣ concat Operator --------------------
console.log("\n--- CONCAT Operator ---");
const first = of("X", "Y");
const second = of("Z");
concat(first, second).subscribe(result => console.log(result));
// ➤ Output: X, Y, Z
// (concat joins multiple observables sequentially)
