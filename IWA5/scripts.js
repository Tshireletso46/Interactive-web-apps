const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0

let locations = 'RSA'
let currency = ''
let customers = null
//declared variables with data typ let so that i can change the assignments going forward. 

let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED                
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED
const items = shoes + toys + shirts + batteries + pens;
//created a new variable called items so that i can groups everthing together

//i have created conditions for every location
let shipping;
if (locations === 'RSA') {
	currency = 'R'
	if (items < 1000) {
		shipping = 400;
		console.log('Price : ', currency, items + shipping)
	}
	else if (items >= 1000 && customers === 1) {
		shipping === 0;
		console.log('Price : ', currency, items + shipping)
	}
	else if (customers !== 1) {
		console.log(FREE_WARNING)
	}
}
/* 
for shipping , if we ship RSA and the items are less than 1000 the shipping will be 400 else if the total items are mounting 
to more than 1000 with strictly 1 customer shipping will be 0 else if a customer is not equal to 1 the system will let them know that 
free shipping only applies to single customer orders
*/

if (locations === 'NAM') {
	currency = '$'
	if (items < 1000) {
		shipping = 600;
		console.log('Price : ', currency, items/17 + shipping)
	}
	else if (items >= 1000 && customers === 1) {
		shipping === 0;
		console.log('Price : ', currency, (items+ shipping)/17)
	}
	else if (customers !== 1) {
		console.log(FREE_WARNING)
	}
}

/*
if we shipping to NAM and the items are less than 100 the shipping will be 600  else if the items are greater 100 with 1 customer 
the shipping will be 0 however if the customer is not 1, the system will let them know taht free shipping only applies to single customer orders
*/

if (locations === 'NK') {
	console.log(BANNED_WARNING)
}
/*however if we ship to North Korea in any case the system will let them know that
 unfortunately we do not ship to your country of residence
 */



