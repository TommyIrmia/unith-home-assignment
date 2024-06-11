import { useEffect } from "react";


export function useScrollToTop() {
	useEffect(() => {
		if (window.scrollY !== 0) {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}
	}, [])
}