// Write your solution in this file!
const employee = {
  name : "Joseph",
  streetAddress : "Kenyatta Avenue"
};

const updateEmployeeWithKeyAndValue = (employee,key,value) => {
  return {
    ...employee,
    [key]: value,
  };
};

const destructivelyUpdateEmployeeWithKeyAndValue = (employee,key,value) =>{
  employee[key] = value;
  return employee
};

const deleteFromEmployeeByKey = (employee,key) =>{
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee
};

const destructivelyDeleteFromEmployeeByKey = (employee,key) =>{
  delete employee[key];
  return employee;
}

