export interface Employee {
  empId: number;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phoneNo: string;
  dob: Date;
  joiningDate?: Date;
  salary?: number;
  departmentId: number;
}

export const EmployeeItem: Employee[] = [];
for (let i = 1; i <= 20; i++) {
  EmployeeItem.push({
    empId: i,
    address: `Address ${i}`,
    phoneNo: '63647344' + i,
    firstName: `first name ${i}`,
    lastName: `last name ${i}`,
    email: `employ${i}@gmail.com`,
    dob: new Date(`19${80 + i}-08-${i}`),
    joiningDate: new Date(`19${80 + i}-08-${i}`),
    salary: 0,
    departmentId: 0,
  });
}

// export const EMPLOYEES: Employee[] = [
//   {
//     id: 1,
//     firstName: 'John',
//     lastName: 'Doe',
//     email: 'john@example.com',
//     phoneNo: '1234567890',
//   },
//   {
//     id: 2,
//     firstName: 'Jane',
//     lastName: 'Smith',
//     email: 'jane@example.com',
//     phoneNo: '9876543210',
//   },
//   {
//     id: 3,
//     firstName: 'Mike',
//     lastName: 'Johnson',
//     email: 'mike@example.com',
//     phoneNo: '5555555555',
//   },
//   // Add more mock employees as needed
// ];
