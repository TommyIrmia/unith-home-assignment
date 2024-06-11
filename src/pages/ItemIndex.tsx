import { useEffect } from "react"
import { useSelector } from "react-redux"

import { RootState } from "@/store/store"
import { loadItems } from "@/store/actions/app.actions"
import { Loader } from "@/cmps/common/Loader"
import { ItemList } from "@/cmps/item/ItemList"

export function ItemIndex() {
	const activeItemId = useSelector((storeState: RootState) => storeState.appModule.activeItemId)
	const items = useSelector((storeState: RootState) => storeState.appModule.items)
	const isLoading = useSelector((storeState: RootState) => storeState.appModule.isLoading)

	useEffect(() => {
		if (!items) loadItems()
	}, [])

	if (!items) return <div>Something went wrong..</div>
	if (!items?.length) return <div>No items to show..</div>
	return <section className="item-index">
		{!isLoading && <ItemList items={items} activeItemId={activeItemId} />}
		{isLoading && <Loader />}
	</section>
}