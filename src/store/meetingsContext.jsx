import { createContext, useState } from "react";
import useSortMeetings from "../hooks/useSortMeetings";

const defaultMeetings = {
	meetings: [],
	filter: "monday",
	days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
	filterTasks(filter) {},
	addTask(meeting) {},
	removeTask(id) {},
	deleteAllTasks() {},
};

export const MeetingsContext = createContext(defaultMeetings);

export const MeetingsProvider = ({ children }) => {
	const [meetings, setMeetings] = useState(defaultMeetings.meetings);
	const [filter, setFilter] = useState(defaultMeetings.filter);

	const filteredMeetings = [...meetings].filter((item) => {
		return item.day === filter;
	});

	const sortedMeetings = useSortMeetings(filteredMeetings);

	const filterTasks = (filter) => {
		setFilter(filter);
	};

	const addTask = ({ day, time, text }) => {
		const hasMeeting = [...meetings].findIndex((item) => {
			return item.day === day && item.time === time;
		});

		const newMeetings = [...meetings];
		hasMeeting >= 0
			? newMeetings[hasMeeting].tasks.push(text)
			: newMeetings.push({
					id: `${day}-${time}`,
					day,
					time,
					tasks: [text],
			  });

		setMeetings(newMeetings);
	};

	const removeTask = (id) => {
		const splitId = id.split("-");

		const newMeetings = [...meetings];
		const indexMeeting = newMeetings.findIndex((item) => {
			return item.id === splitId[0].concat("-").concat(splitId[1]);
		});

		if (newMeetings[indexMeeting].tasks.length === 1) {
			newMeetings.splice(indexMeeting, 1);
		} else {
			newMeetings[indexMeeting].tasks.splice(splitId[2], 1);
		}

		setMeetings(newMeetings);
	};

	const deleteAllTasks = (day) => {
		setMeetings((prevMeetings) => {
			const filteredMeetings = prevMeetings.filter((item) => {
				return item.day !== day;
			});

			return filteredMeetings;
		});
	};

	const ctx = {
		meetings: sortedMeetings,
		filter,
		days: defaultMeetings.days,
		filterTasks,
		addTask,
		removeTask,
		deleteAllTasks,
	};

	return <MeetingsContext.Provider value={ctx}>{children}</MeetingsContext.Provider>;
};
