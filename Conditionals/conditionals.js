let date1 = "2018-9-2";
let date2 = "2023-7-5";
if (date1 > date2){
    console.log (`La fecha ${date1} es mayor que la fecha ${date2}`);
}else if (date1 < date2) {
    console.log (`La fecha ${date2} es mayor que la fecha ${date1}`);
}else{
    console.log ("Las fechas son iguales")
}

const numero1 = (5)
const numero2 = (7)
const numero3 = (9)
if (numero1 > numero2 && numero1 > numero3){
    console.log (`El numero ${numero1} es mas grande`)
}else if (numero1 < numero2 && numero2 > numero3){
    console.log (`El numero ${numero2} es mas grande`)
}else if (numero1 < numero3 && numero2 < numero3){
    console.log (`El numero ${numero3} es mas grande`)
}
const color = prompt("Ingrese un color (rojo, azul, o verde)")

switch (color) {
    case "rojo":
        console.log ("El color de la pasion")
        break;
    case "azul":
        console.log ("El color del mar")
        break;
    case "verde":
        console.log ("El color es naturaleza")
        break;
    default:
        break;
}

const enterNum1 = Number(prompt("Ingrese un valor numerico (del 1 al 100):"));
const enterNum2 = Number(prompt("Ingrese un segundo numero (del 1 al 100):"));
const operacion = prompt("Ingrese una operacion (suma, resta, multiplicacion, division)");
switch (operacion) {
    case "suma":
        console.log(`La suma de ${enterNum1} y ${enterNum2} es: ${enterNum1 + enterNum2}`);
        break;

    case "resta":
        console.log(`La resta de ${enterNum1} y ${enterNum2} es: ${enterNum1 - enterNum2}`);
        break;

    case "multiplicacion":
        console.log(`La multiplicacion de ${enterNum1} y ${enterNum2} es: ${enterNum1 * enterNum2}`);
        break;

    case "division":
        console.log(`La division de ${enterNum1} y ${enterNum2} es: ${enterNum1 / enterNum2}`);
        break;

    default:
        console.log("Operacion invalida");
}


let person1 = {
    name: "Juan",
    age: 39,
    height: 1.69
};

let person2 = {
    name: "Rosa",
    age: 35,
    height: 1.60
};

if (person1.height > person2.height && person1.age > person2.age) {
    console.log(`${person1.name} Es mas alto y mayor que ${person2.name}`);
} else if (person1.height < person2.height && person1.age < person2.age) {
    console.log(`${person2.name} Es mas alta y mayo que ${person1.name}`);
} else {
    if (person1.height > person2.height) {
        console.log(`${person1.name} Es mas alto pero ${person2.name} es mayor`);
    } else if (person1.height < person2.height) {
        console.log(`${person2.name} Es mas alta pero ${person1.name} es mayor`);
    } else if (person1.age > person2.age) {
        console.log(`${person1.name} Es mas grande pero ${person2.name} es mas alto`);
    } else if (person1.age < person2.age) {
        console.log(`${person2.name} Es mas grande pero ${person1.name} es mas alta`);
    } else {
        console.log(`${person1.name} y ${person2.name} son de la misma altura y edad`);
    }
}

const name = prompt("Ingrese su nombre");
const age1 = prompt("Ingrese su edad");
const height = parseFloat(prompt("Ingrese su altura (en cm)"));
const vision = parseFloat(prompt("Ingrese su vision (almenos 8 sobre 10)"));

if (age1 >= 18 && height > 110 && vision >= 8) {
    console.log("Usted está calificado para conducir");
} else {
    console.log("Usted NO está calificado para conducir");
}


const age3 = prompt("Ingrese su edad");
if (age3 >= 0 && age3 <= 12) {
    alert("Eres un niño");
} else if (age3 >= 13 && age3 <= 18) {
    alert("Eres un adolecente");
} else if (age3 >= 19 && age3 <= 45) {
    alert("Eres un Jover mayor");
} else if (age3 > 45 && age3 <= 100) {
    alert("Eres mayor");
} else if (age3 > 100) {
    alert("¿Es realmente tan viejo?");
} else {
    alert("Edad ingresada no válida.");
}


const userInput = Number(prompt("Ingrese un numero del 1 al 3"));

if (userInput === 1) {
    alert(`El numero ingresado es ${userInput}`);
} else if (userInput === 2) {
    alert(`El doble del número ingresado es ${userInput * 2}`);
} else if (userInput === 3) {
    alert(`Tres veces el número ingresado es ${userInput * 3}`);
} else {
    alert("Ese valor no está permitido.");
}


const customerName = prompt("Ingrese su nombre");
const passType = prompt("Ingrese su tipo de pase (vip o normal)"); 
const hasEntrance = prompt("¿Tienes un boleto de entrada? (si o no)");

if (customerName === "John" || passType === "vip") {
    alert("Bienvenido!");
    if (hasEntrance === "si") {
        const useTicket = prompt("¿Quieres utilizar tu entrada? (sí o no):");
        if (useTicket === "si") {
            alert("¡Bienvenido! ¡Disfruta el evento!");
        } else {
            alert("¡Que tenga un buen día!");
        }
    }
} else {
    const wantToBuy = prompt("¿Quieres comprar? (sí o no)");
    if (wantToBuy === "si") {
        const availableMoney = parseFloat(prompt("Ingresa tu dinero disponible"));
        if (availableMoney > 1000) {
            alert("¡Venta exitosa! ¡Bienvenido!");
        } else {
            alert("Rechazo de ventas.");
        }
    } else {
        alert("¡Que tenga un buen día!");
    }
}



let age = prompt("Por favor, Ingrese su edad:")
if(age >= 18){
    let iamAdult = true;
    console.log("Soy un adulto:", iamAdult)
}else{
    let iamAdult = false;
    console.log("No soy un adulto:", iamAdult)
}

