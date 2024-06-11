import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { Link } from "react-router-dom"

import { useScrollToTop } from "@/customHooks/useScrollToTop"

import { loadItems, setActiveItemId, setError } from "@/store/actions/app.actions"
import { RootState } from "@/store/store"

import { Loader } from "@/cmps/common/Loader"
import { Image } from "@/cmps/common/Image"
import BackIcon from "@/assets/images/back.png"

import { Item } from "@/models/item.model"


export function ItemDetails() {
	const activeItemId = useSelector((storeState: RootState) => storeState.appModule.activeItemId)
	const items = useSelector((storeState: RootState) => storeState.appModule.items)
	const isLoading = useSelector((storeState: RootState) => storeState.appModule.isLoading)

	const [item, setItem] = useState<Item | null>(null)

	const { itemId } = useParams()
	const navigate = useNavigate()

	useScrollToTop()

	useEffect(() => {
		if (!items) loadItems()
	}, [])

	useEffect(() => {
		if (itemId !== activeItemId) setActiveItemId(itemId)
		getItemById()
	}, [items, itemId])

	function getItemById(): void {
		try {
			// For first load incase the items are not loaded yet
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
	const shouldShowLongTxt = Math.random() > 0.5
	
	return <section className="item-details">
		<Image imgUrl={item.imgUrl} altTxt={item.title} objectFit="contain" />

		<div className="item-details-content">
			<Link to="/item" >
				<img className="back-img" src={BackIcon} alt="go-back" title="Go to item list" />
			</Link>

			<h2>{item.title}</h2>
			<p>{item.desc}
				{shouldShowLongTxt && 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolor mollitia ex cumque laboriosam ipsa eligendi sed ea, qui rerum tempore, at fugit similique cupiditate, vitae maiores obcaecati quam praesentium.'}
			</p>
		</div>
	</section>
}