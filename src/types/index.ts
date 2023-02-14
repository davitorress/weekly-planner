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
	id: string;
	city: string;
};
