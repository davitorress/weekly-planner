import { ReactNode, createContext, useState } from "react";

import { UserData } from "../types";
import { UserContextInterface } from "../interfaces";

const userData = JSON.parse(localStorage.getItem("user")!);

if (!userData) {
	localStorage.setItem(
		"user",
		JSON.stringify({
			firstName: "",
			lastName: "",
			username: "",
			birthDate: "",
			country: "",
			city: "",
			email: "",
			password: "",
		})
	);
}

const defaultUser: UserContextInterface = userData
	? {
			register(user) {},
			user: { ...userData },
	  }
	: {
			user: {
				firstName: "",
				lastName: "",
				username: "",
				birthDate: "",
				country: "",
				city: "",
				email: "",
				password: "",
			},
			register(user) {},
	  };

export const UserContext = createContext(defaultUser);

export const UserProvider = ({ children }: { children: ReactNode }) => {
	const [userState, setUserState] = useState(defaultUser.user);

	const register = (user: UserData) => {
		setUserState({
			...user,
			username: user.firstName + " " + user.lastName,
		});
	};

	const ctx: UserContextInterface = {
		user: {
			firstName: userState.firstName,
			lastName: userState.lastName,
			username: userState.username,
			birthDate: userState.birthDate,
			country: userState.country,
			city: userState.city,
			email: userState.email,
			password: userState.password,
		},
		register,
	};

	return <UserContext.Provider value={ctx}>{children}</UserContext.Provider>;
};
