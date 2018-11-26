function toRoman(input) {
  let kamus = {
    M: 1000,
    CM: 900,
    D: 500,
    CD:400 ,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  let result = ''
  if(input == 0) {
    return result
  } else {
    for(i in kamus) {
      if(input >= kamus[i]){
        result += i
        return result + toRoman(input-kamus[i]);
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
