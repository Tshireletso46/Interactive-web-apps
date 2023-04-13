//Order 1
const firstOrder = document.querySelector('[data-key="order1"]')
const firstBiscuits = firstOrder.getAttribute('data-biscuits')
const firstDonuts = firstOrder.getAttribute('data-donuts')
const firstPancakes = firstOrder.getAttribute('data-pancakes')
const firstDelivery = firstOrder.getAttribute('data-delivered')

document.querySelector('.biscuits .count').innerText = firstBiscuits
document.querySelector('.donuts .count').innerText = firstDonuts
document.querySelector('.pancakes .count').innerText = firstPancakes
document.querySelector('.status dd').innerText = firstDelivery

//Order 2
const secondOrder = document.querySelector('[data-key="order2"]')
const secondBiscuits = secondOrder.getAttribute('data-biscuits')
const secondDonuts = secondOrder.getAttribute('data-donuts')
const secondPancakes = secondOrder.getAttribute('data-pancakes')
const secondDelivery = secondOrder.getAttribute('data-delivered')

document.querySelector('[data-key="order2"] .biscuits .count').innerText = secondBiscuits
document.querySelector('[data-key="order2"] .donuts .count').innerText = secondDonuts
document.querySelector('[data-key="order2"] .pancakes .count').innerText = secondPancakes
document.querySelector('[data-key="order2"] .status dd').innerText = secondDelivery

//Order 3
const thirdOrder = document.querySelector('[data-key="order3"]')
const thirdBicuits = thirdOrder.getAttribute('data-biscuits')
const thirdDonuts = thirdOrder.getAttribute('data-donuts')
const thirdPancakes = thirdOrder.getAttribute('data-pancakes')
const thirdDelivery = thirdOrder.getAttribute('data-delivered')

document.querySelector('[data-key="order3"] .biscuits .count').innerText = thirdBicuits
document.querySelector('[data-key="order3"] .donuts .count').innerText = thirdDonuts
document.querySelector('[data-key="order3"] .pancakes .count').innerText = thirdPancakes
document.querySelector('[data-key="order3"] .status dd').innerText = thirdDelivery

