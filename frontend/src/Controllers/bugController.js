import bugModel from '../Models/bugModel'

export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id: 23456789,
        name: "Crashes on Load",
        details: "Crashes after 3 seconds",
        steps: "Open Appliction and it will Crash",
        version: "V1.0",
        priority: 2,
        assigned: "Max Powers",
        creator: "Updawg",
        time: "15:23"
    }) )
    data.push(new bugModel({
        _id: 22222222,
        name: "Compile Error",
        details: "Code wasnt able to compile at runtime",
        steps: "Trying looking for syntax errors ",
        version: "V1.0",
        priority: 1,
        assigned: "Max Powers",
        creator: "Updawg",
        time: "6:43"
    }) )

    let sorted = data.sort((a,b)=>{return a.priority - b.priority}) // sorts the array for us based off priority
    return sorted;
}