import React from 'react';

const EmployeeList = () => {
  return (
    <div>
      <h2>Customer Master Data Details</h2>
      <table>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Date of Joining</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* Add your employee data here */}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
