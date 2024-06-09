export interface Item {
	id: string
	title: string
	desc: string
	imgUrl: string
	idx: number
}
export interface ItemResponse {
	title: string
	description: string
	image: string
	index: number
}

export interface ItemMapResponse { [key: string]: ItemResponse }


export interface ItemCacheData {
	data: Item[]
	expirationTime: number
}

