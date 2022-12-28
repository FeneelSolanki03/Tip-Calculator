 function calculateTip(){
    var foodTotal = Number(document.getElementById("bill-amount").value) ;
    var tipPercent = Number(document.getElementById("tip-amount").value/100) ;
    var tipamount = (foodTotal * tipPercent);
    var total = (foodTotal + tipamount);


document.getElementById("hello").innerHTML = "Total Bill including Tip : " + total ;
document.getElementById("bello").innerHTML = "Tip: " + tipamount;
 }
 
 
 