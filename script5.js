const students = [
  { id: 1, name: "pavan", department: "CSE", mark: 95 },
  { id: 2, name: "neela", department: "ECE", mark: 82 },
  { id: 3, name: "veni", department: "MECH", mark: 72 },
  { id: 4, name: "kumar", department: "IT", mark: 48 },
  { id: 5, name: "Naveen", department: "CSE", mark: 88 }
];

// Function to display all student names
function displayStudentNames() {
  console.log("Student Names:");
  students.forEach(student => {
    console.log(student.name);
  });
}

// Function to calculate total marks
function calculateTotalMarks() {
  let total = 0;

  students.forEach(student => {
    total += student.mark;
  });

  console.log("Total Marks:", total);
}

// Function to find students who scored above 80
function findTopStudents() {
  console.log("Students Scored Above 80:");

  students.forEach(student => {
    if (student.mark > 80) {
      console.log(student.name + " - " + student.mark);
    }
  });
}

// Function to get grade
function getGrade(mark) {
  if (mark >= 90) {
    return "A";
  } else if (mark >= 75) {
    return "B";
  } else if (mark >= 50) {
    return "C";
  } else {
    return "Fail";
  }
}

// Function to print student details
function printStudentDetails() {
  console.log("\nStudent Details:");

  students.forEach(student => {
    console.log(
      "ID: " + student.id +
      ", Name: " + student.name +
      ", Department: " + student.department +
      ", Mark: " + student.mark +
      ", Grade: " + getGrade(student.mark)
    );
  });
}

// Function Calls
displayStudentNames();
calculateTotalMarks();
findTopStudents();
printStudentDetails();




const employees = [
  { id: 1, name: "pavan", salary: 25000, department: "IT" },
  { id: 2, name: "neela", salary: 45000, department: "HR" },
  { id: 3, name: "veni", salary: 35000, department: "Finance" },
  { id: 4, name: "kumar", salary: 28000, department: "Marketing" },
  { id: 5, name: "Naveen", salary: 50000, department: "IT" }
];

// Function to print all employee names
function printEmployeeNames() {
  console.log("Employee Names:");
  employees.forEach(emp => {
    console.log(emp.name);
  });
}

// Function to calculate total salary expense
function calculateTotalSalary() {
  let totalSalary = 0;

  employees.forEach(emp => {
    totalSalary += emp.salary;
  });

  console.log("\nTotal Company Salary Expense: ₹" + totalSalary);
}

// Function to display employees earning above ₹30,000
function highSalaryEmployees() {
  console.log("\nEmployees Earning Above ₹30,000:");

  employees.forEach(emp => {
    if (emp.salary > 30000) {
      console.log(emp.name + " - ₹" + emp.salary);
    }
  });
}

// Function using Switch Statement
function getDepartmentDescription(department) {
  switch (department) {
    case "IT":
      return "Information Technology Department";

    case "HR":
      return "Human Resources Department";

    case "Finance":
      return "Finance and Accounts Department";

    case "Marketing":
      return "Marketing Department";

    default:
      return "Unknown Department";
  }
}

// Function to print payroll report
function payrollReport() {
  console.log("\nPayroll Report:");

  employees.forEach(emp => {
    console.log(
      "ID: " + emp.id +
      ", Name: " + emp.name +
      ", Salary: ₹" + emp.salary +
      ", Department: " + getDepartmentDescription(emp.department)
    );
  });
}

// Callback Function
function generatePayroll(callback) {
  console.log("\nGenerating Payroll Report...");
  callback();
}

// Function Calls
printEmployeeNames();
calculateTotalSalary();
highSalaryEmployees();

// Callback Execution
generatePayroll(payrollReport);






const foods = [
  { id: 1, foodName: "Chicken Biryani", price: 250, category: "Main Course" },
  { id: 2, foodName: "Veg Burger", price: 120, category: "Fast Food" },
  { id: 3, foodName: "Pizza", price: 350, category: "Fast Food" },
  { id: 4, foodName: "Ice Cream", price: 90, category: "Dessert" },
  { id: 5, foodName: "Paneer Curry", price: 220, category: "Main Course" }
];

// Function to display all food names
function displayFoodNames() {
  console.log("Food Names:");

  foods.forEach(food => {
    console.log(food.foodName);
  });
}

// Function to calculate total menu value
function calculateMenuValue() {
  let total = 0;

  foods.forEach(food => {
    total += food.price;
  });

  console.log("\nTotal Menu Value: ₹" + total);
}

