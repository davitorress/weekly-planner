import { ReactNode, createContext, useState } from "react";

import { EventContextInterface } from "../interfaces";
import { DayOfWeeks, UniqueEvent, UniqueEventData } from "../types";

const defaultEvents: EventContextInterface = {
	events: [],
	filter: "monday",
	days: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
	filterEvents: (filter: DayOfWeeks) => {},
	addEvent: (event: UniqueEventData) => {},
	clearEvents: () => {},
};

let newEvents: UniqueEvent[] = [];

export const EventContext = createContext(defaultEvents);

export const EventProvider = ({ children }: { children: ReactNode }) => {
	const [events, setEvents] = useState(defaultEvents.events);
	const [filter, setFilter] = useState(defaultEvents.filter);

	const sortedEvents = [...events].sort((a, b) => a.createdAt.localeCompare(b.createdAt));

	const filterEvents = (filter: DayOfWeeks) => {
		setFilter(filter);
	};

	const addEvent = ({ id, dayOfWeek, createdAt, description }: UniqueEventData) => {
		const eventIndex = newEvents.findIndex((item) => {
			return item.dayOfWeek === dayOfWeek && item.createdAt === createdAt;
		});

		eventIndex >= 0
			? newEvents[eventIndex].cards.push({ id, description })
			: newEvents.push({
					id: `${dayOfWeek}-${createdAt}`,
					dayOfWeek,
					createdAt,
					cards: [{ id, description }],
			  });

		setEvents(newEvents);
	};

	const clearEvents = () => {
		newEvents = [];
		setEvents([]);
	};

	const ctx: EventContextInterface = {
		events: sortedEvents,
		filter,
		days: defaultEvents.days,
		filterEvents,
		addEvent,
		clearEvents,
	};

	return <EventContext.Provider value={ctx}>{children}</EventContext.Provider>;
};
