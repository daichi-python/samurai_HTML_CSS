class Animal {
  constructor(name, age) {
     this.name = name;
     this.age = age;
  }
}

class Cat extends Animal {
    constructor(name, age, type) {
        super(name, age);
        this.type = type;
    }
    speak() {
        console.log(`${this.name}がにゃーんと泣きました`);
    }
}

const cat1 = new Cat('aaa', 4, 'シャム');
console.log(cat1);
cat1.speak();