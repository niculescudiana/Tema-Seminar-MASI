function legendre(number,modulus){
    var result = 0;
    if(modulus%number == 0 || number%modulus == 0){
        result = 0; 
    } else {
        var coef = Math.pow(number,((modulus-1)/2));
        if (coef % modulus == 1){
            result = 1;
        } else {
            result = -1;
        }
    }
    return result;
}


$('#btn-legendre').click(function(){
    var number = parseInt(document.getElementById('number').value,10);
    var modulus =  parseInt(document.getElementById('modulus').value,10);
    var result = legendre(number,modulus);

    var p = document.getElementById('factors');
    p.innerHTML="";

    $("#result").text(result);
    return false;
})

$('#btn-jacobi').click(function(){
    var number = parseInt(document.getElementById('number').value,10);
    var modulus =  parseInt(document.getElementById('modulus').value,10);
    var primeFactors=[], powers=[], len=0; 
    if(modulus%2==0){
        primeFactors[len] = 2;
        powers[len] = 0;
        while(modulus%2==0){
            powers[len]++;
            modulus = modulus/2;
        }
        len++;
    }

    for(var i=3; i<=modulus; i+=2){
        if(modulus%i==0){
            powers[len] = 0;
            primeFactors[len] = i;
            while(modulus%i==0){
                powers[len]++;
                modulus = modulus/i;
            }
            len++;
        }
    }
    var result=1;
    for(var i=0; i<len; i++){
        var P = Math.pow(legendre(number,primeFactors[i]),powers[i]);
        result = result*P;
    } 
     var p = document.getElementById('factors');
     $("#result").text(result);
     p.innerHTML='Modulus factorization: ';
     for(var i=0;i<len;i++){
         p.innerHTML+= primeFactors[i]+"^"+powers[i]+" , ";
     }
     return false;
})