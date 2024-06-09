// Generic app models
export interface AppError {
	id: string;
	message: string;
	code?: number;
	date: Date;
	additionalInfo?: any;
}