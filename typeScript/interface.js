var Students = /** @class */ (function () {
    function Students(p, c, m) {
        this.phy = p;
        this.che = c;
        this.mat = m;
    }
    Students.prototype.totalMarks = function () {
        this.total = this.phy + this.che + this.mat;
        return this.total;
    };
    Students.prototype.percentage = function () {
        return (this.total / 300) * 100;
    };
    Students.prototype.studentsResult = function () {
        console.log("Physics:".concat(this.phy, " Chemistry:").concat(this.che, " Maths:").concat(this.mat, " Total:").concat(this.totalMarks(), " Percentage:").concat(this.percentage()));
    };
    return Students;
}());
var stuObj = new Students(95, 92, 99);
stuObj.studentsResult();
console.log(stuObj);
