export const toLocalTime = (timeInput: string): string => {


	const time = timeInput.split(':');

	const hours = Number(time[0]);
	const minutes = Number(time[1]);

	console.log(hours, minutes, time);

	let timeValue: string = '';

	if (hours > 0 && hours <= 12) {
		timeValue = "" + hours;
	} else if (hours > 12) {
		timeValue = "" + (hours - 12);
	} else if (hours == 0) {
		timeValue = "12";
	}

	timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;
	timeValue += (hours >= 12) ? " PM" : " AM";

	return timeValue
}

export const threeHoursFromNow = (date: string, time: string): Date => {
	const dateText = `${date}T${time}`;
	let newDate = new Date(dateText);
	newDate.setHours(newDate.getHours() + 3);
	return newDate;
}

export const getCalculatedTime = (countDownDate: number): string => {
	// Get today's date and time
	const now = new Date().getTime();
	// Find the distance between now and the count down date
	const distance = countDownDate - now;

	if (distance < 0) {
		return 'PAST DUE!'
	}
	// Time calculations for days, hours, minutes and seconds
	const hours = Math.max(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 0);
	const minutes = Math.max(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)), 0);
	const seconds = Math.max(Math.floor((distance % (1000 * 60)) / 1000), 0);

	console.log(hours);

	const formatTimeDigit = (digit: number) => digit > 9 ? digit : `0${digit}`

	const hourMessage = hours > 0 ? `${hours}h ` : '';
	const minutesMessage = minutes > 0 ? `${formatTimeDigit(minutes)}m ` : '';
	const message = `In ${hourMessage}${minutesMessage}${formatTimeDigit(seconds)}s`;

	// Output the result in an element with id="demo"
	return message;
}