(function (){

// counter button
    let count = 0;
    let amountToAdd = 1;
    let priceMultiplier = 10;

    let counterButton = document.getElementById("counter");
    let multiplierButton = document.getElementById("mulitplier");

    counterButton.innerHTML = count.toString();
    multiplierButton.innerHTML =  ` by multiplier (${priceMultiplier} cookies):
    click to have ${amountToAdd *2} cookies per click instead of ${amountToAdd} cookie per click`;

    counterButton.addEventListener("click", function(){
        count= count+ amountToAdd;
        counterButton.innerHTML = count;
    });

    multiplierButton.addEventListener("click", function(){
        if (count>=priceMultiplier){
            amountToAdd= amountToAdd*2;
            counterButton.innerHTML = count - priceMultiplier;
            count = count - priceMultiplier;
            multiplierButton.innerHTML = `by multiplier (${priceMultiplier} cookies):
            click to have ${amountToAdd *2} cookies per click instead of ${amountToAdd} cookie per click`;


        } else {
            alert("you don't have enough cookies to buy this")
        }


    });




})()