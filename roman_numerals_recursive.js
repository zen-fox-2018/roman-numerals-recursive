// const roman = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
// const number = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]

// function toRoman(input) {
//   if (!input) {
//     return ''
//   } else {
//     for (let i = number.length-1; i >= 0; i--) {
//       if (input >= number[i]) {
//         return roman[i] + toRoman(input - number[i])
//       }
//     }
//   }
// }

// pake .findIndex
const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I',]
const number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

function toRoman(input) {
  if (!input) {
    return ''
  } else {
    let index = number.findIndex((val) => {
      return val <= input
    })
    return roman[index] + toRoman(input - number[index])
  }
}

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|————————')
console.log('4     | IV       | ', toRoman(4))
console.log('9     | IX       | ', toRoman(9))
console.log('23    | XXIII    | ', toRoman(23))
console.log('1453  | MCDLIII  | ', toRoman(1453))
console.log('1646  | MDCXLVI  | ', toRoman(1646))

module.exports = toRoman
