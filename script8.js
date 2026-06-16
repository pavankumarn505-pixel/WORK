// Employee Database
let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 50000 },
    { id: 3, name: "John", salary: 75000 }
];

// 1. Find employees whose salary is above ₹40,000
let highSalaryEmployees = employees.filter(emp => emp.salary > 40000);

console.log("Employees with salary above ₹40,000:");
console.log(highSalaryEmployees);

// 2. Find the first employee whose salary is above ₹60,000
let firstEmployee = employees.find(emp => emp.salary > 60000);

console.log("First employee with salary above ₹60,000:");
console.log(firstEmployee);

// 3. Calculate total company salary expense
let totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);

console.log("Total Company Salary Expense: ₹" + totalSalary);

// 4. Create a new array containing only employee names
let employeeNames = employees.map(emp => emp.name);

console.log("Employee Names:");
console.log(employeeNames);


// Function to check admission eligibility
function checkAdmission(name, age, percentage) {
    
    let student = {
        name: name,
        age: age,
        percentage: percentage
    };

    if (student.age >= 18 && student.percentage >= 60) {
        return `${student.name} is Eligible for Admission`;
    } else {
        return `${student.name} is Not Eligible for Admission`;
    }
}

// Function Call
console.log(checkAdmission("pavan", 19, 75));
console.log(checkAdmission("neelaveni", 17, 80));
console.log(checkAdmission("prabha", 20, 55));




// Cart Data
let cart = [
    { product: "Shoes", price: 2000, qty: 2 },
    { product: "Watch", price: 1500, qty: 1 },
    { product: "Bag", price: 1000, qty: 3 }
];

// 1. Calculate Total Bill
let totalBill = cart.reduce((total, item) => {
    return total + (item.price * item.qty);
}, 0);

console.log("Total Bill: ₹" + totalBill);

// 2. Find Most Expensive Product
let expensiveProduct = cart.reduce((max, item) => {
    return item.price > max.price ? item : max;
});

console.log("Most Expensive Product:");
console.log(expensiveProduct);

// 3. Display All Product Names
let productNames = cart.map(item => item.product);

console.log("Product Names:");
console.log(productNames);


// Input Signal Color
let signal = "red";
let violated = true; // true = rule violated, false = followed rule

switch (signal) {
    case "red":
        console.log("Action: Stop");
        if (violated) {
            console.log("Fine Amount: ₹1000");
        }
        break;

    case "yellow":
        console.log("Action: Ready");
        if (violated) {
            console.log("Fine Amount: ₹500");
        }
        break;

    case "green":
        console.log("Action: Go");
        if (violated) {
            console.log("Fine Amount: ₹0");
        }
        break;

    default:
        console.log("Invalid Signal");
}




// Students Data
let students = [
    { name: "A", mark: 95 },
    { name: "B", mark: 45 },
    { name: "C", mark: 80 },
    { name: "D", mark: 30 }
];

// 1. Find Passed Students (mark >= 50)
let passedStudents = students.filter(student => student.mark >= 50);

console.log("Passed Students:");
console.log(passedStudents);

// 2. Find Failed Students (mark < 50)
let failedStudents = students.filter(student => student.mark < 50);

console.log("Failed Students:");
console.log(failedStudents);

// 3. Create Grade List
let gradeList = students.map(student => {
    let grade;

    if (student.mark >= 90) {
        grade = "A";
    } else if (student.mark >= 75) {
        grade = "B";
    } else if (student.mark >= 50) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    return {
        name: student.name,
        mark: student.mark,
        grade: grade
    };
});

console.log("Grade List:");
console.log(gradeList);



function placeOrder(customerName, ...items) {
    
    console.log("Customer Name:", customerName);

    console.log("Ordered Items:");
    for (let item of items) {
        console.log(item);
    }

    console.log("Total Items:", items.length);
}

placeOrder("Kavin", "Dosa", "Idli", "Coffee");




let balance = 10000;

function deposit(amount) {
    balance = balance + amount;
    return balance;
}

function withdraw(amount) {
    balance = balance - amount;
    return balance;
}

function checkBalance() {
    return balance;
}

console.log("Balance:", checkBalance());

console.log("After Deposit:", deposit(5000));

console.log("After Withdraw:", withdraw(3000));

console.log("Final Balance:", checkBalance());



// Booked Seats
let bookedSeats = ["A1", "A2", "B3", "C4"];

// Check Seat Availability
let seatToCheck = "B3";
let available = true;

for (let i = 0; i < bookedSeats.length; i++) {
    if (bookedSeats[i] === seatToCheck) {
        available = false;
    }
}

console.log("Seat Number:", seatToCheck);

if (available) {
    console.log("Seat Available");
} else {
    console.log("Seat Already Booked");
}

// Print All Booked Seats
console.log("Booked Seats:");

for (let i = 0; i < bookedSeats.length; i++) {
    console.log(bookedSeats[i]);
}




let username = "pavan123";
let password = "mypassword";
let email = "pavan@gmail.com";

if (username.includes(" ")) {
    console.log("Invalid Username");
} else {
    console.log("Valid Username");
}

if (password.length >= 8) {
    console.log("Valid Password");
} else {
    console.log("Invalid Password");
}

if (email.includes("@")) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
}




fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        console.log("Product Titles:");

        products.forEach(product => {
            console.log(product.title);
        });

        console.log("Products Above ₹1000:");

        products.forEach(product => {
            if (product.price > 1000) {
                console.log(product.title);
            }
        });

        let count = 0;

        products.forEach(() => {
            count++;
        });

        console.log("Total Products:", count);

    });




    let dob = new Date("2000-12-06");

console.log("Day:", dob.getDate());
console.log("Month:", dob.getMonth() + 1);
console.log("Year:", dob.getFullYear());
console.log("Weekday Number:", dob.getDay());



let plan = "Premium";

console.log(
    plan === "Mobile" ? "Mobile: Watch on 1 Mobile Device" :
    plan === "Basic" ? "Basic: Watch on 1 Screen" :
    plan === "Standard" ? "Standard: Watch on 2 Screens" :
    plan === "Premium" ? "Premium: Watch on 4 Screens" :
    "Invalid Plan"
);




let patients = [
    { id: 1, name: "jai", status: "Critical" },
    { id: 2, name: "munna", status: "Stable" },
    { id: 3, name: "deva", status: "Critical" },
    { id: 4, name: "shiva", status: "Stable" }
];

// Find Critical Patients
console.log(
    patients.filter(patient => patient.status === "Critical")
);

// Find Patient By ID
console.log(
    patients.find(patient => patient.id === 3)
);



let inventory1 = [
    { id: 1, product: "Laptop", price: 50000 }
];

let inventory2 = [
    { id: 2, product: "Mobile", price: 25000 }
];

// Merge Arrays using Spread Operator
let inventory = [...inventory1, ...inventory2];

// Destructuring
let [{ id, product, price }] = inventory;

// Add New Product using Spread Operator
let updatedInventory = [
    ...inventory,
    { id: 3, product: "macbook", price: 200000 }
];

console.log(inventory);
console.log(id, product, price);
console.log(updatedInventory);




let groupMembers = ["jai", "deva", "bhairava"];

// Add Members
groupMembers.push("munna");
groupMembers.unshift("eswar");

// Remove Members
groupMembers.pop();
groupMembers.shift();

// Insert Member at Specific Position
groupMembers.splice(1, 0, "vijay");

// Display Final Group List
console.log(groupMembers);