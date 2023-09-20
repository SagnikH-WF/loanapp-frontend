import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Dashboard from "../components/Dashboard";
import UserApplyLoanForm from "../components/UserLoanApplyForm";
import LoanList from "../components/LoanList";
import ItemList from "../components/ItemList";
import EmployeeList from "../components/EmployeeList";
import AdminDashboard from "../components/AdminDashboard";
import EditEmployee from "../components/EditEmployee";

function RouterConfig({handleLogin}) {
  return (
    <>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/login"
            element={<Login role={"user"} />}
          />
          <Route path="/admin/login" element={<Login role={"admin"} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/applyLoan" element={<UserApplyLoanForm />} />
          <Route path="/viewLoans" element={<LoanList />} />
          <Route path="/viewItems" element={<ItemList />} />				
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/employeeList" element={<EmployeeList />} />				
          <Route path="/admin/edit/:id" element={<EditEmployee />} />
        </Routes>
    </>
  )
}

export default RouterConfig;