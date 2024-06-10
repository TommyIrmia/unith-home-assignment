import { Link } from "react-router-dom"

import { ItemPreview } from "./ItemPreview"

import { Item } from "@/models/item.model"


interface ItemListProps {
	items: Item[] | null
}


export function ItemList({ items }: ItemListProps) {

	if(!items) return <div>Something went wrong..</div>
	if (!items?.length) return <div>No items to show..</div>
	return <ul className="item-list clean-list">
		{items.map(item => <li key={item.id}>
			<Link to={`/item/${item.id}`}>
				<ItemPreview item={item} />
			</Link>
		</li>)}
	</ul>
}