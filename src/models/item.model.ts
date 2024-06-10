import { IndexSignature } from "./app.model"

export interface Item {
	id: string
	title: string
	desc?: string
	imgUrl: string
	idx: number
}
export interface ItemResponse {
	title: string
	description?: string
	image: string
	index: number
}

export type ItemMapResponse = IndexSignature<ItemResponse>

export interface ItemCacheData {
	data: Item[]
	expirationTime: number
}

