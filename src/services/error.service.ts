import { AppError } from "@/models/app.model"


export const errorService = {
	createError,
}



function createError({ code = 0, message = "", additionalInfo = "" }: Partial<AppError>): AppError {
	const now = new Date()
	return {
		id: `${code}-${now.toISOString()}`,
		message: message,
		date: now,
		code: code,
		additionalInfo,
	}
}