// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Making employeesArray available as a global object
const employeesArray = [];

// Collect employee data
const collectEmployees = function() {
  // TODO: Catch exceptions (input null, type check, partial values)

  // running a series of window pop-ups to gather user input data, TRHOWS NULL VALUES IF 'CANCEL' IS PRESSED PREMATURELY, WILL FIGURE THAT OUT LATER
  let dataEntry = true;
  while (dataEntry){
    let inputFirstName = window.prompt("Enter First Name:");

    let inputLastName = window.prompt("Enter Last Name:");

    let inputSalary = window.prompt("Enter Salary:");

    // compiles values gathered in previous step into an object to be appended to the end of the employeesArray
    employeesArray.push({
      firstName: inputFirstName,
      lastName: inputLastName,
      salary: Number(inputSalary),
      })
      
    // asks if the loop needs to be repeated, ends loop if cancel is selected
    dataEntry = window.confirm("Do you want to add another employee?");

  }

  return(employeesArray);
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {

  // Generate a sum of employee salaries
  let sum = 0;

  for (let i = 0; i < employeesArray.length; i++) {
    sum += employeesArray[i].salary;
  }

  // print the average employee salary to the console
  console.log(`The average employee salary between our ${employeesArray.length} employees is $${sum / employeesArray.length}.`)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {

  // Generate a random number based on the size of the employee array
  const randomEmployee = Math.floor(Math.random() * employeesArray.length);

  // Use stored random number to select an employee and print their first and last name to the console
  console.log(`Congratulations to ${employeesArray[randomEmployee].firstName} ${employeesArray[randomEmployee].lastName}, our random drawing winner!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
