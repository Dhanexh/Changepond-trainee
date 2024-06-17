import{Person} from "./oops";

class Company extends Person{
    cname:string;
    gstnumber:number;
    city:string;

    constructor(name: string, contact: number, address: string, single: boolean, compname:string, compgstnumber:number, compcity:string){
        super(name,contact,address,single);
        this.cname = compname;
        this.gstnumber = compgstnumber;
        this.city = compcity;
    }

    personDetails(){
        console.log(`Name:${this.pname} Contact:${this.pcontact} Address:${this.paddress} Single:${this.psingle} Contact: CompanyName:${this.cname} GST number:${this.gstnumber} City:${this.city}`);
    }
}

let compObj = new Company("Dhanesh",99999,"TamilNadu",true,"Changepond",1234,"Chennai");
compObj.personDetails();
console.log(compObj);
