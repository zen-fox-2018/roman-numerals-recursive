function toRoman(input) {
  // start your code here
  var unik = [1000,900,500,400,100,90,50, 40, 10, 9, 5, 4, 1]
  var roman = ['M', 'CM','D','CD','C', 'XC','L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ]
  var string = String(input)
  if(input === 0){
    return ''
  }
  if(input >=1000){
    return 'M' + toRoman(input-1000)
  }
  if (input >=900){
    return 'CM'+ toRoman(input-900)
  }
  if(input >=500){
    return 'D'+ toRoman(input-500)
  }

  if(input >=400){
    return 'CD'+ toRoman(input-400)
  }

  if(input >=100){
    return 'C'+ toRoman(input-100)
  }
  if(input>=90){
    return 'XC' + toRoman((input-90))
  }
  if(input >=50){
    return 'L' + toRoman(input-50)
  }

  if(input >=40){
    return 'XL' + toRoman(input-40)
  }

  if(input >=10){
    return 'X' + toRoman(input-10)
  }

  if(input >=9){
    return 'IX' + toRoman(input-9)
  }

  if(input >=5){
    return 'V' + toRoman(input-5)
  }

  if(input >=4){
    return 'IV' + toRoman(input-4)
  }

  if(input >=1){
    return 'I' + toRoman(input-1)
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
