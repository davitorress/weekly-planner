import { createContext, useReducer } from "react";

const userData = JSON.parse(localStorage.getItem("user"));

const defaultUser = userData
	? {
			register(user) {},
			...userData,
	  }
	: {
			firstName: "",
			lastName: "",
			username: "",
			birthDate: "",
			country: "",
			city: "",
			email: "",
			password: "",
			register(user) {},
	  };

export const UserContext = createContext(defaultUser);

const userReducer = (state, action) => {
	if (action.type === "REGISTER") {
		const username = action.user.firstName + " " + action.user.lastName;

		return {
			...state,
			firstName: action.user.firstName,
			lastName: action.user.lastName,
			username,
			birthDate: action.user.birthDate,
			country: action.user.country,
			city: action.user.city,
			email: action.user.email,
			password: action.user.password,
		};
	}

	return {
		...state,
	};
};

export const UserProvider = ({ children }) => {
	const [userState, dispatchUserAction] = useReducer(userReducer, defaultUser);

	const register = (user) => {
		dispatchUserAction({ type: "REGISTER", user });
	};

	const ctx = {
		firstName: userState.firstName,
		lastName: userState.lastName,
		username: userState.firstName + " " + userState.lastName,
		birthDate: userState.birthDate,
		country: userState.country,
		city: userState.city,
		email: userState.email,
		password: userState.password,
		register,
	};

	return <UserContext.Provider value={ctx}>{children}</UserContext.Provider>;
};
