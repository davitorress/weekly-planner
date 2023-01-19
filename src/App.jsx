import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import { AuthContext } from "./store/authContext";
import { UserProvider } from "./store/userContext";

import "./App.css";

function App() {
	const { isLogged } = useContext(AuthContext);

	return (
		<BrowserRouter>
			<UserProvider>
				<Routes>
					<Route path="/" element={isLogged ? <Dashboard /> : <Navigate to="/register" />} />
					<Route path="/register" element={isLogged ? <Navigate to="/" /> : <Register />} />
					<Route path="/login" element={isLogged ? <Navigate to="/" /> : <Login />} />
				</Routes>
			</UserProvider>
		</BrowserRouter>
	);
}

export default App;
