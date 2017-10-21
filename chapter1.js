// Determine if a string has all unique characters


// simple solution
const allUnique = str => {
  let counts = {};
  const strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (counts[strArr[i]]) {
      return false;
    }
    counts[strArr[i]] = true;
  }
  return true;
};

// refactoring

const isUnique = str => {
  let counts = {};
  const strArr = str.split('');
  strArr.forEach(ele => {
    if (counts[ele]) {
      return false;
    }
    counts[ele] = true;
  });
  return true;
};

// Without aditional data structures

const unique = str => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
};

const pass = 'abcde';   // true
const fail = 'abcda';   // false
const empty = '';       // true
const emptyTwo = '  ';  // false

// Reverse a string

const reverse = str => {
  return str.split('').reverse().join('');
};

// Without array prototypes
const reverseInPlace = str => {
  let newStr = '';
  for (let i = str.length - 1; i > -1; i--) {
    newStr += str[i];
  }
  return newStr;
};

// Recursively
const recursiveReverse = str => {
  return str === '' ? '' : recursiveReverse(str.substr(1) + str.charAt(0));
};

const test = reverse('abcdefg');  // 'gfedcba'


// Remove duplicate characters from a string

const removeDuplicates = str => {
  return [...new Set(str)].join('');
};


// Determine if two strings are anagrams

const isAnagram = (str1, str2) => {
  str1 = str1.split('').sort((a,b) => a > b).join('');
  str2 = str2.split('').sort((a,b) => a > b).join('');

  return str1 === str2;
};
