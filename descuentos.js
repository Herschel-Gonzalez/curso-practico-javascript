// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }
  
  function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }

  function onClickButtonCuponDiscount(){
    const inputPrice = document.getElementById("InputPriceCupon");
    const priceValue = inputPrice.value;

    const inputCupon = document.getElementById("InputDiscountCupon");
    const cuponValue = inputCupon.value;

    let cupones = ["niño", "Adulto","Estudiante"];

    var descuento = 0;

    switch (cuponValue) {
        case "niño":
            descuento = 100;
          break;
        case "Adulto":
            descuento = 50;
          break;
        case "Estudiante":
            descuento = 25;
          break;
        default:
            descuento = -1;

          break;
      }
    
    if(descuento!=-1){
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
        const resultP = document.getElementById("ResultCupon");
        resultP.innerText = "El precio con el cupon de descuento es: $" + precioConDescuento;

    }else{

        const resultP = document.getElementById("ResultCupon");
        resultP.innerText = "El cupon de descuento no es valido :(";

    }


  }
  
  
  // console.log({
  //   precioOriginal,
  //   descuento,
  //   porcentajePrecioConDescuento,
  //   precioConDescuento,
  // });