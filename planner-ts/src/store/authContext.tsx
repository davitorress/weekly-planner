import { ReactNode, createContext, useState } from "react";

import { AuthContextInterface } from "../interfaces";

const defaultAuth: AuthContextInterface = {
	isLogged: JSON.parse(localStorage.getItem("auth")!),
	login() {},
	logout() {},
};

export const AuthContext = createContext(defaultAuth);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [authState, setAuthState] = useState<boolean>(defaultAuth.isLogged);

	const login = () => {
		localStorage.setItem("auth", "true");
		setAuthState(true);
	};

	const logout = () => {
		localStorage.setItem("auth", "false");
		setAuthState(false);
	};

	const ctx: AuthContextInterface = {
		isLogged: authState,
		login,
		logout,
	};

	return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};
