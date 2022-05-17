(function () {

// counter button
    var count = 0;
    let amountToAdd = 1;
    let priceMultiplier = 15;
    let priceAutoClicker = 100;
    let isAutoClicker = false;
    let priceBonus = 12;
    let isBonusActive = false;

    let counterButton = document.getElementById("counter");
    let multiplierButton = document.getElementById("mulitplier");
    let autoClicker = document.getElementById("auto-clicker");
    let bonusButton = document.getElementById("bonus");

    multiplierButton.disabled = true;
    autoClicker.disabled = true;
    bonusButton.disabled = true;

    counterButton.innerHTML = count.toString();
    multiplierButton.innerHTML = "multiplier" //` you get ${amountToAdd} cookie per click,
    //buy multiplier (${priceMultiplier} cookies) to have ${amountToAdd * 2} cookies per click`;

    function statusButtons(){
        if (count>= priceMultiplier) {
            multiplierButton.disabled = false;
        } else {
            multiplierButton.disabled = true;
        }
        if (count>= priceAutoClicker) {
            autoClicker.disabled = false;
        } else {
            autoClicker.disabled = true;
        }
        if (count>= priceBonus && !isBonusActive) {
            bonusButton.disabled = false;
            console.log("Bonus :" +  isBonusActive);
        } else {
            bonusButton.disabled = true;
        }
    }

    function counterClick() {
        if (isBonusActive === true) {
            count = count + (amountToAdd * 2);
        } else {
            count = count + amountToAdd;
        }
        counterButton.innerHTML = count;
        statusButtons()
    }

    counterButton.addEventListener("click", function () {
        counterClick();
        statusButtons()
    });



    multiplierButton.addEventListener("click", function () {
        if (count >= priceMultiplier) {
            amountToAdd = amountToAdd * 2;
            count = count - priceMultiplier;
            counterButton.innerHTML = count;
            priceMultiplier = priceMultiplier * 3;
            multiplierButton.innerHTML = "multiplier" //`you get ${amountToAdd} cookies per click,
    //buy new multiplier (${priceMultiplier} cookies) to have ${amountToAdd * 2} cookies per click`;

        } else {
            alert("you don't have enough cookies to buy this")
        }
    });


    autoClicker.addEventListener("click", function () {
        if (count >= priceAutoClicker && isAutoClicker === false) {
            count = count - priceAutoClicker;
            counterButton.innerHTML = count;
            priceAutoClicker= priceAutoClicker*3
            setInterval(function () {
                counterClick();
            }, 2000);
            isAutoClicker = true;
        }
        statusButtons()
    });

    bonusButton.addEventListener("click", function () {
        if (count >= priceBonus) {
            isBonusActive = true;
            count = count - priceBonus;
            counterButton.innerHTML = count;
            priceBonus = priceBonus*3;
            let timer = 30;
            setInterval(function () {
                if (timer > 0) {
                    timer = timer - 1;
                    bonusButton.innerHTML = timer;
                }
            }, 1000);

            setTimeout(function () {
                bonusButton.innerHTML = "Bonus";
                isBonusActive = false
                statusButtons()
                }, 30000
            );
        statusButtons()
        }
    });


})()