const username: String = 'Jojhan'
const sum = (a: number, b: number) => {
    return a + b;
}

sum(1,2);

class Person {
    private age: number;
    lastName: string;

    constructor(age: number, lastName: string){
        this.age = age;
        this.lastName = lastName;
    }

}

const jojhan = new Person(20, 'Jojhan')

/**
 * La clase la podemos instanciar de la siguiente manera tambien
 * 
 * class Person{
 * constructor(private age: number, public lastName: string){}
 * }
 */