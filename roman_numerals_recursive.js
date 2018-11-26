function toRoman(input) {
  var angka = [1000,900,500,400,100,50,40,10,9,5,4,1]
  var huruf = ['M','CD','D','CD','C','L','XL','X','IX','V','IV','I']
  cek = input
//  console.log(input)
  if(input === 0){
    return ' '
  }
  else {
      for(i = 0; i < angka.length; i ++){      
        if(input >= angka[i]){ 
          return huruf[i] + toRoman(input - angka[i])   
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
