import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import UserApplyLoanForm from "./components/UserLoanApplyForm";
import LoanList from "./components/LoanList";
import ItemList from "./components/ItemList";
import AdminItemList from "./components/AdminItemList";
import AdminAddItem from "./components/AdminAddItem";
import AdminEditItem from "./components/AdminEditItem";

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
				<Route path="/Admin/ItemList" element={<AdminItemList/>}/>
				<Route path="/Admin/addItem" element={<AdminAddItem/>}/>
				<Route path="/AdminEditItem/Edit/:id" element={<AdminEditItem/>}/>
			</Routes>
		</Router>
	);
}

export default App;
