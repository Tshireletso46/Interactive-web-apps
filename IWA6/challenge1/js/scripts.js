const primaryPhone = 'O748105141'
const secondaryPhone = '0219131568'

// Only change below this line

/*
the function !isNaN checks if the string is a number or not, because it picked up o in the primary phone it is running false 
but because it picked up numbers only in the secondary phone it is running true
*/
const primaryValid = !isNaN(primaryPhone)
const secondaryValid = !isNaN(secondaryPhone)

/*Another solution:
const primaryValid = parseInt(primaryPhone) == (primaryPhone)
const secondaryValid = parseInt(secondaryPhone) == (secondaryPhone)
*/

console.log('Primary phone is valid numerical string:', primaryValid)
console.log('Secondary phone is valid numerical string:', secondaryValid )