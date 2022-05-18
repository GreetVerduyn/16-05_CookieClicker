(function () {

    var count = 0;
    let amountToAdd = 1;
    let priceMultiplier = 20;
    let priceAutoClicker = 100;
    let isAutoClicker = false;
    let priceBonus = 500;
    let isBonusActive = false;

    let counterButton = document.getElementById("counter");
    let multiplierButton = document.getElementById("mulitplier");
    let autoClicker = document.getElementById("auto-clicker");
    let bonusButton = document.getElementById("bonus");
    let cookieMonsterText = document.getElementById("cookiemonsterText");

    multiplierButton.disabled = true;
    autoClicker.disabled = true;
    bonusButton.disabled = true;

    counterButton.innerHTML = count.toString();
    multiplierButton.innerHTML += `multiplier`;
    multiplierButton.innerHTML += `(${amountToAdd*2} cookies)`;
    document.getElementById("textCounter").innerHTML = `you get ${amountToAdd} cookie per click`;
    document.getElementById("textMultiplier").innerHTML = `buy multiplier (${priceMultiplier} cookies) to have ${amountToAdd * 2} cookies per click`;
    document.getElementById("textAutoClicker").innerHTML = `buy an auto-clicker (${priceAutoClicker} cookies) to eat some more cookies`;
    document.getElementById("textBonusButton").innerHTML = `for ${priceBonus} coockies, you can eat twice as much during 30 seconds`;


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
        statusButtons();
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
            multiplierButton.innerHTML += `multiplier`;
            multiplierButton.innerHTML += `(${amountToAdd*2} cookies)`;
            document.getElementById("textCounter").innerHTML = `you get ${amountToAdd} cookies per click`;
            document.getElementById("textMultiplier").innerHTML = `buy new multiplier (${priceMultiplier} cookies) to have ${amountToAdd * 2} cookies per click`;

        }
    });

    autoClicker.addEventListener("click", function () {
        if (count >= priceAutoClicker && isAutoClicker === false) {
            count = count - priceAutoClicker;
            counterButton.innerHTML = count;
            priceAutoClicker= priceAutoClicker*3;
            setInterval(function () {
                counterClick();
            }, 2000);
        }
        statusButtons();
        document.getElementById("textAutoClicker").innerHTML = `buy another auto-clicker (${priceAutoClicker} cookies) to eat even more cookies`;
    });

    bonusButton.addEventListener("click", function () {
        if (count >= priceBonus) {
            isBonusActive = true;
            count = count - priceBonus;
            counterButton.innerHTML = count;
            priceBonus = priceBonus*3;
            let timer = 30;
            cookieMonsterText.style.opacity = '0.5';
            setInterval(function () {
                if (timer > 0) {
                    timer = timer - 1;
                    bonusButton.innerHTML = timer;
                } else { bonusButton.innerHTML = "bonus"};

            }, 1000);

            setTimeout(function () {
                bonusButton.innerHTML = "Bonus";
                isBonusActive = false;
                cookieMonsterText.style.opacity = '0';
                statusButtons()
                }, 30000);

        statusButtons();
        document.getElementById("textBonusButton").innerHTML = `for ${priceBonus} coockies, you can eat twice as much during 30 seconds`;
        }
    });

})()