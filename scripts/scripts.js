function convertToRoman() {
    var num = document.getElementById('number').value;
    var numeroRomano = {
      M:1000,
      CM:900,
      D:500,
      CD:400,
      C:100,
      XC:90,
      L:50,
      XL:40,
      X:10,
      IX:9,
      V:5,
      IV:4,
      I:1
    
    };
  var final = '';
  var roman = '';
  
    for (var i in numeroRomano) {
    while (num >= numeroRomano[i]){
        roman = roman + i;
        num = num- numeroRomano[i];
      }
    }
    
    console.log("El valor final es: ", num);
    console.log("El vaor de roman es: ",roman);
   document.getElementById("numberFinal").value = roman;
  }

  convertToRoman();