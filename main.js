const date = new Date();

const month = date.getMonth();
const day = date.getDate();
const year = date.getFullYear();

const dateInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');

document.querySelector('.arrow-icon').addEventListener('click', () => {

    let dateCount;
    let leapYear;

    if(((month + 1) / 2) % 2 == 0){
        dateCount = 30;
    }else{
        dateCount = 31
    };

    if(year % 4 == 0){
        leapYear += true;
    }else{
        leapYear += false;
    }

    switch(true){
        case(day < dateInput.value && (month + 1) < monthInput.value): // birthDay < currentDate
        document.getElementById('days').innerHTML = (dateCount - dateInput.value) + day;
        document.getElementById('months').innerHTML = Math.abs(12 - monthInput.value);
        document.getElementById('years').innerHTML = year - yearInput.value - 1;
        break;

        case(day == dateInput.value && (month + 1) == monthInput.value): // birthday == currentDate
        document.getElementById('days').innerHTML = 0;
        document.getElementById('months').innerHTML = 0;
        document.getElementById('years').innerHTML = year - yearInput.value;
        break;

        case(day > dateInput.value && (month + 1) == monthInput.value): // birthDay > currentDate
        document.getElementById('days').innerHTML = Math.abs(dateInput.value - day);
        document.getElementById('months').innerHTML = 0;
        document.getElementById('years').innerHTML = year - yearInput.value;
        break;

        case(day < dateInput.value && (month + 1) == monthInput.value): // birthDay > currentDate
        document.getElementById('days').innerHTML = Math.abs(dateCount - (dateInput.value - day));
        document.getElementById('months').innerHTML = 11;
        document.getElementById('years').innerHTML = year - yearInput.value - 1;
        break;

        case(day > dateInput.value && (month + 1) < monthInput.value): // birthDay > currentDate
        document.getElementById('days').innerHTML = Math.abs(dateInput.value - day);
        document.getElementById('months').innerHTML = Math.abs(12 - monthInput.value + 1);
        document.getElementById('years').innerHTML = year - yearInput.value - 1;
        break;

        case(day > dateInput.value && (month + 1) > monthInput.value): // birthDay > currentDate
        document.getElementById('days').innerHTML = Math.abs(dateInput.value - day);
        document.getElementById('months').innerHTML = Math.abs(month - monthInput.value);
        document.getElementById('years').innerHTML = year - yearInput.value;
        break;

        case(day < dateInput.value && (month + 1) > monthInput.value): // birthDay > currentDate
        document.getElementById('days').innerHTML = Math.abs(dateCount - dateInput.value + day);
        document.getElementById('months').innerHTML = Math.abs(month - monthInput.value) - 1;
        document.getElementById('years').innerHTML = year - yearInput.value;
        break;

        case(day == dateInput.value && (month + 1) < monthInput.value): // birthDay > currentDate
        document.getElementById('days').innerHTML = Math.abs(dateInput.value - day);
        document.getElementById('months').innerHTML = Math.abs(12 - monthInput.value) + 1;
        document.getElementById('years').innerHTML = year - yearInput.value - 1;
        break;

        case(day == dateInput.value && (month + 1) > monthInput.value): // birthDay > currentDate
        document.getElementById('days').innerHTML = Math.abs(dateInput.value - day);
        document.getElementById('months').innerHTML = Math.abs(month - monthInput.value);
        document.getElementById('years').innerHTML = year - yearInput.value;
        break;
    }

    dateInput.value = '';
    monthInput.value = '';
    yearInput.value = '';
});