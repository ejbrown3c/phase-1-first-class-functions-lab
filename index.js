// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']


const returnFirstTwoDrivers = function(){
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (){
    return drivers.slice(2, 4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



function createFareMultiplier(fare){
    return function (number) {
        return number * fare
    }
}

function fareDoubler (fare){
   return fare * 2
}

function fareTripler (fare) {
    return fare * 3
}

function selectDifferentDrivers (array, func) {
    return func(array)
}