interface IResult{

    totalMarks();
    percentage();
}

class Students implements IResult{
    phy:number;
    che:number;
    mat:number;
    total:number;
    constructor(p:number, c:number, m:number){
        this.phy = p;
        this.che = c;
        this.mat = m;
    }

    totalMarks() {
        this.total = this.phy + this.che + this.mat;
        return this.total;
    }

    percentage() {
        return (this.total/300)*100;
    }

    studentsResult(){
        console.log(`Physics:${this.phy} Chemistry:${this.che} Maths:${this.mat} Total:${this.totalMarks()} Percentage:${this.percentage()}`)
    }
}

let stuObj = new Students(95,92,99);
stuObj.studentsResult();
console.log(stuObj);