function toRoman(input) {
  // start your code here
  // return to_roman(input);

  var arab = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  var romawi = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

  if (input > 0) {
    for (let i = 0; i < arab.length; i++) {
      if (input >= arab[i]) {
        return romawi[i] + toRoman(input - arab[i])
      }
    }
  } else {
    return ''
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
