
const isDevMode = process.env.NODE_ENV === 'development';

export function devLog(...args: any[]) {
	if (isDevMode) {
		console.log('[DEV LOG]:', ...args);
	}
};
