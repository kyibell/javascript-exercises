const leapYears = function(year) {
    const divFour = year % 4 === 0;
    const century = year % 100 === 0;
    const divFourHundred = year % 400 === 0;

    if (divFour && !century || divFourHundred ) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
