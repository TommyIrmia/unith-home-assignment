import { AppError } from "@/models/app.model"


export const errorService = {
	createError,
}

function createError({ code = 0, message = "", additionalInfo = "" }: Partial<AppError>): AppError {
	const now = new Date()
	
	const error: AppError = {
		id: `${code}-${now.toISOString()}`,
		message: message,
		date: now,
		code: code,
	}

	if (additionalInfo) error.additionalInfo = additionalInfo
	return error
}