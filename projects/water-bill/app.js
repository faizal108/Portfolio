function calculate() {
     const rate = parseFloat(document.getElementById("rate").value);
     var ahmad = parseFloat(document.getElementById("ahmadhour").value);
     var asraf = parseFloat(document.getElementById("asrafhour").value);
     var arif = parseFloat(document.getElementById("arifhour").value);
     
     // total rate of hours
     var ahmad_tot = ahmad * rate;
     var asraf_tot = asraf * rate;
     var arif_tot = arif * rate;

     // average of all persons total rates
     var avg_rate = ((ahmad_tot+asraf_tot+arif_tot)/3).toFixed(3);
     var avg_hour = ((ahmad+asraf+arif)/3).toFixed(3);
     // more or less than average rate
     var ahmad_res = avg_rate - ahmad_tot;
     var asraf_res = avg_rate - asraf_tot;
     var arif_res = avg_rate - arif_tot;

     document.getElementById("ah_hour").innerHTML = ahmad;
     document.getElementById("ah_tot").innerHTML = ahmad_tot;
     document.getElementById("ah_res").innerHTML = ahmad_res.toFixed(3);

     document.getElementById("as_hour").innerHTML = asraf;
     document.getElementById("as_tot").innerHTML = asraf_tot;
     document.getElementById("as_res").innerHTML = asraf_res.toFixed(3);

     document.getElementById("ar_hour").innerHTML = arif;
     document.getElementById("ar_tot").innerHTML = arif_tot;
     document.getElementById("ar_res").innerHTML = arif_res.toFixed(3);

     document.getElementById("avg_hour").innerHTML = avg_hour;
     document.getElementById("avg_rate").innerHTML = avg_rate;
}
