

export const storageService = {
	save,
	load
}

function load(key: string, defaultValue: any = null) {
	var value = localStorage.getItem(key)
	if (!value) return defaultValue
	return JSON.parse(value)
}

function save<T>(key: string, value: T) {
	localStorage.setItem(key, JSON.stringify(value))
}