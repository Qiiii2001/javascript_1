// Exercise 1: match name
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

function findWords(dog_string, dog_names) {
    let matchFound = false; // flag to indicate if any match is found

    dog_names.forEach(name => {
        // Using .includes() method to check if the name is in the string
        // Converting both string and name to lowercase to make the search case-insensitive
        if (dog_string.toLowerCase().includes(name.toLowerCase())) {
            console.log(`Matched ${name}`);
            matchFound = true; // set the flag to true if a match is found
        }
    });

    if (!matchFound) {
        console.log("No Matches");
    }
}

findWords(dog_string, dog_names);

// Exercise 2: Write a fucntion that takes in an array and removes every even index with a splice,
//and replaces it with the string "even index" 
function replaceEvens(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            arr[i] = 'even index';
        }
    }
    return arr;
}

let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
console.log(replaceEvens(arr));

// Exercise 3:
// Sum Numbers
function sum(numbers) {
    let sum = 0
    if (numbers == []) {
        return 0;
    }
    else {
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
        return sum;
    }

}
console.log(sum([2,4,6,8,10]));

// Exercise 4: Even or Odd
function evenOrOdd(number) {
    if (number % 2 == 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
}
console.log(evenOrOdd(10));

// Exercise 5: highest and lowest
function highAndLow(numbers){
    let arr = numbers.split(" ").map(Number);
    let highest = arr[0];
    let lowest = arr[0];
    for(let i=0;i<arr.length;i++) {
      if(arr[i]>highest){
         highest = arr[i]
      }
      if(arr[i]<lowest){
        lowest = arr[i]
      }
    }
    return `${highest} ${lowest}`;
    
}
console.log(highAndLow("5 4 3 2 1"));

// Exercise 6: power of 2
function powersOfTwo(n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
      result.push(2 ** i);
    }
    return result;
}
  
console.log(powersOfTwo(2)); // [1, 2, 4]
  