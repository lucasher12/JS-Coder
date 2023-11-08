
let nombre= prompt("Por favor, ingrese su nombre: ");
let apellido= prompt("Por favor, ingrese su apellido: ");
function bienvenida (nombre, apellido){
    alert("Bienvenido " + nombre + " " + apellido);
}
bienvenida (nombre, apellido);

const DOLAR_C= 38.85;
const DOLAR_V= 41.05;
const EURO_C= 40.49;
const EURO_V= 45.10;
const AR_C= 0.024;
const AR_V= 0.20;
const UY_CV= 1;
const REAL_C= 7.45;
const REAL_V= 9.15;

let divisaEntrante= prompt("Ingrese la divisa que usted tiene (USD, EU, AR, UY, REAL)");
let divisaSaliente= prompt("Ingrese la divisa que quiere (USD, EU, AR, UY, REAL)");
let importe= parseFloat(prompt("Por ultimo, por favor ingrese la cantidad de dinero: "));

let tasaConversion = 1;

if (divisaEntrante === "USD" && divisaSaliente === "EU"){
    tasaConversion = DOLAR_C / EURO_V;
} else if (divisaEntrante === "USD" && divisaSaliente === "AR"){
    tasaConversion = DOLAR_C / AR_V;
} else if (divisaEntrante === "USD" && divisaSaliente === "UY"){
    tasaConversion = DOLAR_C / UY_CV;
} else if (divisaEntrante === "USD" && divisaSaliente === "REAL"){
    tasaConversion = DOLAR_C / REAL_V;

} else if (divisaEntrante === "EU" && divisaSaliente === "USD"){
    tasaConversion = EURO_C / DOLAR_V;
} else if (divisaEntrante === "EU" && divisaSaliente === "AR"){
    tasaConversion = EURO_C / AR_V;
} else if (divisaEntrante === "EU" && divisaSaliente === "UY"){
    tasaConversion = EURO_C / UY_CV;
} else if (divisaEntrante === "EU" && divisaSaliente === "REAL"){
    tasaConversion = EURO_C / REAL_V;

} else if (divisaEntrante === "AR" && divisaSaliente === "USD"){
    tasaConversion = AR_C / DOLAR_V;
} else if (divisaEntrante === "AR" && divisaSaliente === "EU"){
    tasaConversion = AR_C / EURO_V;
} else if (divisaEntrante === "AR" && divisaSaliente === "UY"){
    tasaConversion = AR_C / UY_CV;
} else if (divisaEntrante === "AR" && divisaSaliente === "REAL"){
    tasaConversion = AR_C / REAL_V;

} else if (divisaEntrante === "UY" && divisaSaliente === "USD"){
    tasaConversion = UY_CV / DOLAR_V;
} else if (divisaEntrante === "UY" && divisaSaliente === "EU"){
    tasaConversion = UY_CV / EURO_V;
} else if (divisaEntrante === "UY" && divisaSaliente === "AR"){
    tasaConversion = UY_CV / AR_V;
} else if (divisaEntrante === "UY" && divisaSaliente === "REAL"){
    tasaConversion = UY_CV / REAL_V;

} else if (divisaEntrante === "REAL" && divisaSaliente === "USD"){
    tasaConversion = REAL_C / DOLAR_V;
} else if (divisaEntrante === "REAL" && divisaSaliente === "EU"){
    tasaConversion = REAL_C / EU_V;
} else if (divisaEntrante === "REAL" && divisaSaliente === "AR"){
    tasaConversion = REAL_C / AR_V;
} else if (divisaEntrante === "REAL" && divisaSaliente === "UY"){
    tasaConversion = REAL_C / UY_CV;
}

let importeTotal = importe * tasaConversion;
alert("El importe total es: " + importeTotal);