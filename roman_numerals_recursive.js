function toRoman(input) {
  // start your code here
  var nomor = [1, 4, 5, 9, 10, 40 , 50, 90, 100, 400, 500, 900, 1000];
  var romawi = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  if(input === 0){
    return '';
  } else {
    for(var i = nomor.length-1; i>=0;i--){
      if(input >= nomor[i]){
        return romawi[i] + toRoman(input - nomor[i]);
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
