const printDate = function(){
    let currentDate = new Date()
    console.log(currentDate)
}
const printMonth = function(){
 let currentDate = new Date()
 let currentMonth = currentDate.getMonth()
 console.log('The month is'+currentMonth)   
}
const getBatchInfo=function(){
let batchInformation = 'Radon,w3d4, the topic for today is nodejs module system'
console.log(batchInformation)
}
module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getCohortdata = getBatchInfo