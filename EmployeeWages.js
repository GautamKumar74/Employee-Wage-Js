const IS_PRESENT = 1;
let empCheck = Math.floor(Math.random() * 2); // Generates 0 or 1

if (empCheck === IS_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}

// Constants for UC2, UC3, UC4, and UC5
const PART_TIME = 1;
const FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS_PER_MONTH = 20;
const MAX_HOURS_IN_MONTH = 160;

function getWorkHours(empType) {
    switch (empType) {
        case PART_TIME:
            return PART_TIME_HOURS;
        case FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

// UC5 - Calculate Wages till total working hours of 160 or max days of 20
let totalEmpHours = 0;
let totalWorkingDays = 0;

while (totalEmpHours < MAX_HOURS_IN_MONTH && totalWorkingDays < WORKING_DAYS_PER_MONTH) {
    totalWorkingDays++;
    let empType = Math.floor(Math.random() * 3); // 0, 1, or 2
    totalEmpHours += getWorkHours(empType);
}

let totalWage = totalEmpHours * WAGE_PER_HOUR;
console.log("Total Employee Wage: $" + totalWage);
console.log("Total Working Days: " + totalWorkingDays);
console.log("Total Hours Worked: " + totalEmpHours);
