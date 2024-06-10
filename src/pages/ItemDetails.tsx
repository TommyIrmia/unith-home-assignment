import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router"
import { Link } from "react-router-dom"

//@ts-ignore
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { loadItems, setActiveItemId, setError } from "@/store/actions/app.actions"
import { RootState } from "@/store/store"

import { Loader } from "@/cmps/common/Loader"
import { Item } from "@/models/item.model"


export function ItemDetails() {
	const items = useSelector((storeState: RootState) => storeState.appModule.items)
	const isLoading = useSelector((storeState: RootState) => storeState.appModule.isLoading)

	const { itemId } = useParams()
	const navigate = useNavigate()

	useEffect(() => {
		setActiveItemId(itemId)
		if (!items) {
			loadItems()
		}
	}, [itemId])

	function getItemById(): Item | null | void {
		try {
			if (!items) return null
			const item = items?.find((item) => item.id === itemId)
			if (!item) throw new Error('item not found')
			return item
		} catch (err) {
			console.log('Error loading item', err)
			setError(404, err as string)
			navigate('/item')
		}
	}

	const item = getItemById()
	if (!item || isLoading) return <Loader />
	return <section className="item-details">
		<Link to="/item">Go home</Link>
		{/* <LazyLoadImage
			src={item.imgUrl}
			alt={item.title}
			effect="blur" // Optional effect
		/> */}
		<img src={item.imgUrl} alt={item.title} loading="lazy" style={{ width: '100%', height: 'auto' }} />

		<h2>{item.title}</h2>
		<h4>{item.desc}</h4>
	</section>
}