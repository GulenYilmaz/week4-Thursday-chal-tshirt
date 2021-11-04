// T-Shirt Sorter
// Difficulty
// Medium

// Concepts
// Loops, Conditionals


// Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls

// This string essentially represents a bunch of t-shirts in an unsorted pile. Your function should return this pile of t-shirts sorted by small, then medium, then large. The above example would be returned sssssssmmmmmlllll.

// The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.

// >>> tshirtSorter('lms')
// // sml

// >>> tshirtSorter('smllms')
// ssmmll





// Write your solution below:

// Solution 1:
function tshirtSorter(str) {
    let small = ""
    let medium = ""
    let large = ""
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "s") {
        small += "s"
      } else if (str[i] === "m") {
        medium += "m"
      } else {
        large += "l"
      }
    }
    return small + medium + large
  }
  
  // Solution 2:
  function tshirtSorter(str) {
    // splits the string into a array of characters
    // sorts the array (alphabetically automatiically)
    // reverses the now sorted array (which happens to give us the order we need)
    // rejoins the elements into a single string
    return str.split("").sort().reverse().join("")
  }