/**
 * Remove duplicate item from an array
 */

function noDuplicate(array){

    const uniqueArray= [];

    for(const item of array)
    {
        if(uniqueArray.includes(item) === false)
        {
            uniqueArray.push(item);
        }
    }

    return uniqueArray;
}

const duplicateArray= ['kabir', 'nahid', 'fahim', 'arif', 'kabir', 'maruf', 'nahid'];

const finalArray= noDuplicate(duplicateArray);

console.log(finalArray);