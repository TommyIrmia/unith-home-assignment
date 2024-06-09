export interface Item {
	id: string
	title: string
	desc: string
	imgUrl: string
	idx: number
}

export type ItemMapResponse = { [key: string]: ItemResponse }

export interface ItemResponse {
	title: string
	description: string
	image: string
	index: number
}

