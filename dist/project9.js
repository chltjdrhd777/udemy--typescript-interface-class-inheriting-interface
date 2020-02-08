//Interface => like type alias, it determines the particular structure of ojbect which is created based on the Interface.
//Unlike type alias, interface allows me to use "inheritence" so, many developer prefer interface to type alias.
let user1; // setting the type
user1 = {
    name: "I have to follow the structure of Person",
    age: 2,
    methoding(bevoid) {
        console.log(`${bevoid} is wonderful ${this.name}`);
    }
};
user1.methoding("does it work?");
class affectedByPerosn2 {
    constructor(who) {
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
class affectedByPerosn2double {
    constructor(a, b) {
        this.hisAge = 25; // If not, I can input the value inside keys diretly.
        this.extends = 23; // and also, after implemeting all inherited things, I can extend other keys.
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
let user2;
user2 = new affectedByPerosn2double("double interface", "Anderson");
console.log(user2.name); // double interface
console.log(user2);
//# sourceMappingURL=project9.js.map