function toRoman(input) {
  // start your code here
  var Roman=['M', 'DM', 'D', 'CD', 'C', 'LC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  var Num=[1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  if(input == 0) {
    return ''
  }else{
    for(var i=0; i < Roman.length; i++){
      if(input >= Num[i]){
        return Roman[i] + toRoman(input-Num[i])
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
