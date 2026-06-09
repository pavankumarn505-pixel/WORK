 let age = Number(prompt("Enter your age:"));

 if (age >= 0 && age <= 12) {
     console.log("Child");
 } else if (age >= 13 && age <= 19) {
     console.log("Teenager");
 } else if (age >= 20 && age <= 59) {
     console.log("Adult");
 } else if (age >= 60) {
     console.log("Senior Citizen");
 } else {
     console.log("Invalid Age");
 }



 let salary = Number(prompt("Enter your salary:"));
 let hikePercent;
 let newSalary;

 if (salary < 20000) {
     hikePercent = 20;
 } else if (salary >= 20000 && salary <= 50000) {
     hikePercent = 10;
 } else {
     hikePercent = 5;
 }

 newSalary = salary + (salary * hikePercent / 100);

 console.log("Old Salary: ₹" + salary);
 console.log("Hike: " + hikePercent );
 console.log("New Salary: ₹" + newSalary);



 let units = Number(prompt("Enter units consumed:"));
 let rate;
 let bill;

 if (units <= 100) {
     rate = 5;
 } else if (units <= 200) {
     rate = 7;
 } else {
     rate = 10;
 }

 bill = units * rate;  

 console.log("Units Consumed: " + units );
 console.log("Rate per Unit: ₹" + rate );
 console.log("Total Bill: ₹" + bill);



 let balance = 10000;
 let withdrawAmount = Number(prompt("Enter withdrawal amount:"));

 if (withdrawAmount <= balance) {
     balance = balance - withdrawAmount;

     console.log("Withdrawal Successful");
     console.log("Remaining Balance: ₹" , balance);
 } else {
     console.log("Insufficient Funds");
 }




 let username = prompt("Enter Username:");
 let password = prompt("Enter Password:");

 if (username === "pavan" && password === "12345") {
     alert("Login Successful");
 } else {
     alert("Invalid Username or Password");
 }



 let rechargeAmount = Number(prompt("Enter Recharge Amount:"));

 if (rechargeAmount >= 499) {
     console.log("Netflix Offer");
 } else if (rechargeAmount >= 299) {
     console.log("2GB Extra Data");
 } else {
     console.log("No Offer");
 }

let color = prompt("Enter Signal Color (Red, Yellow, Green):");

switch (color) {
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



let workingDays = 100; 
alert ("number of workingDays = "+ workingDays);
let presentDays = Number(prompt("Enter present days:"));

let attendancePercentage = (presentDays / workingDays) * 100;

console.log("Attendance Percentage: " + attendancePercentage);

if (attendancePercentage >= 75) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}



let ticketPrice = 500;

let numberOfTickets = Number(prompt("Enter Number of Tickets:"));

let totalAmount = ticketPrice * numberOfTickets;
let gst = totalAmount * 0.05;
let finalAmount = totalAmount + gst;

console.log("Ticket Price: ₹" + ticketPrice );
console.log("Number of Tickets: " + numberOfTickets );
console.log("Total Amount: ₹" + totalAmount );
console.log("GST (5%): ₹" + gst );
console.log("Final Amount: ₹" + finalAmount);





let foodCost = Number(prompt("Enter Food Cost:"));

let discount = 0;

if (foodCost > 2000) {
    discount = foodCost * 0.10;  10% Discount
}

let finalBill = foodCost - discount;

console.log("Food Cost: ₹" + foodCost);
console.log("Discount: ₹" + discount);
console.log("Final Bill: ₹" + finalBill);



let Age = Number(prompt("Enter Age:"));
let height = Number(prompt("Enter Height (cm):"));
let weight = Number(prompt("Enter Weight (kg):"));

if (Age >= 18) {

    if (height >= 160) {

        if (weight >= 55) {
            console.log("Eligible for Police Recruitment");
        } else {
            console.log("Rejected: Weight must be at least 55 kg");
        }

    } else {
        console.log("Rejected: Height must be at least 160 cm");
    }

} else {
    console.log("Rejected: Age must be at least 18 years");
}






