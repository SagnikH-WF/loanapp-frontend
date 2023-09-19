import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();

  const handleLoginAsUser = () => {
    navigate("/login");
  }

	return (
		<div className="home-container">
			<div className="centered-buttons">
				<button className="login-button">Login as Admin</button>
				<button className="login-button" onClick={handleLoginAsUser}>
					Login as User
				</button>
			</div>
		</div>
	);
}

export default Home;
