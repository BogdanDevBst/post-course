// 06. How do you find all pairs of an integer array whose sum is equal to a given number?

const findSumPair = (number, matchNumber) => {
    const arrayCopy = [...number]; // Making copy of array
    const pairMatch = []; // Empty array to put matches into
  
    for ( index = 0; index < number.length; index++) {
      // For loop to go through each number in array

      const subMatchNumber = matchNumber / 2 !== index ? matchNumber - arrayCopy[index] : null;
      // ^^ match number minus the current number from array. this gives us the number we need.
      // the turnary is to check it against the index if there are duplicates it will add them to it.
  
      if (
        arrayCopy.indexOf(subMatchNumber) !== -1 && // checking if the submatch number is in array => indexOf will give -1 if it is NOT in array
        pairMatch.indexOf(subMatchNumber) === -1 && // checking if it is in the pair match array to avoid duplicates
        pairMatch.indexOf(arrayCopy[index]) === -1 // checking if it is in the pair match array to avoid duplicates
      ) {
        pairMatch.unshift(arrayCopy[index]); // puts the element into array at the start
      }
    }
    return pairMatch.map((element) => [matchNumber - element, element]); // maps over the array and puts it into his format [ [ 2, 2 ], [ 3, 1 ] ]
  };

  console.log(findSumPair([1, 2, 3, 3, 3, 4, 4, 5, 6, 7], 9));
  