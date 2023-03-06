export const intervalMount = (fn: () => void,  timer: number = 1000) => {
	const interval = setInterval(fn, timer);
	return () => clearInterval(interval);
}

export const timeoutMount = (fn: () => void, timer: number = 1000) => {
	const timeout = setTimeout(fn, timer);
	return () => clearTimeout(timeout)
}