import { ReactNode, createContext, useState } from "react";

import { UserData } from "../types";
import { UserContextInterface } from "../interfaces";

const userData = JSON.parse(localStorage.getItem("user")!);

const defaultUser: UserContextInterface = userData
	? {
			user: {
				...userData,
			},
			saveInfo: (user: UserData) => {},
			clearInfo: () => {},
	  }
	: {
			user: {
				id: "",
				city: "",
			},
			saveInfo: (user: UserData) => {},
			clearInfo: () => {},
	  };

export const UserContext = createContext(defaultUser);

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const [userState, setUserState] = useState(defaultUser.user);

	const saveInfo = (user: UserData) => {
		localStorage.setItem("user", JSON.stringify(user));
		setUserState({
			...user,
		});
	};

	const clearInfo = () => {
		localStorage.removeItem("user");
		setUserState({
			id: "",
			city: "",
		});
	};

	const ctx = {
		user: userState,
		saveInfo,
		clearInfo,
	};

	return <UserContext.Provider value={ctx}>{children}</UserContext.Provider>;
};