// Function to display foods above ₹200
function showExpensiveFoods() {
  console.log("\nFoods Above ₹200:");

  foods.forEach(food => {
    if (food.price > 200) {
      console.log(food.foodName + " - ₹" + food.price);
    }
  });
}

// Function using switch statement
function getCategoryDescription(category) {
  switch (category) {
    case "Main Course":
      return "Full meal items";

    case "Fast Food":
      return "Quick snacks and meals";

    case "Dessert":
      return "Sweet dishes";

    default:
      return "Other Food Category";
  }
}

// Function to display food details
function printFoodDetails() {
  console.log("\nFood Details:");

  foods.forEach(food => {
    console.log(
      "ID: " + food.id +
      ", Name: " + food.foodName +
      ", Price: ₹" + food.price +
      ", Category: " + getCategoryDescription(food.category)
    );
  });
}

// Callback Function
function orderConfirmation(callback) {
  console.log("\nProcessing Order...");
  callback();
}

// Function for Order Success Message
function confirmOrder() {
  console.log("Order Confirmed Successfully!");
}

// Function Calls
displayFoodNames();
calculateMenuValue();
showExpensiveFoods();
printFoodDetails();

// Callback Execution
orderConfirmation(confirmOrder);



const movies = [
  {
    movieName: "salaar",
    ticketPrice: 250,
    availableSeats: 50,
    language: "Telugu"
  },
  {
    movieName: "saaho",
    ticketPrice: 200,
    availableSeats: 30,
    language: "Tamil"
  },
  {
    movieName: "kalki",
    ticketPrice: 300,
    availableSeats: 0,
    language: "Kannada"
  },
  {
    movieName: "sprite",
    ticketPrice: 220,
    availableSeats: 40,
    language: "Hindi"
  },
  {
    movieName: "RRR",
    ticketPrice: 280,
    availableSeats: 25,
    language: "Telugu"
  }
];

// Function to display all movie names
function displayMovieNames() {
  console.log("Movie Names:");

  movies.forEach(movie => {
    console.log(movie.movieName);
  });
}

// Function to calculate total available seats
function calculateTotalSeats() {
  let totalSeats = 0;

  movies.forEach(movie => {
    totalSeats += movie.availableSeats;
  });

  console.log("\nTotal Available Seats:", totalSeats);
}

// Function to check booking availability
function checkBooking() {
  console.log("\nBooking Status:");

  movies.forEach(movie => {
    if (movie.availableSeats > 0) {
      console.log(movie.movieName + " → Booking Available");
    } else {
      console.log(movie.movieName + " → House Full");
    }
  });
}

// Function using switch statement
function getLanguageDescription(language) {
  switch (language) {
    case "Telugu":
      return "Telugu Movie";

    case "Hindi":
      return "Hindi Movie";

    case "Tamil":
      return "Tamil Movie";

    case "Kannada":
      return "Kannada Movie";

    default:
      return "Other Language Movie";
  }
}

// Function to print movie details
function printMovieDetails() {
  console.log("\nMovie Details:");

  movies.forEach(movie => {
    console.log(
      "Movie: " + movie.movieName +
      ", Ticket Price: ₹" + movie.ticketPrice +
      ", Seats: " + movie.availableSeats +
      ", Language: " + getLanguageDescription(movie.language)
    );
  });
}

// Callback Function
function generateBooking(callback) {
  console.log("\nProcessing Booking...");
  callback();
}

// Booking Confirmation Function
function bookingConfirmation() {
  console.log("Booking Confirmed Successfully!");
}

// Function Calls
displayMovieNames();
calculateTotalSeats();
checkBooking();
printMovieDetails();

// Callback Execution
generateBooking(bookingConfirmation);




const patients = [
  {
    patientId: 1,
    patientName: "Ramesh",
    age: 65,
    disease: "Heart"
  },
  {
    patientId: 2,
    patientName: "Suresh",
    age: 45,
    disease: "Diabetes"
  },
  {
    patientId: 3,
    patientName: "Anjali",
    age: 72,
    disease: "Orthopedic"
  },
  {
    patientId: 4,
    patientName: "Priya",
    age: 30,
    disease: "Skin"
  },
  {
    patientId: 5,
    patientName: "Kiran",
    age: 68,
    disease: "Heart"
  }
];

// Function to display all patient names
function displayPatientNames() {
  console.log("Patient Names:");

  patients.forEach(patient => {
    console.log(patient.patientName);
  });
}

// Function to count total patients
function countPatients() {
  console.log("\nTotal Patients:", patients.length);
}

