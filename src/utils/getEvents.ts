import notify from "./toastNotify";

import { UniqueEventData } from "../types";

const getEvents = (
	day: string,
	token: string,
	successFn: (value: UniqueEventData) => void,
	setIsLoading: () => void
) => {
	fetch(`https://latam-challenge-2.deta.dev/api/v1/events?dayOfWeek=${day}`, {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${token}`,
		},
	})
		.then((res) => {
			return res.json();
		})
		.then((data) => {
			if (data.message) notify("error", data.message);
			else {
				notify("success", "Get with success!");
				notify("info", `${data.events.length} events founded.`);

				for (const event of data.events) {
					const createdTime = event.createdAt.split("T")[1];
					const time = `${createdTime.split(":")[0]}:${createdTime.split(":")[1]}`;

					const eventData: UniqueEventData = {
						id: event._id,
						dayOfWeek: event.dayOfWeek,
						createdAt: time,
						description: event.description,
					};

					successFn(eventData);
				}
			}

			setIsLoading();
		});
};

export default getEvents;
