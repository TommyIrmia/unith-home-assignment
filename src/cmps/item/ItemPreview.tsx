import { Item } from "@/models/item.model"
import { Image } from "../common/Image"

interface ItemPreviewProps {
	item: Item
	activeItemId: string | null
}

export function ItemPreview({ item, activeItemId }: ItemPreviewProps) {
	const isActive = activeItemId === item.id
	return <article className={`item-preview${isActive ? ' active' : ''}`}>
		<Image imgUrl={item.imgUrl} altTxt={item.title} />
		<h2>{item.title}</h2>
		<p>{item.desc}</p>
	</article>
}