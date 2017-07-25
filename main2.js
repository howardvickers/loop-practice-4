for (var hour=0; hour < 24; hour++){
    for (var min=0; min < 60; min++) {
        for (var sec=0; sec < 60; sec++){
            console.log(hour+':'+min+':'+sec)
        }
    }
}

// 2. Write a set of loops that will print out each second of each hour in a day (in 24 hour clock format).

// For example, your output should look like the following:

// <pre>
// 0:0:0
// 0:0:1
// ...
// 0:0:58
// 0:0:59
// 0:1:0
// 0:1:1
// ...
// 0:1:58
// 0:1:59
// ...
// 23:0:0
// 23:0:1
// ...
// 23:59:58
// 23:59:59
// </pre>

// There should be 24 * 60 * 60 = 82,800 print statements.


 