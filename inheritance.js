class Parents{
    constructor(father, mother){
        this.fathersName = father;
        this.mothersName = mother;
    }
}

class Child extends Parents {
    constructor(name){
        super('Farid', 'Shefaly');
        this.baby = name;
    }
}
const baby = new Child('shamim');
console.log(baby);
