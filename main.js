const date = new Date();

const month = date.getMonth();
const day = date.getDate();
const year = date.getFullYear();

const dateInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');

let dateCount;
let leapYear;
    
if(((month + 1) / 2) % 2 == 0){
    dateCount = 30;
}else{
    dateCount = 31
};
    
if(year % 4 == 0){
    leapYear += 29;
}else{
    leapYear += 28;
};

document.querySelector('.arrow-icon').addEventListener('click', () => {

     // error handling
     switch(true){

        // empty value error
        case(dateInput.value == ''):
        document.querySelector('.date-error').innerHTML = '<i>This field is required.</i>';
        break;

        case(monthInput.value == ''):
        document.querySelector('.month-error').innerHTML = '<i>This field is required.</i>';
        break;

        case(yearInput.value == ''):
        document.querySelector('.year-error').innerHTML = '<i>This field is required.</i>';
        break;

        case(yearInput.value == '' && monthInput.value == '' && dateInput.value == ''):
        document.querySelector('.year-error').innerHTML = '<i>This field is required.</i>';
        document.querySelector('.month-error').innerHTML = '<i>This field is required.</i>';
        document.querySelector('.date-error').innerHTML = '<i>This field is required.</i>';
        break;

        // invalid value error
        case(dateInput.value > dateCount || dateInput.value <= 0):
        document.querySelector('.date-error').innerHTML = '<i>Must be a valid date.</i>';

        case(monthInput.value > 12 || monthInput.value <= 0):
        document.querySelector('.month-error').innerHTML = '<i>Must be a valid month.</i>';

        case(yearInput.value > year || yearInput.value <= 0):
        document.querySelector('.year-error').innerHTML = '<i>Must be a valid past.</i>';

        
        case(yearInput.value != '' && monthInput.value != '' && dateInput.value != ''):

        switch(true){
            case(day < dateInput.value && (month + 1) < monthInput.value): // birthDay < currentDate
            document.getElementById('days').innerHTML = (dateCount - dateInput.value) + day;
            document.getElementById('months').innerHTML = Math.abs(12 - monthInput.value);
            document.getElementById('years').innerHTML = year - yearInput.value - 1;

            document.querySelector('.date-error').innerHTML = '';
            document.querySelector('.month-error').innerHTML = '';
            document.querySelector('.year-error').innerHTML = '';

            break;
    
            case(day == dateInput.value && (month + 1) == monthInput.value): // birthday == currentDate
            document.getElementById('days').innerHTML = 0;
            document.getElementById('months').innerHTML = 0;
            document.getElementById('years').innerHTML = year - yearInput.value;

            document.querySelector('.date-error').innerHTML = '';
            document.querySelector('.month-error').innerHTML = '';
            document.querySelector('.year-error').innerHTML = '';

            break;
    
            case(day > dateInput.value && (month + 1) == monthInput.value): // birthDay > currentDate
            document.getElementById('days').innerHTML = Math.abs(dateInput.value - day);
            document.getElementById('months').innerHTML = 0;
            document.getElementById('years').innerHTML = year - yearInput.value;

            document.querySelector('.date-error').innerHTML = '';
            document.querySelector('.month-error').innerHTML = '';
            document.querySelector('.year-error').innerHTML = '';

            break;
    
            case(day < dateInput.value && (month + 1) == monthInput.value): // birthDay > currentDate
            document.getElementById('days').innerHTML = Math.abs(dateCount - (dateInput.value - day));
            document.getElementById('months').innerHTML = 11;
            document.getElementById('years').innerHTML = year - yearInput.value - 1;

            document.querySelector('.date-error').innerHTML = '';
            document.querySelector('.month-error').innerHTML = '';
            document.querySelector('.year-error').innerHTML = '';

            break;
    
            case(day > dateInput.value && (month + 1) < monthInput.value): // birthDay > currentDate
            document.getElementById('days').innerHTML = Math.abs(dateInput.value - day);
            document.getElementById('months').innerHTML = Math.abs(12 - monthInput.value + 1);
            document.getElementById('years').innerHTML = year - yearInput.value - 1;

            document.querySelector('.date-error').innerHTML = '';
            document.querySelector('.month-error').innerHTML = '';
            document.querySelector('.year-error').innerHTML = '';

            break;
    
            case(day > dateInput.value && (month + 1) > monthInput.value): // birthDay > currentDate
            document.getElementById('days').innerHTML = Math.abs(dateInput.value - day);
            document.getElementById('months').innerHTML = Math.abs(month - monthInput.value);
            document.getElementById('years').innerHTML = year - yearInput.value;

            document.querySelector('.date-error').innerHTML = '';
            document.querySelector('.month-error').innerHTML = '';
            document.querySelector('.year-error').innerHTML = '';

            break;
    
            case(day < dateInput.value && (month + 1) > monthInput.value): // birthDay > currentDate
            document.getElementById('days').innerHTML = Math.abs(dateCount - dateInput.value + day);
            document.getElementById('months').innerHTML = Math.abs(month - monthInput.value) - 1;
            document.getElementById('years').innerHTML = year - yearInput.value;

            document.querySelector('.date-error').innerHTML = '';
            document.querySelector('.month-error').innerHTML = '';
            document.querySelector('.year-error').innerHTML = '';

            break;
    
            case(day == dateInput.value && (month + 1) < monthInput.value): // birthDay > currentDate
            document.getElementById('days').innerHTML = Math.abs(dateInput.value - day);
            document.getElementById('months').innerHTML = Math.abs(12 - monthInput.value) + 1;
            document.getElementById('years').innerHTML = year - yearInput.value - 1;

            document.querySelector('.date-error').innerHTML = '';
            document.querySelector('.month-error').innerHTML = '';
            document.querySelector('.year-error').innerHTML = '';

            break;
    
            case(day == dateInput.value && (month + 1) > monthInput.value): // birthDay > currentDate
            document.getElementById('days').innerHTML = Math.abs(dateInput.value - day);
            document.getElementById('months').innerHTML = Math.abs(month - monthInput.value);
            document.getElementById('years').innerHTML = year - yearInput.value;

            document.querySelector('.date-error').innerHTML = '';
            document.querySelector('.month-error').innerHTML = '';
            document.querySelector('.year-error').innerHTML = '';

            break;
        }
    };



    dateInput.value = '';
    monthInput.value = '';
    yearInput.value = '';
});