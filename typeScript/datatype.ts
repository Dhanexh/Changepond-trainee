console.log("Good Aternoon");

// number
let num1:number = 100, num2:number = 0.5;
console.log(num1, num2);

// string
let fname:string = "Dhanesh";
console.log(fname);

// boolean
let cond1:boolean = true, cond2:boolean = false;
console.log(cond1, cond2);

// array
let students:string[] = ["Dhanesh","Ravi","Suresh"];
let emp:Array<string> = ["Dhinesh","Dharanesh","Eshwaran"];


// tupple
let product:[number,string,number,boolean] = [101,"Apple",12345,true];
console.log(product);

// enum 
enum days{sun, mon, tue=101, wed, thu, fri, sat};
let data1 = days.sun;
let data2 = days.tue;
let data3 = days.wed;
console.log(product);

// union
