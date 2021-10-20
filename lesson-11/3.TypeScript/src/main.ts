let str: string; // Указание типа
let bool: boolean;
let num: number;
let numArr: number[] = [1, 2]; // Объявление массива с типом number
                                                          let strArr: Array<string> = ["str1", "str2", "str3"];
let arr: Array<string | number> = ["str", 2]; // Объевляем несколько типов значений элементов

function sum(a: number, b: number): number {
  // Указание типов аргументов и возвращаемого значения
  return a + b;
}

function func(a: number, b: number = 0, sum?: boolean) {
  // Необязательные параметры и значения по умолчанию
  return sum ? a + b : a - b;
}

func(1, 2);

const user = {
                                             name: "Andreas",
        surname: "Valent",
};

type UserType = {
  name: string;
  surname: string;
};

function getFullName(person: UserType) {
  // Указание объекта как параметра
  return person.name.concat(` ${person.surname}`);
}

//----------------------------------------------------------------------------

interface PersonInterface {
  name: string;
  email?: string;
  getHi?(): string;
  setName?(name: string): void;
}

interface Employer {
  phoneNumber: string;
}

interface Admin extends PersonInterface, Employer {
  readonly adminId: number;
}

const person: Admin = {
  name: "Oleg",
  adminId: 123,
  phoneNumber: "88005553535",
};

function getPersonInfo(person: PersonInterface) {
  return `${person.name} ${person.email}`;
}
getPersonInfo(person);

//----------------------------------------------------------------------------

class Animal {
  name: string;
  private age: number;
  protected countOfLegs: number;
  readonly eat: () => void;
  setAge(age: number) {
    this.age = age;
  }
  getAge() {
    return this.age;
  }
  constructor(name: string, countOfLegs: number, age: number = 0) {
    this.name = name;
    this.age = age;
    this.countOfLegs = countOfLegs;
  }
}

const cat = new Animal("Tom", 4);

class Dog extends Animal {
  constructor(name: string, countOfLegs: number) {
    super(name, countOfLegs);
  }
}

const dog = new Dog("Pitt", 4);

//----------------------------------------------------------------------------

function sumOrConcat<T extends number | string>(a: T, b: T): T {
  return a + b;
}

sumOrConcat(1, 1);
