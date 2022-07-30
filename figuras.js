//Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: "+ladoCuadrado+"cm");

function perimetroCuadrado(lado) {
return lado*4;
}

//console.log("El perimetro del cuadrado es: "+perimetroCuadrado+"cm");

function areaCuadrado(lado){
    return lado*lado;
}

//console.log("El area del cuadrado es: "+areaCuadrado+"cm^2");

console.groupEnd();
console.group("Triangulos")

//Código del triangulo
/*
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
*/
//const perimetroTriangulo= ladoTriangulo1+ladoTriangulo2+baseTriangulo;
//const areaTriangulo=(baseTriangulo*alturaTriangulo)/2;

function perimetroTriangulo(lado1,lado2,base){
    const ladoUno = parseInt(lado1);
    const ladoDos = parseInt(lado2);
    const baseInt = parseInt(base);
    return (ladoUno+ladoDos+baseInt);
}

function areaTriangulo(base,altura){
    return (base*altura)/2;

}

//console.log("La altura del triangulo es: "+alturaTriangulo);
/*console.log("Los lados del triangulo miden: "
+ladoTriangulo1+"cm, "
+ladoTriangulo2+"cm, "
+baseTriangulo+"cm"
);

console.log("El perimetro del triangulo es: "+perimetroTriangulo+"cm");
console.log("El area del triangulo es: "+areaTriangulo+"cm");
*/
console.groupEnd();

//Código del circulo
console.group("Cuadrados");

//RADIO
/*
const radioCirculo = 4;
console.log("El radio del circulo es: "+radioCirculo+"cm");


//DIAMETRO

const diametroCirculo = radioCirculo*2;
console.log("El diametro del circulo es: "+diametroCirculo+"cm");


//PI
const PI = Math.PI;
console.log("El PI es: "+PI);

*/
//CIRCUNFERENCIA
const PI = Math.PI;
//const perimetroCirculo = diametroCirculo*PI;
//console.log("El perimetro del circulo es: "+perimetroCirculo+"cm");

function perimetroCirculo(diametro){
    return diametro*PI;
}

//AREA
//const areaCirculo = (radioCirculo*radioCirculo)*PI;
//console.log("El area del circulo es: "+areaCirculo+"cm^2");
function areaCirculo(radio){
    return (radio*radio)*PI;
}



console.groupEnd();

//AQUÍ EMPEZAMOS A INTERACTUAR CON EL HTML

//CUADRADO

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area =areaCuadrado(value);
    alert(area);
}

//TRIANGULO

function calcularPerimetroTriangulo(){
    const inputLado1 = document.getElementById("InputLado1Triangulo");
    const inputLado2 = document.getElementById("InputLado2Triangulo");
    const inputBase = document.getElementById("InputBaseTriangulo");

    const valueLado1 = inputLado1.value;
    const valueLado2 = inputLado2.value;
    const valueBase = inputBase.value;
    

    const perimetro = perimetroTriangulo(valueLado1,valueLado2,valueBase);
    alert(perimetro);

}

function calcularAreaTriangulo(){
    const inputAltura = document.getElementById("InputAlturaTriangulo");
    const inputBase = document.getElementById("InputBaseTriangulo");

    const valueAltura = inputAltura.value;
    const valueBase = inputBase.value;

    const area = areaTriangulo(valueBase,valueAltura);
    alert(area);

}

function calcularPerimetroCirculo(){
    const inputDiametro = document.getElementById("InputDiametroCirculo");

    const valueDiametro = inputDiametro.value;

    const perimetro = perimetroCirculo(valueDiametro);
    alert(perimetro);


}
function calcularAreaCirculo(){
    const inputRadio = document.getElementById("InputRadioCirculo");

    const valueRadio = inputRadio.value;

    const area = areaCirculo(valueRadio);
    alert(area);
}