// Function to print patients above age 60
function seniorPatients() {
  console.log("\nPatients Above Age 60:");

  patients.forEach(patient => {
    if (patient.age > 60) {
      console.log(
        patient.patientName + " - Age: " + patient.age
      );
    }
  });
}

// Function using switch statement
function getDepartment(disease) {
  switch (disease) {
    case "Heart":
      return "Cardiology Department";

    case "Diabetes":
      return "Endocrinology Department";

    case "Orthopedic":
      return "Orthopedics Department";

    case "Skin":
      return "Dermatology Department";

    default:
      return "General Medicine";
  }
}

// Function to print patient details
function printPatientDetails() {
  console.log("\nPatient Details:");

  patients.forEach(patient => {
    console.log(
      "ID: " + patient.patientId +
      ", Name: " + patient.patientName +
      ", Age: " + patient.age +
      ", Department: " + getDepartment(patient.disease)
    );
  });
}

// Callback Function
function appointmentProcess(callback) {
  console.log("\nProcessing Appointment...");
  callback();
}

// Appointment Confirmation Function
function appointmentConfirmation() {
  console.log("Appointment Confirmed Successfully!");
}

// Function Calls
displayPatientNames();
countPatients();
seniorPatients();
printPatientDetails();

// Callback Execution
appointmentProcess(appointmentConfirmation);






const books = [
  {
    bookId: 1,
    bookName: "JavaScript Basics",
    author: "John Smith",
    price: 650,
    category: "Programming"
  },
  {
    bookId: 2,
    bookName: "Python Guide",
    author: "David Miller",
    price: 550,
    category: "Programming"
  },
  {
    bookId: 3,
    bookName: "The Alchemist",
    author: "Paulo Coelho",
    price: 400,
    category: "Novel"
  },
  {
    bookId: 4,
    bookName: "Wings of Fire",
    author: "A.P.J. Abdul Kalam",
    price: 300,
    category: "Biography"
  },
  {
    bookId: 5,
    bookName: "Data Structures",
    author: "Mark Lee",
    price: 800,
    category: "Programming"
  }
];

// Function to display all book names
function displayBookNames() {
  console.log("Book Names:");

  books.forEach(book => {
    console.log(book.bookName);
  });
}

// Function to calculate total book value
function calculateTotalValue() {
  let total = 0;

  books.forEach(book => {
    total += book.price;
  });

  console.log("\nTotal Book Value: ₹" + total);
}

// Function to display books above ₹500
function expensiveBooks() {
  console.log("\nBooks Above ₹500:");

  books.forEach(book => {
    if (book.price > 500) {
      console.log(book.bookName + " - ₹" + book.price);
    }
  });
}

// Function using Switch Statement
function getCategoryDescription(category) {
  switch (category) {
    case "Programming":
      return "Technical Programming Book";

    case "Novel":
      return "Fiction Story Book";

    case "Biography":
      return "Life History Book";

    default:
      return "General Category";
  }
}

// Function to display book details
function printBookDetails() {
  console.log("\nBook Details:");

  books.forEach(book => {
    console.log(
      "ID: " + book.bookId +
      ", Name: " + book.bookName +
      ", Author: " + book.author +
      ", Price: ₹" + book.price +
      ", Category: " + getCategoryDescription(book.category)
    );
  });
}

// Function to issue a book
function issueBook(bookName) {
  console.log("\nBook Issued Successfully!");
  console.log("Book Name: " + bookName);
}

// Function Calls
displayBookNames();
calculateTotalValue();
expensiveBooks();
printBookDetails();

// Issue a Book
issueBook("JavaScript Basics");


const products = [
  {
    productId: 1,
    productName: "Laptop",
    price: 50000,
    stock: 15
  },
  {
    productId: 2,
    productName: "Mobile",
    price: 20000,
    stock: 8
  },
  {
    productId: 3,
    productName: "Headphones",
    price: 3000,
    stock: 25
  },
  {
    productId: 4,
    productName: "Smart Watch",
    price: 7000,
    stock: 5
  },
  {
    productId: 5,
    productName: "Keyboard",
    price: 1500,
    stock: 12
  }
];

// Function to display all products
function displayProducts() {
  console.log("All Products:");

  products.forEach(product => {
    console.log(product.productName);
  });
}

// Function to calculate inventory value
function calculateInventoryValue() {
  let totalValue = 0;

  products.forEach(product => {
    totalValue += product.price * product.stock;
  });

  console.log("\nTotal Inventory Value: ₹" + totalValue);
}

