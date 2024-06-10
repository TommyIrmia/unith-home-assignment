import { Item } from "@/models/item.model"
//@ts-ignore
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface ItemPreviewProps {
	item: Item
}

export function ItemPreview({ item }: ItemPreviewProps) {
	return <article className="item-preview">
		<LazyLoadImage src={item.imgUrl}
			alt={item.title}
			effect="blur" // Optional effect
		/>
		<h2>{item.title}</h2>
		<p>{item.desc}</p>
	</article>
}