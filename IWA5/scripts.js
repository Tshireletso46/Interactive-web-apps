const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = 0

let locations = 'RSA'
let currency = ''
let customers = null

let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED                
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED
const items = shoes + toys + shirts + batteries + pens;


let shipping;
if (locations === 'RSA') {
	currency = 'R'
	if (items < 1000) {
		shipping = 400;
		console.log('Price : ', currency, items + shipping)
	}
	else if (items >= 1000 && customers === 2) {
		shipping === 0;
		console.log('Price : ', currency, items + shipping)
	}
	else if (customers !== 1) {
		console.log(FREE_WARNING)
	}
}

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

if (locations === 'NK') {
	console.log(BANNED_WARNING)
}




