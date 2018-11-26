function toRoman(input) {
  // start your code here
  if (input == 4){
    return "IV"
  } else if (input == 9){
    return "IX"
  } else if (input == 0){
    return ""
  } else {
    if (input >= 1000 && input < 3000) {
      return "M" + toRoman (input - 1000)
    } else if (input >= 500 && input < 1000){
      if (input >= 900 && input < 1000) {
        return "CM" + toRoman (input - 900)
      } else if (input < 900 && input >= 600){
        return "D" + toRoman (input - 500)
      }
    } else if (input >= 100 && input <500){
      if (input >= 400 && input < 500){
        return "CD" + toRoman(input - 400)
      }else if (input < 400 && input >= 100){
        return "L" + toRoman(input - 100)
      }
    } else if (input < 100){
      if (input >= 90){
        return "XC" + toRoman(input - 90)
      } else if (input >= 40 && input < 50){
        return "XL" + toRoman(input - 40)
      } else if (input >= 50 && input < 90){
        return "L" + toRoman(input - 50)
      } else if (input >= 60 && input < 90 || input >= 10 && input < 40){
        return "X" + toRoman(input - 10)
      } else if (input >= 5 && input < 10){
        return "V" + toRoman(input - 5)
      } else if (input < 9 && input >= 6 || input >=1 && input < 4){
        return "I" + toRoman(input - 1)
      }
    }
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
