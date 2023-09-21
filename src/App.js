import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	return (
		<Router>
      <Layout>    
            
      </Layout>
		</Router>
	);
}

export default App;
