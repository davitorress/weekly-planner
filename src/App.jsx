import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import { AuthContext } from "./store/authContext";
import { UserContext } from "./store/userContext";

import "./App.css";

function App() {
	const { isLogged } = useContext(AuthContext);
	const { username, email, password } = useContext(UserContext);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={isLogged ? <Dashboard /> : <Navigate to="/register" />} />
				<Route path="/register" element={isLogged ? <Navigate to="/" /> : <Register />} />
				<Route
					path="/login"
					element={
						isLogged ? <Navigate to="/" /> : username && email && password ? <Login /> : <Navigate to="/register" />
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
