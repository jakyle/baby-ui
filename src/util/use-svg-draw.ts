export function setPathAnimation<T extends SVGPathElement>(node: T) {
	const pathLength = node.getTotalLength().toString();
	node.setAttribute('stroke-dasharray', pathLength);
	node.setAttribute('stroke-dashoffset', pathLength);
}