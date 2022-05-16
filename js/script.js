(function (){

// counter button
    var count = 0;
    let amountToAdd = 1;
    let priceMultiplier = 10;
    let priceAutoClicker = 10;
    let isAutoClicker = false;

    let counterButton = document.getElementById("counter");
    let multiplierButton = document.getElementById("mulitplier");
    let autoClicker = document.getElementById("auto-clicker")

    counterButton.innerHTML = count.toString();
    multiplierButton.innerHTML =  ` you get ${amountToAdd} cookie per click,
    buy multiplier (${priceMultiplier} cookies) to have ${amountToAdd *2} cookies per click`;

    counterButton.addEventListener("click", function(){
        count= count+ amountToAdd;
        counterButton.innerHTML = count;
    });

    multiplierButton.addEventListener("click", function(){
        if (count>=priceMultiplier){
            amountToAdd= amountToAdd*2;
            counterButton.innerHTML = count - priceMultiplier;
            count = count - priceMultiplier;
            priceMultiplier= priceMultiplier*2.5;
            multiplierButton.innerHTML = ` you get ${amountToAdd} cookies per click,
    buy new multiplier (${priceMultiplier} cookies) to have ${amountToAdd *2} cookies per click`;

        } else {
            alert("you don't have enough cookies to buy this")
        }
    });

   function startInterval(){
       count= count + 1;
       counterButton.innerHTML = count;
   }

   autoClicker.addEventListener("click", function () {
       if (count >= priceAutoClicker && isAutoClicker === false) {
           count = count - priceAutoClicker;
           setInterval(function () {
               startInterval();
           }, 1000);
           isAutoClicker = true;
        }
    });


})()