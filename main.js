var months = [{
    name: 'January',
    days: 31
},{
    name: 'February',
    days: 28
},{
    name: 'March',
    days: 31
},{
    name: 'April',
    days: 30
},{
    name: 'May',
    days: 31
},{
    name: 'June',
    days: 30
},{
    name: 'July',
    days: 31
},{
    name: 'August',
    days: 31
},{
    name: 'September',
    days: 30
},{
    name: 'October',
    days: 31
},{
    name: 'November',
    days: 30
},{
    name: 'December',
    days: 31
}];

for (var i=0; i < months.length; i++) {
    for (var k=0; k < months[i].days; k++){
        console.log(months[i].name, k+1)
    }
}


// }

// 1. Write a set of loops that will print out each day of each month in the following format:

// <pre>
// January 1
// January 2
// ...
// January 30
// January 31
// February 1
// February 2
// ...
// February 27
// February 28
// March 1
// March 2
// ...
// Dec 30
// Dec 31
// </pre>

// There should be 365 print statements, one for each day in a year.



