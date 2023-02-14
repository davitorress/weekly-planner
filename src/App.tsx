import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import { UserContext } from "./store/userContext";

import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
	const { user } = useContext(UserContext);

	return (
		<>
			<ToastContainer />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={user.id ? <Dashboard /> : <Navigate to="/register" />} />
					<Route path="/register" element={user.id ? <Navigate to="/" /> : <Register />} />
					<Route path="/login" element={user.id ? <Navigate to="/" /> : <Login />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
