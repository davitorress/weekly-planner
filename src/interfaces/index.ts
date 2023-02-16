import { DayOfWeeks, NewTaskData, Task, UniqueEvent, UniqueEventData, UserData } from "../types";

export interface AuthContextInterface {
	isLogged: boolean;
	login: () => void;
	logout: () => void;
}

export interface TaskContextInterface {
	tasks: Task[];
	filter: string;
	days: string[];
	filterTasks: (filter: string) => void;
	addTask: (task: NewTaskData) => void;
	removeTask: (taskId: string, cardIndex: number) => void;
	deleteAllTasks: (day: string) => void;
}

export interface UserContextInterface {
	user: UserData;
	saveInfo: (user: UserData) => void;
	clearInfo: () => void;
}

export interface EventContextInterface {
	events: UniqueEvent[];
	filter: DayOfWeeks;
	days: DayOfWeeks[];
	filterEvents: (filter: DayOfWeeks) => void;
	addEvent: (event: UniqueEventData) => void;
	clearEvents: () => void;
}
