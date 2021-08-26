class Person {
    // 접근 지정자 private, protected 상속자식까지 가능, public
    protected title:string = '';

    constructor(str:string){
        this.title = str;
    }

    public getTitle():string{
        let msg: string = 'summer';
        return `${this.title}의 ${msg}입니다.`;
    }
}

const pp = new Person('mark');
console.log(pp.getTitle());

export default Person;