import { useState } from "react";
import Navigation from "./Navigation.js";
import RouterConfig from "../navigation/RouterConfig.js";

const Layout = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (flag) => {
    setIsLoggedIn(flag);
  }

	return (
		<div>
			<Navigation isLoggedIn={isLoggedIn}/>
			{/* <div>{props.children}</div>			 */}
      		<RouterConfig handleLogin={handleLogin}/>
		</div>
	);
};

export default Layout;