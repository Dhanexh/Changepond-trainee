// Calculator
function addition() {
    let no1 = document.getElementById("cal-num1").value;
    let no2 = document.getElementById("cal-num2").value;
    document.getElementById("cal-ans").innerHTML = no1 + no2;
}

function subtraction() {
    let no1 = document.getElementById("cal-num1").value;
    let no2 = document.getElementById("cal-num2").value;
    document.getElementById("cal-ans").innerHTML = no1 - no2;
}

function multiplication() {
    let no1 = document.getElementById("cal-num1").value;
    let no2 = document.getElementById("cal-num2").value;
    document.getElementById("cal-ans").innerHTML = no1 * no2;
}

function division() {
    let no1 = document.getElementById("cal-num1").value;
    let no2 = document.getElementById("cal-num2").value;
    document.getElementById("cal-ans").innerHTML = no1 / no2;
}



// Currency
function usd() {
    let no = document.getElementById("num").value;
    document.getElementById("ans1").innerHTML = no * 0.01197;
    
}

function eur() {
    let no = document.getElementById("num").value;
    document.getElementById("ans2").innerHTML = no * 0.01117;
}

function jpy() {
    let no = document.getElementById("num").value;
    document.getElementById("ans3").innerHTML = no * 1.88429;
}

function btc() {
    let no = document.getElementById("num").value;
    document.getElementById("ans4").innerHTML = no / 5516680.97;
}



// Temprature
function farenheit() {
    let temp = document.getElementById("numb").value;
    document.getElementById("answ1").innerHTML = `${temp * 33.8} f`;
}

function kelvin() {
    let temp = document.getElementById("numb").value;
    document.getElementById("answ2").innerHTML = `${temp * 274.15} K`;
}



// Weight
function wtConvert() {
    let weight = document.getElementById("number").value;
    document.getElementById("answer1").innerHTML = weight * 0.001;
    document.getElementById("answer2").innerHTML = weight * 0.0022;
    document.getElementById("answer3").innerHTML = weight * 1000;
    document.getElementById("answer4").innerHTML = weight / 907184.74;
}


// Percentage
function percentage() {
    let no1 = document.getElementById("num1").value;
    let no2 = document.getElementById("num2").value;
    document.getElementById("ans").innerHTML = `${(no1 / no2) * 100} %`;
    
}


// Age
function age() {
    let dob = document.getElementById("age-num").value;
    if(dob){
        const dobDate = new Date(dob);
        const today = new Date();

        let age = today.getFullYear() - dobDate.getFullYear();
        const monthDiff = today.getMonth() - dobDate.getMonth();
        const dayDiff = today.getDate() - dobDate.getDate();

        if(monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)){
            age--;
        }
        document.getElementById("age-ans").innerHTML = `your Age is ${age}`;
    }   
}


// outside button
function calculatorr() {
    let cal_div = document.getElementById("cal-id");
    let cur_div = document.getElementById("cur-id");
    let temp_div = document.getElementById("temp-id");
    let wt_div = document.getElementById("wt-id");
    let perc_div = document.getElementById("perc-id");
    let age_div = document.getElementById("age-id");

    cal_div.style.display = "block";
    cur_div.style.display = "none";
    temp_div.style.display = "none";
    wt_div.style.display = "none";
    perc_div.style.display = "none";
    age_div.style.display = "none";

}

function currencyy() {
    let cal_div = document.getElementById("cal-id");
    let cur_div = document.getElementById("cur-id");
    let temp_div = document.getElementById("temp-id");
    let wt_div = document.getElementById("wt-id");
    let perc_div = document.getElementById("perc-id");
    let age_div = document.getElementById("age-id");

    cal_div.style.display = "none";
    cur_div.style.display = "block";
    temp_div.style.display = "none";
    wt_div.style.display = "none";
    perc_div.style.display = "none";
    age_div.style.display = "none";

}

function tempraturee() {
    let cal_div = document.getElementById("cal-id");
    let cur_div = document.getElementById("cur-id");
    let temp_div = document.getElementById("temp-id");
    let wt_div = document.getElementById("wt-id");
    let perc_div = document.getElementById("perc-id");
    let age_div = document.getElementById("age-id");

    cal_div.style.display = "none";
    cur_div.style.display = "none";
    temp_div.style.display = "block";
    wt_div.style.display = "none";
    perc_div.style.display = "none";
    age_div.style.display = "none";

}

function weightt() {
    let cal_div = document.getElementById("cal-id");
    let cur_div = document.getElementById("cur-id");
    let temp_div = document.getElementById("temp-id");
    let wt_div = document.getElementById("wt-id");
    let perc_div = document.getElementById("perc-id");
    let age_div = document.getElementById("age-id");

    cal_div.style.display = "none";
    cur_div.style.display = "none";
    temp_div.style.display = "none";
    wt_div.style.display = "block";
    perc_div.style.display = "none";
    age_div.style.display = "none";

}

function percentagee() {
    let cal_div = document.getElementById("cal-id");
    let cur_div = document.getElementById("cur-id");
    let temp_div = document.getElementById("temp-id");
    let wt_div = document.getElementById("wt-id");
    let perc_div = document.getElementById("perc-id");
    let age_div = document.getElementById("age-id");

    cal_div.style.display = "none";
    cur_div.style.display = "none";
    temp_div.style.display = "none";
    wt_div.style.display = "none";
    perc_div.style.display = "block";
    age_div.style.display = "none";

}

function agee() {
    let cal_div = document.getElementById("cal-id");
    let cur_div = document.getElementById("cur-id");
    let temp_div = document.getElementById("temp-id");
    let wt_div = document.getElementById("wt-id");
    let perc_div = document.getElementById("perc-id");
    let age_div = document.getElementById("age-id");

    cal_div.style.display = "none";
    cur_div.style.display = "none";
    temp_div.style.display = "none";
    wt_div.style.display = "none";
    perc_div.style.display = "none";
    age_div.style.display = "block";

}
