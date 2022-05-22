import React, { useState } from "react";
import "./Login.css";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleEmailChange = (e) => {
		console.log(e.target.value);
		// setEmail((prevValue) => prevValue + e.target.value);
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		console.log(e.target.value);
		setPassword(e.target.value);
	};
	return (
		<div
			style={{
				padding: "20px 30px",
				width: "30%",
				minWidth: "340px",
				minHeight: "230px",
				display: "flex",
				flexDirection: "column",
				background: "#eee",
				boxShadow: "1px 5px 15px #aaa",
			}}>
			<input
				type="email"
				value={email}
				className="inputField input"
				placeholder="Email"
				onChange={handleEmailChange}
			/>
			<input
				type="password"
				value={password}
				className="inputField input"
				placeholder="Password"
				onChange={handlePasswordChange}
			/>

			<button className="inputField button">Sign in</button>
		</div>
	);
};

export default Login;
