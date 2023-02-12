import { ReactNode, createContext, useState } from "react";

import { NewTaskData } from "../types";
import { TaskContextInterface } from "../interfaces";

const defaultTasks: TaskContextInterface = {
	tasks: [],
	filter: "monday",
	days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	filterTasks(filter) {},
	addTask(task) {},
	removeTask(taskId, cardIndex) {},
	deleteAllTasks(day) {},
};

export const TaskContext = createContext(defaultTasks);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
	const [tasks, setTasks] = useState(defaultTasks.tasks);
	const [filter, setFilter] = useState(defaultTasks.filter);

	const filteredTasks = [...tasks].filter((item) => {
		return item.day === filter;
	});

	const sortedTasks = filteredTasks.sort((a, b) => a.time.localeCompare(b.time));

	const filterTasks = (filter: string) => {
		setFilter(filter);
	};

	const addTask = ({ day, time, text }: NewTaskData) => {
		const taskIndex = [...tasks].findIndex((item) => {
			return item.day === day && item.time === time;
		});

		const newTasks = [...tasks];
		taskIndex >= 0
			? newTasks[taskIndex].cards.push(text)
			: newTasks.push({
					id: `${day}-${time}`,
					day,
					time,
					cards: [text],
			  });

		setTasks(newTasks);
	};

	const removeTask = (taskId: string, cardIndex: number) => {
		const newTasks = [...tasks];
		const taskIndex = newTasks.findIndex((item) => {
			return item.id === taskId;
		});

		if (newTasks[taskIndex].cards.length === 1) {
			newTasks.splice(taskIndex, 1);
		} else {
			newTasks[taskIndex].cards.splice(cardIndex, 1);
		}

		setTasks(newTasks);
	};

	const deleteAllTasks = (day: string) => {
		setTasks((prevTasks) => {
			const filteredTasks = prevTasks.filter((item) => {
				return item.day !== day;
			});

			return filteredTasks;
		});
	};

	const ctx: TaskContextInterface = {
		tasks: sortedTasks,
		filter,
		days: defaultTasks.days,
		filterTasks,
		addTask,
		removeTask,
		deleteAllTasks,
	};

	return <TaskContext.Provider value={ctx}>{children}</TaskContext.Provider>;
};
