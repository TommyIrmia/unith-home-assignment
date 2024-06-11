import { useEffect } from "react"
import { useSelector } from "react-redux"

import { useScrollToTop } from "@/customHooks/useScrollToTop"

import { RootState } from "@/store/store"
import { loadItems } from "@/store/actions/app.actions"

import { Loader } from "@/cmps/common/Loader"
import { ItemList } from "@/cmps/item/ItemList"
import { Error } from '@/cmps/common/Error'

export function ItemIndex() {
	const activeItemId = useSelector((storeState: RootState) => storeState.appModule.activeItemId)
	const items = useSelector((storeState: RootState) => storeState.appModule.items)
	const isLoading = useSelector((storeState: RootState) => storeState.appModule.isLoading)

	useScrollToTop()

	useEffect(() => {
		if (!items) loadItems()
	}, [])

	return <section className="item-index">
		{isLoading && <Loader />}
		{!isLoading && <>
			{!items && <Error />}
			{items && <ItemList items={items} activeItemId={activeItemId} />}
		</>}
	</section>
}