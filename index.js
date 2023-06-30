/* Your Code Here */
let createEmployeeRecord = (employeeCard) => {
    let employee
    return employee = {
       firstName: employeeCard[0],
       familyName: employeeCard[1],
       title: employeeCard[2],
       payPerHour: employeeCard[3],
       timeInEvents: [],
       timeOutEvents: []
    }}
    let createEmployeeRecords = (employeesCardsData) => {
        return employeesCardsData.map(createEmployeeRecord)
     }
     
     function createTimeInEvent(dateStamp) {
        let [date, hour] = dateStamp.split(' ');
        this.timeInEvents.push({
           type: "TimeIn",
           hour: parseInt(hour, 10),
           date
        })
        return this
     }
     function createTimeOutEvent(dateStamp) {
        let [date, hour] = dateStamp.split(' ');
        this.timeOutEvents.push({
           type: "TimeOut",
           hour: parseInt(hour, 10),
           date
        })
        return this
     }
          function hoursWorkedOnDate(dateOfTheForm) {
        let clockIn = this.timeInEvents.find((e) => e.date == dateOfTheForm).hour
        let clockOut = this.timeOutEvents.find((e) => e.date == dateOfTheForm).hour
        return (clockOut - clockIn)/100
     }     function wagesEarnedOnDate(dateOfTheForm) {
        const payPerHour = parseInt(this.payPerHour)
        const hoursWorked = hoursWorkedOnDate.call(this, dateOfTheForm)
        return payPerHour * hoursWorked
     }
     
     function findEmployeeByFirstName(AllEmployeeRecords, firstName) {
        return AllEmployeeRecords.find((e) => {
            return e.firstName
        })
     }
          function calculatePayroll(allEmployeeRecords) {
        return allEmployeeRecords.reduce((previoutAmount, employee) => {
           return previoutAmount + allWagesFor.call(employee)
       }, 0)
     }

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

