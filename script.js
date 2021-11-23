function update_rate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+"%";
}

function compute() {
    var pr = document.getElementById("principal");
    var principal = pr.value;
    
    if (principal == "" || principal <= 0) {
        alert("Enter a positive number");
        pr.focus();
        return false;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    var intrest = principal * years * rate / 100;
    
    var year = new Date().getFullYear()+parseInt(years);
    
    var result = document.getElementById("result");

    result.innerHTML = 
    "<br/>If you deposit <mark>"+principal+
    "</mark><br/> an intrest rate of <mark>"+rate+
    "%</mark><br/> you will receive an amount of <mark>"+intrest+
    "</mark><br/> in the year <mark>"+year+"</mark>"
}
        