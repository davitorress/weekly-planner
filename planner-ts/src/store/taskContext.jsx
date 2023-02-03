import { createContext, useState } from "react";

const defaultTasks = {
	tasks: [],
	filter: "monday",
	days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	filterTasks(filter) {},
	addTask(meeting) {},
	removeTask(id) {},
	deleteAllTasks() {},
};

export const TaskContext = createContext(defaultTasks);

export const TaskProvider = ({ children }) => {
	const [tasks, setTasks] = useState(defaultTasks.tasks);
	const [filter, setFilter] = useState(defaultTasks.filter);

	const filteredTasks = [...tasks].filter((item) => {
		return item.day === filter;
	});

	const sortedTasks = filteredTasks.sort((a, b) => a.time.localeCompare(b.time));

	const filterTasks = (filter) => {
		setFilter(filter);
	};

	const addTask = ({ day, time, text }) => {
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

	const removeTask = (taskId, cardIndex) => {
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

	const deleteAllTasks = (day) => {
		setTasks((prevTasks) => {
			const filteredTasks = prevTasks.filter((item) => {
				return item.day !== day;
			});

			return filteredTasks;
		});
	};

	const ctx = {
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
