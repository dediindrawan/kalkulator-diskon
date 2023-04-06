// initialize variable
const form = document.getElementById('form');
const priceInput = document.getElementById('price');
const discountInputOne = document.getElementById('discount-1');
const discountInputTwo = document.getElementById('discount-2');

priceInput.addEventListener('click', () => {
    priceInput.select();
});

discountInputOne.addEventListener('click', () => {
    discountInputOne.select();
});

discountInputTwo.addEventListener('click', () => {
    discountInputTwo.select();
});

// execute form when submit button onclick by user
form.addEventListener('submit', (e) => {
    // hold submitted progress only on main page
    e.preventDefault();

    // execute calculation
    if (priceInput.value == '' || discountInputOne.value == '' || discountInputTwo.value == '') {
        // show alert
        document.querySelector('.alert').style.display = 'block';
    } else {
        // convert string to number
        const convertPrice = parseInt(priceInput.value);
        const convertDiscountOne = parseInt(discountInputOne.value);
        const convertDiscountTwo = parseInt(discountInputTwo.value);

        // execute value & show result
        const calculateOne = (convertDiscountOne / 100) * convertPrice;
        const calculateTwo = (convertPrice - calculateOne) * (convertDiscountTwo / 100);

        const result = convertPrice - calculateOne - calculateTwo;

        document.querySelector('.wrapper-result').innerHTML =
            `
            <small>Rp</small>
            <h2 class="result">${result}</h2>
            `;

        document.querySelector('.result').style.fontSize = '2rem';

        document.querySelector('.alert').style.display = 'none';
    };
});

// create year of copyright
document.querySelector('.copy-years').innerHTML = new Date().getFullYear();