import NotFoundIcon from '@/assets/images/404.svg'
import { Link } from 'react-router-dom'

export function NotFound() {
	return <section className="error-page not-found">
		<NotFoundIcon />

		<div>
			<h1>ERROR 404: </h1>
			<h4>Page not found</h4>
			<Link to="/item"> Click here to view our gallery</Link>
		</div>
	</section>
}