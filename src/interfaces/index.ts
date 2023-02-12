import { NewTaskData, Task, UserData } from "../types";

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
	register: (user: UserData) => void;
}
