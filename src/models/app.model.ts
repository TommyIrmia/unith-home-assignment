// Generic app models
export interface AppError {
	id: string;
	message: string;
	code?: number;
	date: Date;
	additionalInfo?: any;
}

export type IndexSignature<T = any> = { [key: string]: T }

export type Optional<T, P extends keyof T> = {
	[K in keyof Omit<T, P>]: T[K]
} & { [F in P]?: T[F] }