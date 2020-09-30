const COUDEE = Math.PI / 6;

function f3() {
  console.log("Hey from module2::fonction3");
}

function f4() {
  console.log("Hey from module2::fonction4");
}

class AClass {
  constructor(nom) {
    this.nom = nom;
  }
}

export { COUDEE, f3, f4, AClass };