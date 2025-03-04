const IS_PRESENT = 1;
let empCheck = Math.floor(Math.random() * 2); // Generates 0 or 1

if (empCheck === IS_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}

// UC2 - Calculate Daily Employee Wage
const PART_TIME = 1;
const FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

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

let empType = Math.floor(Math.random() * 3); // 0, 1, or 2
let empHours = getWorkHours(empType);
let empWage = empHours * WAGE_PER_HOUR;
console.log("Employee Wage: $" + empWage);