function toRoman(input) {
  // start your code here
  if (input === 0) {
    return '';
  }
  else if (input > 1000) {
    return 'M' + (toRoman(input - 1000));
  }
  else if (input > 400 && input <500) {
    return 'CD' + (toRoman(input - 400));
  }
  else if (input > 500) {
    return 'D' + (toRoman(input - 500));
  }
  else if (input > 90 && input < 100) {
    return 'XC' + (toRoman(input - 90));
  }
  else if (input > 100) {
    return 'C' + (toRoman(input - 100));
  }
  else if (input > 40 && input < 50) {
    return 'XL' + (toRoman(input - 40));
  }
  else if (input > 50) {
    return 'L' + (toRoman(input - 50));
  }
  // case 10
  if (input === 9) {
    return 'IX' + (toRoman(input - 9));
  }
  else if (input > 10) {
    return 'X' + (toRoman(input - 10));
  }
  //case 5
  if (input === 4) {
    return 'IV' + (toRoman(input - 4));
  }
  else if (input > 5) {
    return 'V' + (toRoman(input - 5));
  }
  else if (input >= 1) {
    return 'I'+ (toRoman(input -1));
  }
}

console.log('My totally sweet testing script for new roman\n');
console.log('input | expected | actual');
console.log('——————|——————————|————————');
console.log('4     | IV       | ', toRoman(4));
console.log('9     | IX       | ', toRoman(9));
console.log('23    | XXIII    | ', toRoman(23));
console.log('1453  | MCDLIII  | ', toRoman(1453));
console.log('1646  | MDCXLVI  | ', toRoman(1646));

module.exports = toRoman;
