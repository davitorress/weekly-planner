import { createContext, useState } from "react";

const defaultAuth = {
	isLogged: JSON.parse(localStorage.getItem("auth")),
	login() {},
	logout() {},
};

export const AuthContext = createContext(defaultAuth);

export const AuthProvider = ({ children }) => {
	const [authState, setAuthState] = useState(defaultAuth.isLogged);

	const login = () => {
		localStorage.setItem("auth", true);
		setAuthState(true);
	};

	const logout = () => {
		localStorage.setItem("auth", false);
		setAuthState(false);
	};

	const ctx = {
		isLogged: authState,
		login,
		logout,
	};

	return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};
