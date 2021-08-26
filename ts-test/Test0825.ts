interface Iemp {
    name: string,
    age: number,
    gender: boolean
}

const user: Iemp[] = [
    {name: 'kim', age: 24, gender:true},
    {name: 'lee', age: 23, gender:false},
    {name: 'park', age: 20, gender:true},
];

console.log(user);
console.log(JSON.stringify(user));