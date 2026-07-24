class Animal{

    #name;
    #sound;
    constructor(name,sound) {
        this.#name = name;
        this.#sound = sound;
    }
    makeSound(){
        console.log(`${this.#name} kêu ${this.#sound}`);
    }

}
let dog = new Animal("dog","Gâu Gâu");
dog.makeSound();

let cat = new Animal("cat","Meo Meo");
cat.makeSound();

let cow = new Animal("cow","Ủm Bò");
cow.makeSound();


