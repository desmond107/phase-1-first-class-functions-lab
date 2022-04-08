// Code your solution in this file!


const returnFirstTwoDrivers = function(drivers) {
    let firstTwoDrivers = [drivers[0], drivers[1]];
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function(drivers) {
    let lastTwoDrivers = [drivers[drivers.length - 2], drivers[drivers.length - 1]];
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    let fare = 2;
    function multiplyByNum(fare) {
        return fare * num;
    }
    return multiplyByNum;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectFunction) {
    return selectFunction(drivers);
}