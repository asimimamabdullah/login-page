import React from "react";
import Login from "./Components/Login";

const App = () => {
	return (
		<div
			className="App"
			style={{
				width: "100%",
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}>
			<Login />
		</div>
	);
};

export default App;
