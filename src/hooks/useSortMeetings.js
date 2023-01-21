const useSortMeetings = (arrayList) => {
	let endSort;
	const newArray = [...arrayList];
	let endArray = arrayList.length;

	do {
		endSort = 0;

		for (let i = 0; i < endArray - 1; i++) {
			if (+newArray[i].time.split(":")[0] > +newArray[i + 1].time.split(":")[0]) {
				const aux = newArray[i];
				newArray[i] = newArray[i + 1];
				newArray[i + 1] = aux;

				endSort = i;
			} else if (
				+newArray[i].time.split(":")[0] === +newArray[i + 1].time.split(":")[0] &&
				+newArray[i].time.split(":")[1] > +newArray[i + 1].time.split(":")[1]
			) {
				const aux = newArray[i];
				newArray[i] = newArray[i + 1];
				newArray[i + 1] = aux;

				endSort = i;
			}
		}

		endArray--;
	} while (endSort !== 0);

	return newArray;
};

export default useSortMeetings;
