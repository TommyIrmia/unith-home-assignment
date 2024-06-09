import { Item } from "@/models/item.model"

interface ItemPreviewProps {
	item: Item
}

export function ItemPreview({ item }: ItemPreviewProps) {
	return <article className="item-preview">
		<img src={item.imgUrl} alt={item.title} />
		<h2>{item.title}</h2>
		<p>{item.desc}</p>
	</article>
}