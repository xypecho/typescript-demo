namespace A {
    interface Animal {
        name: string;
        eat(): void;
    }
    export class Dog implements Animal {
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        eat() {
            console.log('吃')
        }
    }
}

let dog = new A.Dog('汪汪汪')