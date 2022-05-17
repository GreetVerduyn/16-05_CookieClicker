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
    multiplierButton.innerHTML = ` you get ${amountToAdd} cookie per click,
    buy multiplier (${priceMultiplier} cookies) to have ${amountToAdd * 2} cookies per click`;

    function enableButtons() {
        if (count>= priceMultiplier) {
            multiplierButton.disabled = false;
        }
        if (count>= priceAutoClicker) {
            autoClicker.disabled = false;
        }
        if (count>= priceBonus) {
            bonusButton.disabled = false;
        }
    }function disableButtons() {
        if (count< priceMultiplier) {
            multiplierButton.disabled = true;
        }
        if (count< priceAutoClicker) {
            autoClicker.disabled = true;
        }
        if (count< priceBonus) {
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
        enableButtons()
        disableButtons()
    }

    counterButton.addEventListener("click", function () {
        counterClick();
    });



    multiplierButton.addEventListener("click", function () {
        if (count >= priceMultiplier) {
            amountToAdd = amountToAdd * 2;
            count = count - priceMultiplier;
            counterButton.innerHTML = count;
            priceMultiplier = priceMultiplier * 3;
            multiplierButton.innerHTML = ` you get ${amountToAdd} cookies per click,
    buy new multiplier (${priceMultiplier} cookies) to have ${amountToAdd * 2} cookies per click`;

        } else {
            alert("you don't have enough cookies to buy this")
        }
    });


    autoClicker.addEventListener("click", function () {
        if (count >= priceAutoClicker && isAutoClicker === false) {
            count = count - priceAutoClicker;
            counterButton.innerHTML = count;
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
                bonusButton.innerHTML = "Bonus";
                }, 30000
            );

        }
    });


})()