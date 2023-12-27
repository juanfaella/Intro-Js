
const add = function(number1, number2) {
    const result = number1 * number2;
    return result;
};
const num1 = 100;
const num2 = 20;
const multiplicationResult = add(num1, num2);
console.log("Resultado:", multiplicationResult);

function saludar(nombre) {
    console.log("¡Hola, " + nombre + "! Bienvenido/a.");
}
const nameIngerese = prompt("Ingrese su Nombre")
saludar(nameIngerese);


const multiplicar = function(num1, num2) {
    var resultado = num1 * num2;
    return resultado;
};

const resultado1 = multiplicar(5, 10);
const resultado2 = multiplicar(8, 3);

console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);


function area(base, altura) {
    var resultado = (base * altura) / 2;
    return resultado;
}
const baseTriangulo = 8;
const alturaTriangulo = 4;

const areaTriangulo = area(baseTriangulo, alturaTriangulo);
console.log("El área del triángulo es:", areaTriangulo);

function perimetro(lado1, lado2, lado3) {
    var resultado = lado1 + lado2 + lado3;
    return resultado;
}
const ladoA = 5;
const ladoB = 7;
const ladoC = 9;

const perimetroTriángulo = perimetro(ladoA, ladoB, ladoC);
console.log("El perímetro del triángulo es:", perimetroTriángulo);

function isAnAdult(edad) {
    if (edad >= 18) {
        return "Eres mayor de edad";
    } else {
        return "No eres adulto";
    }
}
const edadUsuario = Number(prompt("Ingresa tu edad:"));
if (edadUsuario) {
    const mensaje = isAnAdult(edadUsuario);
    console.log(mensaje);
} else {
    console.log("Por favor, ingresa un número válido para la edad.");
}




function calcularImpuesto(ingresoAnual) {
    let impuesto;

    if (ingresoAnual <= 10000) {
        impuesto = ingresoAnual * 0.10;
    } else if (ingresoAnual <= 20000) {
        impuesto = ingresoAnual * 0.15;
    } else {
        impuesto = ingresoAnual * 0.20;
    }

    return impuesto;
}


function verificarDia(dia) {
    switch (dia) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Es un día hábil";
        case 6:
        case 7:
            return "Es fin de semana";
        default:
            return "Número de día no válido";
    }
}


function ingresarInformacionPersonal() {
    const nombre = prompt("Ingrese su nombre:");

    if (!nombre) {
        console.error("El nombre no puede estar vacío");
        return;
    }

    const apellido = prompt("Ingrese su apellido:");
    const edad = prompt("Ingrese su edad:");

    const informacionPersonal = {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    };

    console.log("Información personal:", informacionPersonal);
}


function saludo(nombre) {
    return "Hola, mi nombre es " + nombre;
}
function calcularAge(anioNacimiento, anioActual) {
    return anioActual - anioNacimiento;
}
function presentar() {
    const nombreUsuario = prompt("Ingrese su nombre:");
    const nacimiento = prompt("Ingrese su año de nacimiento:");
    const actual = new Date().getFullYear();

    const saludoUsuario = saludo(nombreUsuario);
    const edadUsuario = calcularAge(nacimiento, actual);

    alert(saludoUsuario + "\n" + "Mi edad es: " + edadUsuario + " años.");
}


const ingresoAnual = 15000;
const impuestoCalculado = calcularImpuesto(ingresoAnual);
console.log("Impuesto a pagar:", impuestoCalculado);

const diaIngresado = parseInt(prompt("Ingrese un número de día:"));
const mensajeDia = verificarDia(diaIngresado);
console.log(mensajeDia);

ingresarInformacionPersonal();

presentar();
