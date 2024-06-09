import { useEffect } from "react"
import { useSelector } from "react-redux"

import { RootState } from "@/store/store"
import { loadItems } from "@/store/actions/app.actions"
import { Loader } from "@/cmps/common/Loader"
import { ItemList } from "@/cmps/item/ItemList"

export function ItemIndex() {
	const items = useSelector((state: RootState) => state.appModule.items)
	const isLoading = useSelector((state: RootState) => state.appModule.isLoading)

	useEffect(() => {
		loadItems()
	}, [])

	return <section className="item-index">

		<h5>List of items</h5>
		{!isLoading && <ItemList items={items!} />}
		{isLoading && <Loader />}
	</section>
}