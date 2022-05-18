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
adapt innerHTML

.Step 8: increase the cost
price = price x 2 after you click the button

.Step 9: display the cost
adapt inner HTML

.Step 10: auto-clicker
setInterval counterClick every 2 sec.

.Step 11: bonus
set interval timer 30 sec., during this, timer is in innerHTTML
forgot to put it back on bonus, so changed it with if, ELSE

.Step 12: deactivate the buttons
boolean disabled + function statusButtons

.Step 13: make it pretty
SCSS, I didn't know anymore how to use, so I checked my earlier exercise. 
 styling and placing the buttons  - colors, rounded corners, 
 background black because picture is too small
 change the buttons opacity

