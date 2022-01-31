export const orderByName = (a: string, b: string): number => {
	const A = a.toLowerCase();
	const B = b.toLowerCase();
	if (A < B) return -1;
	if (A > B) return 1;
	return 0;
};
