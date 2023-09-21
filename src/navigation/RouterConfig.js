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
import AdminAddItem from "../components/AdminAddItem";
import AdminEditItem from "../components/AdminEditItem";
import AdminItemList from "../components/AdminItemList"
import EditLoan from "../components/EditLoan";
import AdminViewLoan from "../components/AdminViewLoan";
import AddLoan from "../components/AddLoan";

function RouterConfig({ handleLogin }) {
	return (
		<>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/login" element={<Login role={"user"} />} />
				<Route path="/user/dashboard" element={<Dashboard />} />
				<Route path="/user/applyLoan" element={<UserApplyLoanForm />} />
				<Route path="/user/viewLoans" element={<LoanList />} />
				<Route path="/user/viewItems" element={<ItemList />} />
				<Route path="/admin/login" element={<Login role={"admin"} />} />
				<Route path="/admin/dashboard" element={<AdminDashboard />} />
				<Route path="/admin/register" element={<Register />} />
				<Route path="/admin/employeeList" element={<EmployeeList />} />
				<Route path="/admin/edit/:id" element={<EditEmployee />} />
        <Route path="/admin/item/register" element={<AdminAddItem />} />
        <Route path="/admin/itemList" element={<AdminItemList />} />
        <Route path="/admin/item/edit/:id" element={<AdminEditItem />} />
        <Route path="/admin/loan/register" element={<AddLoan />} />
        <Route path="/admin/loanList" element={<AdminViewLoan />} />
        <Route path="/admin/loan/edit/:id" element={<EditLoan />} />
			</Routes>
		</>
	);
}

export default RouterConfig;
