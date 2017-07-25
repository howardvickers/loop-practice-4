// This is the version without the extra zero... 

// var amPm = [{time: 'AM'},{time: 'PM'}];

// for (var i=0; i < amPm.length; i++){
//     for (var hour=0; hour < 24; hour++){
//         for (var min=0; min < 60; min++) {
//             for (var sec=0; sec < 60; sec++){
//                 console.log(hour+':'+min+':'+sec+' '+amPm[i].time)
//             }
//         }
//     }
// }

// This is the version with the extra zero..., but I can't quite crack it!!!
var amPm = [{time: 'AM'},{time: 'PM'}];

for (var i=0; i < amPm.length; i++){
    for (var hour=0; hour < 24; hour++){
        for (var min=0; min < 60; min++) {
            for (var sec=0; sec < 60; sec++){
                if (hour.length !> 1){
                    hour = '0'+hour
                        console.log(hour+':'+min+':'+sec+' '+amPm[i].time)
                }
            }
        }
    }
}


// BONUS
// ----------

// 3. Write a set of loops that will print out each second of each hour in a day (in 12 hour clock format).

// For example, your output should look like the following:

// <pre>
// 1:0:0 AM
// ...
// 1:59:59 AM
// 2:0:0 AM
// ...
// 2:59:59 AM
// ...
// 11:59:59 AM
// 12:00:00 PM
// ...
// 12:59:59 PM
// 1:0:0 PM
// ...
// 1:59:59 PM
// 2:0:0 PM
// ...
// 11:59:59 PM
// 12:0:0 AM
// ...
// 12:59:59 AM
// </pre>

// Now, write a function that turns all single digit numbers into their respective two digit format. For example, 1 should be 01 and 9 should be 09. Then use this function to format your output from part 3, so it will now look like the following:

// <pre>
// 01:00:00 AM
// ...
// 12:00:00 PM
// ...
// 01:00:00 PM
// ...
// 12:00:00 AM
// </pre>
 