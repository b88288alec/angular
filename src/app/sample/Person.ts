export class Person {
    constructor(public name: string, public birthday: Date) {

    }

    get age(): number {
        return new Date().getFullYear() - this.birthday.getFullYear();
    }
}
