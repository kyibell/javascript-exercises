const removeFromArray = function(arr, ...target) {
    return arr.filter(val => !target.includes(val));

};

// Do not edit below this line
module.exports = removeFromArray;
