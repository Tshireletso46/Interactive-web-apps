const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if ((hourOfDay == 00 && minuteOfDay !== null) && (hourOfDay == '00' && minuteOfDay == '00')) {
	let taxAsDecimal = tax / '100';
  let startingAfterTax = salary * '1' - taxAsDecimal;
	 balance = startingAfterTax - transport - food - rent;
} else{
    console.log(balance)
}
	
