import ErrorSvg from '@/assets/images/error.svg'

export function Error() {
	return <section className="error-page">
		<ErrorSvg />
		<div className="error-msg">
			<h1>Oops, something unexpected happened</h1>
			<p>Please come back later...</p>
		</div>
	</section>
}