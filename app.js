// NIVELL 1 Y 2
let name = "David";
const myFunction = (x) => {
  console.log(`Nivell 1 y 2 exercici 2: ${x}`);
};
myFunction(name);
// NIVELL 2 EXERCICI2
let x = "Nivell 2 Exercici 2";
let templatefunction = (x) => {
  return x;
};
console.log(`${templatefunction(x)}`);

// NIVELL 3 EXERCICI 1
let arrayDeSumas = [
  () => {
    for (i = 0; i <= 10; i++) {
      console.log(i);
    }
  },
  () => {
    for (i = 0; i <= 10; i++) {
      console.log(i);
    }
  },
  () => {
    for (i = 0; i <= 10; i++) {
      console.log(i);
    }
  },
  () => {
    for (i = 0; i <= 10; i++) {
      console.log(i);
    }
  },
  () => {
    for (i = 0; i <= 10; i++) {
      console.log(i);
    }
  },
  () => {
    for (i = 0; i <= 10; i++) {
      console.log(i);
    }
  },
  () => {
    for (i = 0; i <= 10; i++) {
      console.log(i);
    }
  },
  () => {
    for (i = 0; i <= 10; i++) {
      console.log(i);
    }
  },
  () => {
    for (i = 0; i <= 10; i++) {
      console.log(i);
    }
  },
  () => {
    for (i = 0; i <= 10; i++) {
      console.log(i);
    }
  },
];
for (let i = 0; i < arrayDeSumas.length; i++) {
  arrayDeSumas[i]();
  console.log(`Nivell 3 exercici 1: ${i}`);
}
// NIVELL 3 EXERCICI 2
let usuari = "El nombre de usuario va aqui";
let funcionAnonima = function (usuari) {
  console.log(`Nivell 3 exercici 2:${usuari}`);
};
funcionAnonima(usuari);
