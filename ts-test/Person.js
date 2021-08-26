"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(str) {
        // 접근 지정자 private, protected 상속자식까지 가능, public
        this.title = '';
        this.title = str;
    }
    Person.prototype.getTitle = function () {
        var msg = 'summer';
        return this.title + "\uC758 " + msg + "\uC785\uB2C8\uB2E4.";
    };
    return Person;
}());
var pp = new Person('mark');
console.log(pp.getTitle());
exports.default = Person;
