(function (){

// counter button
    let count = 0;
    let amountToAdd = 1;
    let priceMultiplier = 10;

    let counterButton = document.getElementById("counter");
    let multiplierButton = document.getElementById("mulitplier");

    counterButton.innerHTML = count.toString();
    multiplierButton.innerHTML =  ` ${amountToAdd} cookie per click,
    buy multiplier (${priceMultiplier} cookies): to have ${amountToAdd *2} cookies per click`;

    counterButton.addEventListener("click", function(){
        count= count+ amountToAdd;
        counterButton.innerHTML = count;
    });

    multiplierButton.addEventListener("click", function(){
        if (count>=priceMultiplier){
            amountToAdd= amountToAdd*2;
            counterButton.innerHTML = count - priceMultiplier;
            count = count - priceMultiplier;
            priceMultiplier= priceMultiplier*2;
            multiplierButton.innerHTML = ` ${amountToAdd} cookies per click,
    buy multiplier (${priceMultiplier} cookies): to have ${amountToAdd *2} cookies per click`;

        } else {
            alert("you don't have enough cookies to buy this")
        }


    });




})()