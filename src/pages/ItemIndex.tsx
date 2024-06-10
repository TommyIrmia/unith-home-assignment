import { useEffect } from "react"
import { useSelector } from "react-redux"

import { RootState } from "@/store/store"
import { loadItems } from "@/store/actions/app.actions"
import { Loader } from "@/cmps/common/Loader"
import { ItemList } from "@/cmps/item/ItemList"

export function ItemIndex() {
	const items = useSelector((storeState: RootState) => storeState.appModule.items)
	const isLoading = useSelector((storeState: RootState) => storeState.appModule.isLoading)

	useEffect(() => {
		loadItems()
	}, [])

	return <section className="item-index">
		<h5>List of items</h5>
		{!isLoading && <ItemList items={items} />}
		{isLoading && <Loader />}
	</section>
}