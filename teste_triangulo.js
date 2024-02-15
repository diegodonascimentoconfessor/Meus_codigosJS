function analisarlados(){
    
     var lado1 = Number(document.getElementById("lado1").value);
     var lado2 = Number(document.getElementById("lado2").value);
     var lado3 = Number(document.getElementById("lado3").value);
     if ((lado1+lado2>lado3) && (lado2+lado3>lado1) &&(lado1+lado3>lado2)){
         if((lado1==lado2)&& (lado2==lado3)){
             document.write("é um triângulo Equilatero");
         }else {
             if((lado1!=lado2)&&(lado1!=lado3)&&(lado2!=lado3)){
             document.write("é um triângulo é Escaleno");
             }else{
             document.write("é um triângulo é Isoceles");
             }
         }
     }else{
         document.write("Não é um triângulo");
     }
 }
 