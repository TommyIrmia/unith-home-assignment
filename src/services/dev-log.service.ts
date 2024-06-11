
const isDevMode = process.env.NODE_ENV === 'development';

export function devLog(...args: any[]) {
	if (isDevMode) {
		const originalLog = console.log;
		const stack = new Error().stack;
		if (stack) {
			// Reserve stack trace for the log line
			const stackLines = stack.split('\n');
			const logLine = stackLines[2];
			originalLog.apply(console, [`[DEV LOG]: \n${logLine.trim()} \n`, ...args]);
		} else {
			originalLog.apply(console, ['[DEV LOG]:', ...args]);
		}
	}
};
