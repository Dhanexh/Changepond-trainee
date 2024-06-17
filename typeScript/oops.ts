export class Person {
    // data-member 
    pname: string;
    pcontact: number;
    paddress: string;
    psingle: boolean;

    // constructor
    constructor(name: string, contact: number, address: string, single: boolean) {
        this.pname = name;
        this.pcontact = contact;
        this.paddress = address;
        this.psingle = single;
    }

    // member-function
    personDetails() {
        console.log(`Name:${this.pname} Contact:${this.pcontact} Address:${this.paddress} Single:${this.psingle}`)
    };
}

// let personObj = new Person("Raja",9999,"Mumbai",true);
// console.log(personObj.pname);
// personObj.personDetails();

// let personObj1 = new Person("Kuja",8888,"Kolkata",false);
// personObj1.personDetails();

// let personObj2 = new Person("Maja",7777,"Pune",true);
// personObj2.personDetails();