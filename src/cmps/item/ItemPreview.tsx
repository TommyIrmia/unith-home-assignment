import { Item } from "@/models/item.model"
import { Image } from "@/cmps/common/Image"

interface ItemPreviewProps {
	item: Item
	activeItemId: string | null
}

export function ItemPreview({ item, activeItemId }: ItemPreviewProps) {

	const { imgUrl, title, desc, id: itemId } = item
	const isActive = activeItemId === itemId

	// Random data to show handling different text lengths
	const shouldShowLongTxt = Math.random() > 0.5
	return <article className={`item-preview${isActive ? ' active' : ''}`}>
		<Image imgUrl={imgUrl} altTxt={title} />
		<div className="item-preview-content">
			<h2>{title}</h2>
			<p>
				{desc}
				{shouldShowLongTxt && 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolor mollitia ex cumque laboriosam ipsa eligendi sed ea, qui rerum tempore, at fugit similique cupiditate, vitae maiores obcaecati quam praesentium.'}
			</p>
		</div>
	</article>
}