import { Link } from "react-router-dom"

import { ItemPreview } from "./ItemPreview"

import { Item } from "@/models/item.model"


interface ItemListProps {
	items: Item[]
	activeItemId: string | null
}


export function ItemList({ items, activeItemId }: ItemListProps) {


	return <ul className="item-list clean-list">
		{items.map(item => <li key={item.id}>
			<Link to={`/item/${item.id}`}>
				<ItemPreview item={item} activeItemId={activeItemId} />
			</Link>
		</li>)}
	</ul>
}