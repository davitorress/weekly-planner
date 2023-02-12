export type Task = {
	id: string;
	day: string;
	time: string;
	cards: string[];
};

export type NewTaskData = {
	day: string;
	time: string;
	text: string;
};

export type UserData = {
	firstName: string;
	lastName: string;
	username: string;
	birthDate: string;
	country: string;
	city: string;
	email: string;
	password: string;
};
