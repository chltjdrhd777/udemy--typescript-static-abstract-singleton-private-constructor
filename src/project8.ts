//static method = allows me to call this method located inside a class without making class instance from inside and outside.

class staticCall {
  static doesItwork(calling) {
    return calling;
  }
}

const a = staticCall.doesItwork("STATIC!!"); // I dont have to make const a because the answer of staticCall.doesItwork("STATIC!!") is also (STATIC!!) but I want to see the result from console.log
console.log(a); //STATICC

//If I would like to call static method from the other static method located in the same class, I could use "this" to call the target method.

class staticCall2 {
  static callMe1(b) {
    return `${b} is great`;
  }

  static callMe2(c) {
    return this.callMe1(c) + "Double calling..."; // <-- use "this" to indicate the class which contains the target static method.
  }
}

const b = staticCall2.callMe2("c would be passed to b");
console.log(b); //c would be passed to b is greatDouble calling...

//Then, If I want to access to a static method from the none-static method. I can use "classname.staticname()"

class staticCall3 {
  static callMe3(a: number, b: number, c: number) {
    if (a !== 2) {
      return b + c;
    }
    return a + b + c;
  }

  constructor() {
    console.log(staticCall3.callMe3(2, 3, 4)); // 9
  }
}

////////////////////////////////////////////////////////////////////////////////
//abstract = it could be used like interface. If I want to order the other classes inheriting parent class's structure, and I hope to force them to realize a specific function, I could use abstract.

abstract class abstracting {
  abstract1(push) {
    console.log("Does it work?" + push);
  }

  abstract abstract2(): void; //if I want to set abstract, 1. write "abstract" at the front of class. 2. write "abstract" to targetting specific method which I want to make it mendatory.
}

class abstracting2 extends abstracting {
  abstract2() {
    console.log("Does it work 2");
  } // I must realize abstract2. Technically, realizing function with the name of abstract2. If not, it makes an error because realizing abstract2 is mendatory in abstract class.
}
const testAbstracting = new abstracting2();
testAbstracting.abstract1("yes"); // Does it work?yes
testAbstracting.abstract2(); //Does it work2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//singleton = make sure that there is only one instance of a certain class.

class singletonPrac {
  private static instance: singletonPrac; // "private static" = it can be used only inside, but thanks to static I can utilize this by not making new ~~~. And, this follows the constructor of singletonPrac
  private constructor(private id: string) {}

  /*   get privateID() {
    return this.id;
  } */

  static getInstance() {
    //the name of this is up to me.
    if (singletonPrac.instance) {
      return this.instance; // In this case, this means singletonPrac because I would like to call the static from other static method.
    }
    this.instance = new singletonPrac("does it work?");
    return this.instance;
  }

  addId(idName) {
    this.id = idName;
  }
}
const getsingleton = singletonPrac.getInstance();
const getsingleton2 = singletonPrac.getInstance();
console.log(getsingleton, getsingleton2);
//const single = new singletonPrac("does it work?");
//single.addId("change");
//console.log(single.privateID); // change
// First, I put "private" at the front of constructor of class singletonPrac.
// Then, new singletonPrac makes an error because the constructor is private.
// To access to this, I can utilize static.
