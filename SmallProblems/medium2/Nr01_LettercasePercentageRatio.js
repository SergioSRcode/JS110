//INPUT: string
//OUTPUT: object

//RR:
/*
-result shows:
  - percentage of characters in the string that are lowercase letters
  - percentage of characters that are uppercase letters
  - percentage of characters that are neither
- spaces count as characters
- number are category 3

Algo:
1. create function that checks whether argument is a letter

1. create object with keys and initialize values with 0
2. iterate over string
  2.1. for each char -> check if arg is letter and
       if arg === arg.toLowerCase
        => lowercase += 1
  2.2. else if arg is letter and 
       if arg === arg.toUpperCase
        => uppercase += 1
  2.3. else => neither += 1
3. calculate str length / each value * 100
  => reassign each value to it's corresponding key
4. append zeros to num.
5. return obj
*/

function isAlpha(char) {
  return /[A-Za-z]/.test(char);
}

function isLowerCase(char) {
  return char === char.toLowerCase();
}

function isUpperCase(char) {
  return char === char.toUpperCase();
}

function letterPercentages(str) {
  const LENGTH_OF_STR = str.length;
  let obj = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let i = 0; i < LENGTH_OF_STR; i++) {
    if (isAlpha(str[i]) && isLowerCase(str[i])) obj.lowercase += 1;
    if (isAlpha(str[i]) && isUpperCase(str[i])) obj.uppercase += 1;
    if (!isAlpha(str[i])) obj.neither += 1;
  }

  for (let key in obj) {
    obj[key] = (obj[key] / LENGTH_OF_STR * 100).toFixed(2);
  }

  return obj;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }



