import Person from './Person';

class Studnet extends Person{
    // 접근 지정자 private, protected 상속자식까지 가능, public
    protected subject:string ;

    constructor(subject:string){
        super(subject);
        this.subject = subject;
    }

    public getSubject():string{
        return `전공과목 : ${this.subject}`;
    }
}

// const pp = new Studnet('mark');
// console.log(pp.getSubject());

const hong = new Studnet('c++');
console.log(hong.getSubject());
console.log(hong.getTitle()); // 부모꺼 접근하면 에러