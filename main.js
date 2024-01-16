const date = new Date();

const month = date.getMonth();
const day = date.getDate();
const year = date.getFullYear();

const dateInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');

document.querySelector('.arrow-icon').addEventListener('click', () => {

    if (day < dateInput.value && month < monthInput.value){
        console.log(true)
        document.getElementById('years').innerHTML = year - yearInput.value - 1;
        document.getElementById('months').innerHTML = Math.abs(12 - monthInput.value);
    }else{
        console.log(false);
        document.getElementById('years').innerHTML = year - yearInput.value - 1;
        document.getElementById('months').innerHTML = Math.abs(12 - monthInput.value);
    }
});