/**
 * take an array as input 
 * find the avarage of odd numbers in an array
 */

function oddAvg(numbers){

    const oddArray= [];
    for(const number of numbers)
    {
        if(number % 2 !==0 )
        {

            oddArray.push(number);
        }
       
    }

    const count= oddArray.length;
    let sum= 0;

    for(const num of oddArray)
    {
        sum += num; 
    }

    const avg= sum / count;
    return avg;
}

const numbers= [3, 6, 9, 12, 11, 23, 20];

const avg= oddAvg(numbers);

console.log("The Avarage of The Odd Number is: ", avg);