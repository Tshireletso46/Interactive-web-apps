const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

if (hourOfDay == 00 && minuteOfDay == 00){
	const taxAsDecimal = parseInt(tax) / 100
  const startingAfterTax =  salary - (salary * taxAsDecimal) 
	const balance = startingAfterTax - transport - food - rent
console.log(balance.toFixed(2))
}
/*
specifically if hour of the day ==0 and minutes of the day ==00 then i pasersed tax which is a number to /100 which is 0.12
then * the salary by taxAsDecimal and after minus the product from the salary which will make the balnce 242.05 instead of 274,46
*/	 