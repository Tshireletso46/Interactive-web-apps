const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const first = data.lists[0][1]
const second = data.lists[1][1]
const third = data.lists[2][1]

const result = []

const extractBiggest = () => {
	if (first[first.length - 1] >= second[second.length - 1] && first[first.length - 1] >= third[third.length - 1]) {
		return first.pop();
	}
	if (second[second.length - 1] >= third[third.length - 1]) {
		return second.pop();
	}

	return third.pop();
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)

/**
 * the code defines a function called extractBiggest
 * that uses conditional statements to determine which array has the biggest last number and 
 *returns that number by popping it off the array.
 *
 * Overall, the code extracts the biggest number from the arrays in data.lists 
 * in a specific order and stores them in the result array. 
 * The resulting array will contain the 15 largest numbers from the original arrays, sorted in descending order.
 */