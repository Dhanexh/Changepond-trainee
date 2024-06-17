"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    // constructor
    function Person(name, contact, address, single) {
        this.pname = name;
        this.pcontact = contact;
        this.paddress = address;
        this.psingle = single;
    }
    // member-function
    Person.prototype.personDetails = function () {
        console.log("Name:".concat(this.pname, " Contact:").concat(this.pcontact, " Address:").concat(this.paddress, " Single:").concat(this.psingle));
    };
    ;
    return Person;
}());
exports.Person = Person;
// let personObj = new Person("Raja",9999,"Mumbai",true);
// console.log(personObj.pname);
// personObj.personDetails();
// let personObj1 = new Person("Kuja",8888,"Kolkata",false);
// personObj1.personDetails();
// let personObj2 = new Person("Maja",7777,"Pune",true);
// personObj2.personDetails();
