import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import defaultImg from '@/assets/images/default-img.avif';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ImageProps {
	width?: string
	height?: string
	imgUrl: string
	altTxt?: string
	objectFit?: "cover" | "contain" | "fill"
}


export function Image({ imgUrl = defaultImg, altTxt = "", width = '100%', height = '100%', objectFit = "cover" }: ImageProps) {
	const [isImgLoaded, setImgLoaded] = useState(false);
	const [isImgError, setImgError] = useState(false);

	function onImgLoaded() {
		setImgLoaded(true);
	}

	function onImgError() {
		setImgError(true);
	}

	console.log('imgUrl', imgUrl)
	console.log('isImgError', isImgError)



	const containerStyle = { width, height }
	return <div className="img-container" style={containerStyle}>
		{!isImgLoaded && !isImgError && (
			<div className="skeleton-container">
				<Skeleton className="skeleton-custom" width="100%" height="100%" />
			</div>
		)}
		<LazyLoadImage
			src={!isImgError ? imgUrl : defaultImg}
			alt={altTxt}
			style={{ width: '100%', height: '100%', objectFit: objectFit }}
			onLoad={onImgLoaded}
			onError={onImgError}
		/>
	</div>
}