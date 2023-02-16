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
	token: string;
	id: string;
	city: string;
};

export type DayOfWeeks = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";

export type CardObj = {
	id: string;
	description: string;
};

export type UniqueEvent = {
	id: string;
	dayOfWeek: DayOfWeeks;
	cards: CardObj[];
	createdAt: string;
};

export type UniqueEventData = {
	id: string;
	dayOfWeek: DayOfWeeks;
	description: string;
	createdAt: string;
};