let sub1 = Number(prompt("Enter Subject 1 Marks:"));
let sub2 = Number(prompt("Enter Subject 2 Marks:"));
let sub3 = Number(prompt("Enter Subject 3 Marks:"));
let sub4 = Number(prompt("Enter Subject 4 Marks:"));
let sub5 = Number(prompt("Enter Subject 5 Marks:"));

let total = sub1 + sub2 + sub3 + sub4 + sub5;
let percentage = total / 5;

let grade;

if (percentage >= 90) {
    grade = "A+";
} else if (percentage >= 80) {
    grade = "A";
} else if (percentage >= 70) {
    grade = "B";
} else if (percentage >= 60) {
    grade = "C";
} else {
    grade = "Fail";
}

console.log("Total Marks: " + total);
console.log("Percentage: " + percentage);
console.log("Grade: " + grade);





let time = Number(prompt("Enter Hour (0-23):"));

if (time >= 6 && time < 14) {
    console.log("Morning Shift");
} 
else if (time >= 14 && time < 22) {
    console.log("Afternoon Shift");
} 
else if ((time >= 22 && time <= 23) || (time >= 0 && time < 6)) {
    console.log("Night Shift");
} 
else {
    console.log("Invalid Time");
}




let age1 = Number(prompt("Enter Age1:"));
let salary1 = Number(prompt("Enter Monthly Salary1:"));
let experience = Number(prompt("Enter Experience (Years):"));

if (age >= 21) {
    if (salary1 >= 25000) {
        if (experience >= 2) {
           console.log("Eligible for Loan");
        } else {
           console.log("Not Eligible: Minimum 2 Years Experience Required");
        }
    } else {
       console.log("Not Eligible: Salary Must Be ₹25000 or More");
    }
} else {
   console.log("Not Eligible: Age1 Must Be 21 or Above");
}



let distance = Number(prompt("Enter Distance (KM):"));

let fare;

if (distance <= 5) {
    fare = distance * 20;
} else {
    fare = (5 * 20) + ((distance - 5) * 15);
}

console.log("Distance: " + distance + " KM ");
console.log("Total Fare: ₹" + fare);



let number = Number(prompt("Enter a Number:"));

for (let i = 1; i <= 10; i++) {
   console.log(number + " x " + i + " = " + (number * i));
}





let password1 = prompt("Enter Password:");

let count = 0;

for (let ch of password1) {
    count++;
}

if (count < 6) {
    console.log("Weak Password1");
}
else if (count <= 10) {
    console.log("Medium Password1");
}
else {
    console.log("Strong Password1");
}




let Salary = Number(prompt("Enter Salary:"));
let Experience = Number(prompt("Enter Experience (Years):"));

let bonusPercentage;
let bonusAmount;

if (Experience >= 0 && Experience <= 2) {
    bonusPercentage = 5;
} else if (Experience >= 3 && Experience <= 5) {
    bonusPercentage = 10;
} else {
    bonusPercentage = 20;
}

bonusAmount = (salary * bonusPercentage) / 100;

console.log("Salary: ₹" + salary );
console.log("Experience: " + Experience + " Years ");
console.log("Bonus Percentage: " + bonusPercentage + " % ");
console.log("Bonus Amount: ₹" + bonusAmount);




let count1 = 10;

while (count1 >= 1) {
    console.log(count1);
    count1--;
}

console.log("Happy New Year");



let degreeCompleted = prompt("Degree Completed? (yes/no)");
let communication = prompt("Communication Skill (good/poor)");
let technicalScore = Number(prompt("Enter Technical Score:"));

if (degreeCompleted === "yes") {

    if (communication === "good") {

        if (technicalScore >= 70) {
            console.log("Selected for Interview");
        } else {
            console.log("Rejected: Technical Score must be 70 or above");
        }

    } else {
        console.log("Rejected: Communication Skills are not Good");
    }

} else {
    console.log("Rejected: Degree Not Completed");
}
