let basicSalary = 25000;

let hra = basicSalary * 0.20;      // 20% HRA
let bonus = basicSalary * 0.10;    // 10% Bonus

let totalSalary = basicSalary + hra + bonus;

let tax = totalSalary * 0.05;      // 5% Tax

let finalSalary = totalSalary - tax;

console.log("Basic Salary :", basicSalary);
console.log("HRA :", hra);
console.log("Bonus :", bonus);
console.log("Tax :", tax);
console.log("Final Salary :", finalSalary);


let marks = Number (prompt("Enter your marks:"));

if (marks >= 90 && marks <= 100) {
    console.log("Grade: A+");
} 
else if (marks >= 80 && marks <= 89) {
    console.log("Grade: A");
} 
else if (marks >= 70 && marks <= 79) {
    console.log("Grade: B");
} 
else if (marks >= 60 && marks <= 69) {
    console.log("Grade: C");
} 
else if (marks >= 0 && marks < 60) {
    console.log("Grade: Fail");
} 
else {
    console.log("Invalid Marks");
}




let username = prompt("Enter Username:");
let password = prompt("Enter Password:");

if (username === "pavan" && password === "12345") {
    console.log("Login Success");
} else if (username !== "pavan") {
    console.log("Invalid Username");
} else {
    console.log("Invalid Password");
}


let balance = 5000;
let withdrawalAmount = Number(prompt("Enter withdrawal amount:"));

if (withdrawalAmount > balance) {
    console.log("Insufficient Balance");
} else {
    balance = balance - withdrawalAmount;
    console.log("Withdrawal Success");
    console.log("Remaining Balance: " + balance);
}





let purchaseAmount = Number(prompt("Enter Purchase Amount:"));
let discount = 0;

// Calculate Discount
if (purchaseAmount >= 10000) {
    discount = purchaseAmount * 0.20; // 20%
}
else if (purchaseAmount >= 5000) {
    discount = purchaseAmount * 0.10; // 10%
} 
else if (purchaseAmount >= 2000) {
    discount = purchaseAmount * 0.05; // 5%
} 
else {
    discount = 0; // No Discount
}

let finalAmount = purchaseAmount - discount;

// Print Results
console.log("Original Amount :", purchaseAmount);
console.log("Discount :", discount);
console.log("Final Amount :", finalAmount);



let helmet = prompt("Are you wearing a helmet? (Yes/No)");
let license = prompt("Do you have a license? (Yes/No)");

if (helmet === "No" && license === "No") {
    console.log("Fine: ₹3000");
} 
else if (helmet === "No") {
    console.log("Fine: ₹1000");
} 
else if (license === "No") {
    console.log("Fine: ₹2000");
} 
else {
    console.log("No Fine");
}



let attendance = ["P", "P", "A", "P", "A", "P", "P"];

let presentDays = 0;
let absentDays = 0;

for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === "P") {
        presentDays++;
    } else if (attendance[i] === "A") {
        absentDays++;
    }
}

console.log("Present Days :", presentDays);
console.log("Absent Days :", absentDays);




let product = {
    productName: "Laptop",
    price: 50000,
    stock: 10
};

// Print all keys and values using for...in loop
for (let key in product) {
    console.log(key + " : " + product[key]);
}




let distance = 12;
let fare = 0;

if (distance <= 5) {
    fare = distance * 20;
} 
else if (distance <= 10) {
    fare = (5 * 20) + ((distance - 5) * 15);
} 
else {
    fare = (5 * 20) + (5 * 15) + ((distance - 10) * 15);
}

console.log("Distance :", distance, "KM");
console.log("Total Fare : ₹" + fare);


// Mini Employee Management System

let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kiran", salary: 30000 },
    { id: 3, name: "Navi", salary: 40000 }
];

// 1. Print All Employees
console.log("=== Employee Details ===");
for (let i = 0; i < employees.length; i++) {
    console.log(
        "ID:", employees[i].id,
        "| Name:", employees[i].name,
        "| Salary:", employees[i].salary
    );
}

// Initialize highest and lowest salary employees
let highestSalaryEmp = employees[0];
let lowestSalaryEmp = employees[0];
let totalSalary1 = employees[0].salary;

// 2. Find Highest Salary Employee
// 3. Find Lowest Salary Employee
// 4. Calculate Total Salary Expenditure
for (let i = 0; i < employees.length; i++) {

    totalSalary1 += employees[i].salary;

    if (employees[i].salary > highestSalaryEmp.salary) {
        highestSalaryEmp = employees[i];
    }

    if (employees[i].salary < lowestSalaryEmp.salary) {
        lowestSalaryEmp = employees[i];
    }
}

// 5. Count Total Employees
let totalEmployees = employees.length;

// Display Results
console.log("\n=== Report ===");

console.log(
    "Highest Salary Employee:",
    highestSalaryEmp.name,
    "- ₹" + highestSalaryEmp.salary
);

console.log(
    "Lowest Salary Employee:",
    lowestSalaryEmp.name,
    "- ₹" + lowestSalaryEmp.salary
);

console.log("Total Employees:", totalEmployees);

console.log("Total Salary Expenditure: ₹" + totalSalary1);




