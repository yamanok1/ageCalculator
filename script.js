function check(){
    let by = document.getElementById("year").value;
    let bd = document.getElementById("day").value;
    let bm = document.getElementById("month").value;
    let birthDay = new Date(by , bm-1 , bd);
    let bYear;
    let bDay;
    let bMonth;
    let currDate = new Date();
    let ageInMs = currDate - birthDay;
    if (by > currDate.getFullYear() || by<1899 || by>2100) {
        document.getElementById("yValid").style.visibility = "visible";
        document.getElementById("yValid").style.color = "red";
    }
    else{
        document.getElementById("yValid").style.visibility = "hidden";
        bYear = by;
    }
    if (bm < 1 || bm > 12 || by == currDate.getFullYear() && bm>currDate.getMonth()+1) {
        document.getElementById("mValid").style.visibility = "visible";
        document.getElementById("mValid").style.color = "red";
    }
    else{
        document.getElementById("mValid").style.visibility = "hidden";
        bMonth= bm;
    }
    if (bd < 1 || bd > 31 || by == currDate.getFullYear() && bm >=currDate.getMonth()+1 && bd>currDate.getDate() || birthDay.getMonth()+1 != bm && birthDay.getDay() != bd && birthDay.getFullYear() == by ) {
        document.getElementById("dValid").style.visibility = "visible";
        document.getElementById("dValid").style.color = "red";
    }
    else{
        document.getElementById("dValid").style.visibility = "hidden";
        bDay = bd;
    }
   if(bMonth != null && bDay !=null && bYear!= null )
   {
    let years = Math.floor(ageInMs / (1000* 60* 60 *24* 365.25));
    let months = Math.floor((ageInMs % (1000* 60* 60 *24* 365.25))/(1000* 60*60*24 *30));
    let days = Math.floor((ageInMs % (1000* 60* 60 *24* 30.44))/(1000* 60*60*24));
    document.querySelector("#yl").innerText= years;
    document.querySelector("#ml").innerText= months;
    document.querySelector("#dl").innerText= days;

   }

}