// Function to find products with stock less than 10
function lowStockProducts() {
  console.log("\nProducts with Stock Less Than 10:");

  products.forEach(product => {
    if (product.stock < 10) {
      console.log(
        product.productName + " - Stock: " + product.stock
      );
    }
  });
}

// Function to display stock status
function displayStockStatus() {
  console.log("\nStock Status:");

  products.forEach(product => {
    let status;

    if (product.stock === 0) {
      status = "Out of Stock";
    } else if (product.stock < 10) {
      status = "Low Stock";
    } else {
      status = "In Stock";
    }

    console.log(product.productName + " → " + status);
  });
}

// Function to generate product report
function productReport() {
  console.log("\nProduct Report:");

  products.forEach(product => {
    console.log(
      "ID: " + product.productId +
      ", Name: " + product.productName +
      ", Price: ₹" + product.price +
      ", Stock: " + product.stock
    );
  });
}

// Callback Function
function generateReport(callback) {
  console.log("\nGenerating Product Report...");
  callback();
}

// Function Calls
displayProducts();
calculateInventoryValue();
lowStockProducts();
displayStockStatus();

// Callback Execution
generateReport(productReport);



function productReport() {
    console.log("Product Report");

    products.forEach(product => {
        console.log(
            "ID: " + product.productId +
            ", Name: " + product.productName +
            ", Price: ₹" + product.price +
            ", Stock: " + product.stock
        );
    });
}

// Callback Function
function generateReport(callback) {
    console.log("Generating Product Report...");
    callback();
}

// Calling Callback Function
generateReport(productReport);



const applicants = [
  {
    name: "pavan",
    age: 19,
    percentage: 85,
    department: "CSE"
  },
  {
    name: "neela",
    age: 17,
    percentage: 75,
    department: "ECE"
  },
  {
    name: "veni",
    age: 20,
    percentage: 58,
    department: "MECH"
  },
  {
    name: "kumar",
    age: 18,
    percentage: 90,
    department: "IT"
  },
  {
    name: "Naveen",
    age: 21,
    percentage: 65,
    department: "CSE"
  }
];

// Function to display applicant names
function displayApplicantNames() {
  console.log("Applicant Names:");

  applicants.forEach(applicant => {
    console.log(applicant.name);
  });
}

// Function to check eligibility
function checkEligibility() {
  console.log("\nEligibility Status:");

  applicants.forEach(applicant => {
    if (applicant.age >= 18 && applicant.percentage >= 60) {
      console.log(applicant.name + " → Eligible");
    } else {
      console.log(applicant.name + " → Not Eligible");
    }
  });
}

// Function to count eligible students
function countEligibleStudents() {
  let count = 0;

  applicants.forEach(applicant => {
    if (applicant.age >= 18 && applicant.percentage >= 60) {
      count++;
    }
  });

  console.log("\nTotal Eligible Students:", count);
}

// Function using switch statement
function getDepartmentName(department) {
  switch (department) {
    case "CSE":
      return "Computer Science Engineering";

    case "ECE":
      return "Electronics and Communication Engineering";

    case "MECH":
      return "Mechanical Engineering";

    case "IT":
      return "Information Technology";

    default:
      return "Other Department";
  }
}

// Function to display applicant details
function applicantDetails() {
  console.log("\nApplicant Details:");

  applicants.forEach(applicant => {
    console.log(
      "Name: " + applicant.name +
      ", Age: " + applicant.age +
      ", Percentage: " + applicant.percentage +
      ", Department: " + getDepartmentName(applicant.department)
    );
  });
}

// Admission Result Function
function admissionResult() {
  console.log("\nAdmission Results:");

  applicants.forEach(applicant => {
    if (applicant.age >= 18 && applicant.percentage >= 60) {
      console.log(applicant.name + " → Admission Approved");
    } else {
      console.log(applicant.name + " → Admission Rejected");
    }
  });
}

// Callback Function
function generateAdmissionReport(callback) {
  console.log("\nGenerating Admission Report...");
  callback();
}

// Function Calls
displayApplicantNames();
checkEligibility();
countEligibleStudents();
applicantDetails();

// Callback Execution
generateAdmissionReport(admissionResult);





const passengers = [
  {
    passengerId: 1,
    name: "pavan",
    seatNumber: 5,
    ticketPrice: 500,
    busType: "AC"
  },
  {
    passengerId: 2,
    name: "neela",
    seatNumber: 8,
    ticketPrice: 500,
    busType: "AC"
  },
  {
    passengerId: 3,
    name: "veni",
    seatNumber: 12,
    ticketPrice: 350,
    busType: "Non-AC"
  },
  {
    passengerId: 4,
    name: "kumar",
    seatNumber: 15,
    ticketPrice: 600,
    busType: "Sleeper"
  },
  {
    passengerId: 5,
    name: "Naveen",
    seatNumber: 20,
    ticketPrice: 600,
    busType: "Sleeper"
  }
];

