const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = parseInt(tax[913]) / 100
const startingAfterTax = salary - (salary * taxAsDecimal)
const type = parseInt(rent ['large-apartment'])
const balance = startingAfterTax - (expenses.transport + expenses.food + type) 
console.log(balance.toFixed(2))

/**
 * In this code we have three objects being expenses, tax and rent
 * Used parseint function to parse the variable which stores the tax percentage to a decimal number
 * Starting after tax is the salary received after tax hence multilpied salary by the tax as decimal and minused   the solution from the original salary to see how much is left after tax
 * parsed the integer to rent type as it is a string
 * The balance calculates the remaining balance after subtracting all the objects
 * Then finally log the balance to 2 decimal places.
 */