let str: string;
let bool: boolean;
let num: number;
const numArr: number[] = [1, 2];
const arrowFunc = (x: number) => x * 2;
const arrowFunc2 = (a: number, b: number) => a + b;
const strArr: Array<string> = [
  'str1',
  'str2',
  'str3',
  'str3',
  'str3',
  'str3',
  'str3',
  'str3',
  'str3',
  'str3',
  'str3',
  'str3',
  'str3',
  'str3',
  'str3',
  'str3',
];
const arr: Array<string | number> = ['str', 2];

function sum(a: number, b: number): number {
  return a + b;
}

function func(a: number, b = 0, sum?: boolean) {
  return sum ? a + b : a - b;
}

func(1, 2);

const user = { name: 'Andreas', surname: 'Valent' };

type UserType = {
  name: string;
  surname: string;
};

function getFullName(person: UserType) {
  return person.name.concat(` ${person.surname}`);
}

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
  name: 'Oleg "одинокий волк"',
  adminId: 123,
  phoneNumber: '88005553535',
};

function getPersonInfo(person: PersonInterface) {
  return `${person.name} ${person.email}`;
}

getPersonInfo(person);

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

  constructor(name: string, countOfLegs: number, age = 0) {
    this.name = name;
    this.age = age;
    this.countOfLegs = countOfLegs;
  }
}

const cat = new Animal('Tom', 4);

class Dog extends Animal {
  constructor(name: string, countOfLegs: number) {
    super(name, countOfLegs);
  }
}

const dog = new Dog('Pitt', 4);
