import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { Link } from "react-router-dom"

//@ts-ignore
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { loadItems, setActiveItemId, setError } from "@/store/actions/app.actions"
import { RootState } from "@/store/store"

import { Loader } from "@/cmps/common/Loader"
import { Item } from "@/models/item.model"
import { Image } from "@/cmps/common/Image";


export function ItemDetails() {
	const activeItemId = useSelector((storeState: RootState) => storeState.appModule.activeItemId)
	const items = useSelector((storeState: RootState) => storeState.appModule.items)
	const isLoading = useSelector((storeState: RootState) => storeState.appModule.isLoading)

	const [item, setItem] = useState<Item | null>(null)

	const { itemId } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		if (!items) loadItems()
	}, [])

	useEffect(() => {
		if (itemId !== activeItemId) setActiveItemId(itemId)
		getItemById()
	}, [items, itemId])

	function getItemById(): void {
		try {
			if (!items) return
			const item = items?.find((item) => item.id === itemId)
			if (!item) throw new Error('item not found')
			setItem(item)
		} catch (err) {
			setError({ code: 404, message: err as string })
			navigate('/item')
		}
	}

	if (!item || isLoading) return <Loader />
	return <section className="item-details">
		<Link to="/item">Go home</Link>

		<Image imgUrl={item.imgUrl} altTxt={item.title} />

		<h2>{item.title}</h2>
		<h4>{item.desc}</h4>
	</section>
}