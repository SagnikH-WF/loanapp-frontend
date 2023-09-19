import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import UserApplyLoanForm from "./components/UserLoanApplyForm";
import LoanList from "./components/LoanList";
import ItemList from "./components/ItemList";
import AdminViewLoan from "./components/AdminViewLoan";
import AddLoan from "./components/AddLoan";
import EditLoan from "./components/EditLoan";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<Router>
			<Routes>
				<Route path="/" exact element={<Home isLoggedIn={isLoggedIn} />} />
				<Route
					path="/login"
					element={<Login setIsLoggedIn={setIsLoggedIn} />}
				/>
				<Route path="/register" element={<Register />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/applyLoan" element={<UserApplyLoanForm />} />
				<Route path="/viewLoans" element={<LoanList />} />
				<Route path="/viewItems" element={<ItemList />} />
				<Route path="/adminViewLoan" element={<AdminViewLoan/>}/>
				<Route path="/addLoan" element={<AddLoan/>}/>
				<Route path="/adminViewLoan/Edit/:id" element={<EditLoan/>}/>
			</Routes>
		</Router>
	);
}

export default App;
