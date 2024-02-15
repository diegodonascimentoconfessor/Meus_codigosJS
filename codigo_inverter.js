function inverte()
{
  
    var valor1= Number(document.getElementById("valor1").value); 
    var valor2= Number(document.getElementById("valor2").value); 

    var aux = valor1;

    valor1=valor2;
    valor2=aux;
  
    alert(`Agora A é: ${valor1} e B é: ${valor2}`);
    
    
    console.log("A " + valor1);
    console.log("B " + valor2);
  
   
   
}
