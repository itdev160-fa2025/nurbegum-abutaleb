var user = 'Nur';
var salutation = 'Hello. ';
var greeting = salutation + user + '! Here are the latest Laptop reviews. ';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

var price = 500,
    studentDiscount = .10,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('student-price');

    priceEl.textContent = price.toFixed(2);
    studentPriceEl.textContent = studentPrice.toFixed(2); 