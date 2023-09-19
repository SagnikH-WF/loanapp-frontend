import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<Router>
      <Layout>    
        {/* <Routes>
          <Route path="/" exact element={<Home isLoggedIn={isLoggedIn} />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/applyLoan" element={<UserApplyLoanForm />} />
          <Route path="/viewLoans" element={<LoanList />} />
          <Route path="/viewItems" element={<ItemList />} />				
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/employeeList" element={<EmployeeList />} />				
          <Route path="/admin/edit/:id" element={<EditEmployee />} />
        </Routes> */}
      </Layout>
		</Router>
	);
}

export default App;
