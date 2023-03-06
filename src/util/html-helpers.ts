export const classes = (...classes: string[]): string => classes
	.map(c => c.trim())
	.filter(c => !/\s/g.test(c))
	.join(' ');

export const isClientInRect = <TClient extends {
	clientX: number,
	clientY: number
}, TRect extends {
	top: number,
	bottom: number,
	left: number,
	right: number
}>({ top, bottom, left, right }: TRect, { clientX, clientY }: TClient) =>
	clientY >= top && clientY <= bottom && clientX >= left && clientX <= right