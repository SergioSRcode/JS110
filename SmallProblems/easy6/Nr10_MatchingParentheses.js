// Write a function that takes a string as an argument and returns true 
// if all parentheses in the string are properly balanced, false otherwise. 
// To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

function isBalanced(str) {
  let arrOfStr = str.split("");
  let parentheses = arrOfStr.filter(char => char === "(" || char === ")");
  const LAST_CHAR = parentheses.length - 1;
  let openParenthesis = 0;
  let closedParenthesis = 0;

  if (parentheses[0] === ")" || parentheses[LAST_CHAR] === "(") return false;

  parentheses.forEach(char => {
    if (char === "(") openParenthesis += 1;
    if (char === ")") closedParenthesis += 1;
  });

  return openParenthesis === closedParenthesis;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);