import { Link } from "react-router-dom"

import { ItemPreview } from "@/cmps/item/ItemPreview"

import { Item } from "@/models/item.model"
import { useRef, useState } from "react"
import { NUM_ITEMS_TO_SHOW } from "@/services/const.service"
import { useIntersectionObserver } from "@/customHooks/useIntersectionObserver"

interface ItemListProps {
	items: Item[]
	activeItemId: string | null
}

export function ItemList({ items, activeItemId }: ItemListProps) {

	const [pageIdx, setPageIdx] = useState<number>(1)
	const loadingRef = useRef<HTMLLIElement | null>(null)

	// IntersectionObserver is used to detect when the el is in the viewport - and call the cb
	useIntersectionObserver({ elRef: loadingRef, cb: changePageIdx })

	function changePageIdx() {
		setPageIdx(prevIdx => {
			if (prevIdx * NUM_ITEMS_TO_SHOW >= items.length) return prevIdx
			return prevIdx + 1
		})
	}

	const itemsToShow = items.slice(0, pageIdx * NUM_ITEMS_TO_SHOW)
	return <ul className="item-list clean-list">
		{itemsToShow.map(item => <li key={item.id}>
			<Link to={`/item/${item.id}`}>
				<ItemPreview item={item} activeItemId={activeItemId} />
			</Link>
		</li>)}
		<li className="loading-item" ref={loadingRef} style={{ height: '0px' }}></li>
	</ul>
}