let signal = prompt("Enter Signal Color (Red, Yellow, Green):");

switch (signal.toLowerCase()) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal Color");
}


//  task2

for (let i = 1; i <= 30; i++) {
    console.log("Employee " + i + " Present");
}


// task3

let balance = 10000;

while (balance > 0) {
    balance = balance - 500;
    console.log("Remaining Balance: ₹" + balance);
}



// task4


let age = 18;
let percentage = 75;
let entranceExamPassed = true;

if (age >= 18) {
    if (percentage >= 70) {
        if (entranceExamPassed) {
            console.log("Admission Approved");
        } else {
            console.log("Admission Rejected: Entrance Exam Not Passed");
        }
    } else {
        console.log("Admission Rejected: Percentage is Less Than 70");
    }
} else {
    console.log("Admission Rejected: Age is Less Than 18");
}



//  task5



function deliveryStatus(customerName, foodItem, deliveryAddress) {
    console.log("Hello " + customerName + "!");
    console.log("Your order for " + foodItem + " has been confirmed.");
    console.log("It will be delivered to: " + deliveryAddress);
    console.log("Thank you for ordering with us!");
}

// Function Call
deliveryStatus(
    "Rahul",
    "Veg Biryani",
    "Bangalore"
);




//task6


function calculateSalary(basicSalary, hra, allowance) {
    let totalSalary = basicSalary + hra + allowance;
    return totalSalary;
}

function calculateBonus(salary) {
    let bonus = salary * 0.10; // 10% Bonus
    return bonus;
}

// Calculate Salary
let salary = calculateSalary(25000, 5000, 2000);

// Pass returned salary into bonus function
let bonus = calculateBonus(salary);

console.log("Total Salary: ₹" + salary);
console.log("Bonus: ₹" + bonus);
console.log("Final Amount: ₹" + (salary + bonus));



//task7

function applyDiscount(amount, callback) {
    let discount = amount * 0.10; // 10% Discount
    let finalAmount = amount - discount;

    console.log("Original Amount: ₹" + amount);
    console.log("Discount: ₹" + discount);

    callback(finalAmount);
}

function generateInvoice(finalAmount) {
    console.log("Invoice Generated");
    console.log("Final Amount to Pay: ₹" + finalAmount);
}

// Function Call
applyDiscount(5000, generateInvoice);



// task8


function* promotionalOffers() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

// Create Generator Object
let offers = promotionalOffers();

// Get offers one by one
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);

//task 9


let scienceStudents = {
    science1: "Rahul",
    science2: "Kiran"
};

let commerceStudents = {
    commerce1: "Priya",
    commerce2: "Rohit"
};

// Merge Objects
let studentDatabase = {
    ...scienceStudents,
    ...commerceStudents
};

console.log(studentDatabase);

//task 10


function calculateTotalMarks(studentName, ...marks) {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    console.log("Student Name: " + studentName);
    console.log("Total Marks: " + total);
}

// Function Call
calculateTotalMarks("Rahul", 85, 90, 78, 88, 92);
calculateTotalMarks("Priya", 75, 80, 95);


// task11



let employee = {
    name: "Rahul",
    department: "IT",
    salary1: 50000,
    experience: 5
};

// Object Destructuring
let { name, department, salary1, experience } = employee;

// Display Properties
console.log("Name:", name);
console.log("Department:", department);
console.log("Salary1:", salary1);
console.log("Experience:", experience, "Years");


//task12

let products = [
    { name: "Mobile", price: 15000, category: "Electronics" },
    { name: "Headphones", price: 3000, category: "Electronics" },
    { name: "Laptop", price: 55000, category: "Electronics" },
    { name: "Smartwatch", price: 7000, category: "Accessories" },
    { name: "Keyboard", price: 2500, category: "Accessories" }
];

// Filter products with price above ₹5000
let expensiveProducts = products.filter(product => product.price > 5000);

console.log("Products Above ₹5000:");
console.log(expensiveProducts);

//task13


let customers = [
    { id: 1, name: "Rahul", purchaseAmount: 25000 },
    { id: 2, name: "Priya", purchaseAmount: 45000 },
    { id: 3, name: "Kiran", purchaseAmount: 60000 },
    { id: 4, name: "Naveen", purchaseAmount: 75000 }
];

// Find the first customer with purchase amount above ₹50,000
let premiumCustomer = customers.find(
    customer => customer.purchaseAmount > 50000
);

console.log("First Premium Customer:");
console.log(premiumCustomer);


//task14

let expenses = [12000, 8500, 15000, 5000, 10000];

// Calculate total expenses using reduce()
let totalExpenses = expenses.reduce((total, expense) => {
    return total + expense;
}, 0);

console.log("Total Company Expenses: ₹" + totalExpenses);



//task15


let players = [
    { name: "pavan", age: 21 },
    { name: "neelaveni", age: 25 },
    { name: "kumar", age: 19 },
    { name: "Naveen", age: 22 }
    
];

// Check if all players are above 18
let eligiblePlayers = players.every(player => player.age > 18);

console.log("All Players Above 18:", eligiblePlayers);



//task16

let candidates = [
    { name: "Rahul", skills: ["JavaScript", "Node.js"] },
    { name: "Priya", skills: ["Python", "Django"] },
    { name: "Kiran", skills: ["React", "JavaScript"] },
    { name: "Naveen", skills: ["Java", "Spring Boot"] }
];

// Check if at least one candidate knows React
let reactDeveloperAvailable = candidates.some(
    candidate => candidate.skills.includes("React")
);

console.log("React Developer Available:", reactDeveloperAvailable);



//task17

let mobileNumber = "9876543210";

if (
    mobileNumber.length === 10 &&
    (
        mobileNumber.startsWith("6") ||
        mobileNumber.startsWith("7") ||
        mobileNumber.startsWith("8") ||
        mobileNumber.startsWith("9")
    )
) {
    console.log("Valid Mobile Number");
} else {
    console.log("Invalid Mobile Number");
}



//task18


let title = "Learn JavaScript Complete Course";

// Convert to lowercase
let slug = title.toLowerCase()
                .split(" ")
                .join("-");

console.log(slug);



//task19
let employees = [
    { id: 1, name: "Rahul", salary: 45000 },
    { id: 2, name: "Priya", salary: 65000 },
    { id: 3, name: "Kiran", salary: 35000 },
    { id: 4, name: "Naveen", salary: 55000 }
];

// Highest → Lowest Salary
let highestToLowest = [...employees].sort(
    (a, b) => b.salary - a.salary
);

console.log("Highest to Lowest Salary:");
console.log(highestToLowest);

// Lowest → Highest Salary
let lowestToHighest = [...employees].sort(
    (a, b) => a.salary - b.salary
);

console.log("Lowest to Highest Salary:");
console.log(lowestToHighest);



//task20


let movies = [
    "Pushpa 2",
    "Salaar",
    "RRR",
    "KGF 2"
];

// Create Booking IDs using map()
let bookingIds = movies.map((movie, index) => {
    return {
        movieName: movie,
        bookingId: "MOV" + (index + 1)
    };
});

console.log(bookingIds);


