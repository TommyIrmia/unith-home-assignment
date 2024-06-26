import { FC, memo, useMemo, useRef, useState } from "react"
import { Link } from "react-router-dom"

import { useIntersectionObserver } from "@/customHooks/useIntersectionObserver"

import { NUM_ITEMS_TO_SHOW } from "@/services/const.service"
import { Item } from "@/models/item.model"

import { ItemPreview } from "@/cmps/item/ItemPreview"

interface ItemListProps {
	items: Item[]
	activeItemId: string | null
}

export const ItemList: FC<ItemListProps> = memo(({ items, activeItemId }) => {

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

	if (!items?.length) return <div>No items to show..</div>
	const itemsToShow = useMemo(() => items.slice(0, pageIdx * NUM_ITEMS_TO_SHOW), [pageIdx, items])
	return <ul className="item-list clean-list">
		{itemsToShow.map(item => <li key={item.id}>
			<Link to={`/item/${item.id}`}>
				<ItemPreview item={item} activeItemId={activeItemId} />
			</Link>
		</li>)}
		<li className="loading-item" ref={loadingRef} style={{ height: '0px' }}></li>
	</ul>
})