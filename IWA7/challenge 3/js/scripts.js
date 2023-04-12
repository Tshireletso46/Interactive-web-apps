const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const owed =`R ${(parseFloat(-leoBalance) + parseFloat(-sarahBalance)).toFixed(2)}`
const leo = `${leoName + leoSurname} Owed: R ${parseFloat(-leoBalance).toFixed(2)}\n`
const sarah = `${sarahName + sarahSurname} Owed: R ${parseFloat(-sarahBalance).toFixed(2)}\n\n`
const total = `\n Total amount owed: ${owed} \n`
const result = leo + sarah + divider + total + divider
console.log(result)



/**
 * Introduced interpolation so that the total  
 * The parseFloat converted the first argument to a string, 
 * parsed both balances for leo and sarah as decimal number literals
 * so that it can return the owed amount when added together.
 * Fixed every amount to 2 decimal places.
 * To display both names and surnames I added them together with a +
 * Displayed the owed amound by parsing the balnces for each debtor.
 * Parsed every amount as a negative amount so that the total amount can be positive.
 * Displayed every new line with \n
 * Then log the result.
 */
  
