export const classes = (...classes: string[]): string => classes
	.map(c => c.trim())
	.filter(c => !/\s/g.test(c))
	.join(' ');