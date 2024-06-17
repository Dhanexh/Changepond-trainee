var name1 = "Mahendra";
var name2 = "Singh";
var name3 = "Dhoni";
console.log(name1, name2, name3);
function fullname(fname, mname, lname) {
    return "".concat(fname, " ").concat(mname, " ").concat(lname);
}
console.log((fullname("Mahendra", "Singh", "Dhoni")));
