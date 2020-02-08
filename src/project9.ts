//Interface => like type alias, it determines the particular structure of ojbect which is created based on the Interface.
//Unlike type alias, interface allows me to use "inheritence" so, many developer prefer interface to type alias.

interface Person {
  // using upper case first is a conventional thing.
  name: string;
  age: number; // I can input the string properties,

  methoding(a: string): void; // and also I can input a method similar to abstarct, just naming and setting the type of paremeters, result type.
}

let user1: Person; // setting the type

user1 = {
  name: "I have to follow the structure of Person", // to separate each properties, I should use ','
  age: 2,

  methoding(bevoid: string) {
    console.log(`${bevoid} is wonderful ${this.name}`);
  }
};

user1.methoding("does it work?");
////////////////////////////////////////////////////////
//interface can force a class to adhere to.
interface Person2 {
  name: string;

  sayHello(remark: string): void;
  sayHello2(remark2: string): void;
}

class affectedByPerosn2 implements Person2 {
  //looks like inheritance. But the difference is class can inherit more than one interface. like "implements person2,person3....."
  name: string;
  extends: string; // I can add more properties apart from the things of person2 after I implement them
  constructor(who: string) {
    this.name = who;
  }

  sayHello() {
    function doesItWork() {
      // Because I set the result type of sayHello as "void", it wouldn't work
      this.extends = "why does not it make an error?";
    }
  }

  sayHello2() {
    console.log("Than, does it work?"); // Than does it work?
  }
}

const a = new affectedByPerosn2("James");
a.sayHello(); // return nothing
a.sayHello2(); //Than, does it work?

interface double {
  employee1: string;
  hisAge: number;
}

class affectedByPerosn2double implements Person2, double {
  name: string;
  employee1: string; // If I want to realize inherited properties with constructor, I can just write the type name about keys and set the parameters.
  hisAge = 25; // If not, I can input the value inside keys diretly.
  extends = 23; // and also, after implemeting all inherited things, I can extend other keys.
  constructor(a: string, b: string) {
    this.name = a;
    this.employee1 = b;
  }

  sayHello() {
    console.log("hhhhh");
  }
  sayHello2() {
    console.log("hhhhhhhh");
  }
} // when I inherit two different interface.

//And, of course, it can create new constructor.
let user2: affectedByPerosn2double;

user2 = new affectedByPerosn2double("double interface", "Anderson");
console.log(user2.name); // double interface
console.log(user2);
