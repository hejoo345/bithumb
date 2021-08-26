"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./Person");
var Studnet = /** @class */ (function (_super) {
    __extends(Studnet, _super);
    function Studnet(subject) {
        var _this = _super.call(this, subject) || this;
        _this.subject = subject;
        return _this;
    }
    Studnet.prototype.getSubject = function () {
        return "\uC804\uACF5\uACFC\uBAA9 : " + this.subject;
    };
    return Studnet;
}(Person_1.default));
// const pp = new Studnet('mark');
// console.log(pp.getSubject());
var hong = new Studnet('c++');
console.log(hong.getSubject());
console.log(hong.getTitle()); // 부모꺼 접근하면 에러
