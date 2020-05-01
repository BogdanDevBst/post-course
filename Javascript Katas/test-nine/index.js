// 09. How do you check if two strings are anagrams of each other?

const checkArray = (stringOne, stringTwo) => {
    return typeof stringOne === "string" && typeof stringTwo === "string"
      ? stringOne.split("").sort().join("") ===
          stringTwo.split("").sort().join("")
      : "Invalid Input";
  };
  
  console.log(checkArray("bobo", "obob"), "true");
  console.log(checkArray("bobo", "boo4b"), "false");
  console.log(checkArray("dog", "god"), "true");
  console.log(checkArray("gabety", "gabmen"), "false");
  console.log(checkArray("gabetyasdw", "gabmenasdw"), "false");
