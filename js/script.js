(function () {

// counter button
    var count = 0;
    let amountToAdd = 1;
    let priceMultiplier = 10;
    let priceAutoClicker = 10;
    let isAutoClicker = false;
    let priceBonus = 10;
    let isBonusActive = false;

    let counterButton = document.getElementById("counter");
    let multiplierButton = document.getElementById("mulitplier");
    let autoClicker = document.getElementById("auto-clicker");
    let bonusButton = document.getElementById("bonus");

    counterButton.innerHTML = count.toString();
    multiplierButton.innerHTML = ` you get ${amountToAdd} cookie per click,
    buy multiplier (${priceMultiplier} cookies) to have ${amountToAdd * 2} cookies per click`;

    function counterClick() {
        if (isBonusActive === true) {
            count = count + (amountToAdd * 2);
        } else {
            count = count + amountToAdd;
        }
        counterButton.innerHTML = count;
    }

    counterButton.addEventListener("click", function () {
        counterClick();
    });

    multiplierButton.addEventListener("click", function () {
        if (count >= priceMultiplier) {
            amountToAdd = amountToAdd * 2;
            counterButton.innerHTML = count - priceMultiplier;
            count = count - priceMultiplier;
            priceMultiplier = priceMultiplier * 2.5;
            multiplierButton.innerHTML = ` you get ${amountToAdd} cookies per click,
    buy new multiplier (${priceMultiplier} cookies) to have ${amountToAdd * 2} cookies per click`;

        } else {
            alert("you don't have enough cookies to buy this")
        }
    });


    autoClicker.addEventListener("click", function () {
        if (count >= priceAutoClicker && isAutoClicker === false) {
            count = count - priceAutoClicker;
            setInterval(function () {
                counterClick();
            }, 1000);
            isAutoClicker = true;
        }
    });

    bonusButton.addEventListener("click", function () {
        if (count >= priceBonus) {
            isBonusActive = true;
            count = count - priceBonus;
            counterButton.innerHTML = count;
            let timer = 30;
            setInterval(function () {
                if (timer > 0) {
                    timer = timer - 1;
                    bonusButton.innerHTML = timer;
                }
            }, 1000);

            setTimeout(function () {
                    isBonusActive = false;
                bonusButton.innerHTML = "Bonus"
                }, 30000
            );

        }
    });


})()