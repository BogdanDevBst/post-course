// 15. How do you find all permutations of a string?

const allPermut = string  => {
    if (string.length < 2) 
    
    return string; // This is our break condition
  
    let permutations = []; // This array will hold our permutations

    for (i = 0; i < string.length; i++) {
      let char = string[i];
  
      // Cause we don't want any duplicates:

      if (string.indexOf(char) != i) // If char was used already
        continue; // Skip it this time
  
      let remainingString = string.slice(0, i) + string.slice(i + 1, string.length); // You can concat strings via '+' in JS
  
      for (let subPermutation of allPermut(remainingString))
        permutations.push(char + subPermutation)
    }
    return permutations;
};

console.log(allPermut("xyz"));