// Function to display passenger names
function displayPassengerNames() {
  console.log("Passenger Names:");

  passengers.forEach(passenger => {
    console.log(passenger.name);
  });
}

// Function to calculate total collection
function calculateTotalCollection() {
  let total = 0;

  passengers.forEach(passenger => {
    total += passenger.ticketPrice;
  });

  console.log("\nTotal Collection: ₹" + total);
}

// Function to check occupied seats
function checkOccupiedSeats() {
  console.log("\nOccupied Seats:");

  passengers.forEach(passenger => {
    console.log(
      "Seat No: " + passenger.seatNumber +
      " - " + passenger.name
    );
  });
}

// Function using switch statement
function getBusTypeDescription(busType) {
  switch (busType) {
    case "AC":
      return "Air Conditioned Bus";

    case "Non-AC":
      return "Regular Bus";

    case "Sleeper":
      return "Sleeper Coach Bus";

    default:
      return "Other Bus Type";
  }
}

// Function to display passenger details
function passengerDetails() {
  console.log("\nPassenger Details:");

  passengers.forEach(passenger => {
    console.log(
      "ID: " + passenger.passengerId +
      ", Name: " + passenger.name +
      ", Seat: " + passenger.seatNumber +
      ", Ticket Price: ₹" + passenger.ticketPrice +
      ", Bus Type: " + getBusTypeDescription(passenger.busType)
    );
  });
}

// Ticket Confirmation Function
function ticketConfirmation() {
  console.log("Ticket Booked Successfully!");
}

// Callback Function
function generateTicket(callback) {
  console.log("\nGenerating Ticket...");
  callback();
}

// Function Calls
displayPassengerNames();
calculateTotalCollection();
checkOccupiedSeats();
passengerDetails();

// Callback Execution
generateTicket(ticketConfirmation);




const mobiles = [
  {
    brand: "Samsung",
    model: "Galaxy S24",
    price: 75000,
    stock: 5
  },
  {
    brand: "Apple",
    model: "iPhone 15",
    price: 80000,
    stock: 3
  },
  {
    brand: "OnePlus",
    model: "OnePlus 12",
    price: 55000,
    stock: 7
  },
  {
    brand: "Xiaomi",
    model: "Redmi Note 13",
    price: 18000,
    stock: 10
  },
  {
    brand: "Realme",
    model: "Realme Narzo",
    price: 15000,
    stock: 8
  }
];

// Function to display all mobile names
function displayMobileNames() {
  console.log("Mobile Names:");

  for (let mobile of mobiles) {
    console.log(mobile.brand + " " + mobile.model);
  }
}

// Function to calculate total stock value
function calculateStockValue() {
  let totalValue = 0;

  for (let mobile of mobiles) {
    totalValue += mobile.price * mobile.stock;
  }

  return totalValue;
}

// Function to show mobiles above ₹20,000
function showPremiumMobiles() {
  console.log("\nMobiles Above ₹20,000:");

  for (let mobile of mobiles) {
    if (mobile.price > 20000) {
      console.log(
        mobile.brand +
        " " +
        mobile.model +
        " - ₹" +
        mobile.price
      );
    }
  }
}

// Function using switch statement
function getBrandCategory(brand) {
  switch (brand) {
    case "Apple":
      return "Premium Brand";

    case "Samsung":
      return "Flagship Android Brand";

    case "OnePlus":
      return "Performance Brand";

    case "Xiaomi":
      return "Budget Brand";

    case "Realme":
      return "Value for Money Brand";

    default:
      return "Other Brand";
  }
}

// Function to generate sales report
function salesReport() {
  console.log("\nSales Report:");

  for (let mobile of mobiles) {
    console.log(
      "Brand: " + mobile.brand +
      ", Model: " + mobile.model +
      ", Price: ₹" + mobile.price +
      ", Stock: " + mobile.stock +
      ", Category: " + getBrandCategory(mobile.brand)
    );
  }
}

// Callback Function
function generateReport(callback) {
  console.log("\nGenerating Sales Report...");
  callback();
}

// Function Calls
displayMobileNames();

console.log(
  "\nTotal Stock Value: ₹" + calculateStockValue()
);

showPremiumMobiles();

// Callback Execution
generateReport(salesReport);