const date = new Date();

const month = date.getMonth();
const day = date.getDate();
const year = date.getFullYear();

const dateInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');

document.querySelector('.arrow-icon').addEventListener('click', () => {

    let dateCount = 0;
    let leapYear;

    if(((12 - monthInput.value) / 2) % 2){
        dateCount += 31;
    }else{
        dateCount += 30
    };

    if(year % 4 == 0){
        leapYear += true;
    }else{
        leapYear += false;
    }

    switch(true){
        case(day < dateInput.value && month < monthInput.value):
        document.getElementById('years').innerHTML = year - yearInput.value - 1;
        document.getElementById('months').innerHTML = 12 - monthInput.value;
        document.getElementById('days').innerHTML = (day + (dateCount - dateInput.value));

        case(day > dateInput.value && month < monthInput.value):
        document.getElementById('years').innerHTML = year - yearInput.value - 1;
        document.getElementById('months').innerHTML = 12 + 1 - monthInput.value;
        document.getElementById('days').innerHTML = Math.abs(day - dateInput.value);

        case(day == dateInput.value && (month + 1) == monthInput.value):
        document.getElementById('years').innerHTML = year - yearInput.value;
        document.getElementById('months').innerHTML = 0;
        document.getElementById('days').innerHTML = Math.abs(day - dateInput.value);
    }

});