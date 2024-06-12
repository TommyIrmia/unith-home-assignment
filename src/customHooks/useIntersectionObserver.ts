import React, { useEffect } from "react";

interface UseIntersectionObserverProps {
	elRef: React.MutableRefObject<HTMLElement | null>
	cb: () => void
}

export function useIntersectionObserver({ elRef, cb }: UseIntersectionObserverProps): void {
	useEffect(() => {
		if (!elRef.current) return

		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0]
			if (entry.isIntersecting) {
				cb && cb()
			}
		}, { root: null, rootMargin: '30px' })

		if (observer) {
			observer.observe(elRef.current);
		}

		return () => {
			if (observer) {
				observer.disconnect();
			}
		};
	}, []);
}