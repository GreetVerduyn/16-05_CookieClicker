# 16-05_CookieClicker
live version https://greetverduyn.github.io/16-05_CookieClicker/





css is still difficult

== The mission

create a {clicker}[cookie clicker].

.Step 1: base structure

I used Bootstraps:  * to split the screen in 3 parts
* to make the buttons
but I changed my mind and made my own lay-out


.Step 2: prepare the JavaScript
variables to allow control button and label.
variable to keep track of the score.

.Step 3: increase the score
count = count + amountToAdd

.Step 4: make a multiplier


.Step 5: price of multiplier
amount to add x 2

.Step 6: no credit
if count >= priceMultiplier => you can buy
count =  count - priceMultiplier
adapt inner HTML

.Step 7: display multiplier counter
Display the counter within the multiplier. For example, if the counter is worth
_5_, then the button should display something like _multiplier x5_.

.Step 8: increase the cost
Buying a lot of multiplier is way too easy. For more fun, make it so that each
time a multiplier is purchased the cost of buying a new one is increased.

.Step 9: display the cost
In the text of the multiplier button you should also have the price of the
upgrade.

.Step 10: auto-clicker
Implement a new improvement to buy, the _auto-click_. As the name might suggest
this bonus will automatically add a click to your score each _x_ seconds.

.Step 11: bonus
Implement yet another improvement to buy, the _bonus_. It should grant the
player a boost in score of _200%_ per click for _30 seconds_. When purchased the
player should see a timer with the remaining time inside the bonus button.

.Step 12: deactivate the buttons
Make it so that, if the player doesn't have the points to purchase a multiplier,
an auto-click or an other bonus, he can't.

.Step 13: make it pretty
Your cookie clicker must be pretty, make it look good with CSS or some extra
JavaScript.
