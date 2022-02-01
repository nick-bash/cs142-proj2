// Nicholas Bashour - January 31, 2022 - CS 142 Project 2

'use strict';

function cs142MakeMultiFilter(originalArray)
{
    var currentArray = originalArray; // arrays are all pointers (passed by reference) in JS
    
    var arrayFilterer = (filterCriteria, callback) =>
    {
        if(typeof filterCriteria === 'undefined') 
        {
            return currentArray;
        }

        // filter() method returns a new array (not changing the same one)
        currentArray = currentArray.filter(filterCriteria); 

        // Call the callback with 'this' set to originalArray and first param as currentArray
        if(typeof callback !== 'undefined')
        {        
            callback = callback.bind(originalArray);
            callback(currentArray);
        }
        
        return arrayFilterer; // return self, allowing for chained calls
    };

    return arrayFilterer;
}