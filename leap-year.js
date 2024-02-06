/**
 * check a year whether leap year or not leap year
 */

function leapYear(year){

    if((year % 4 ===0 && year % 100 !==0) || year % 400 === 0 )
    {
        return true;
    }

    return false;
}

const result1 = leapYear(2024);
const result2= leapYear(1900);
const result3= leapYear(2041);
const result4= leapYear(2052);

console.log(result1);

console.log('----------------');

console.log(result2);
console.log('-----------------');

console.log(result3);
console.log('------------------');

console.log(result4);
