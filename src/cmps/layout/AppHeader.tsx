import { Link } from "react-router-dom";


export function AppHeader() {
	return <header className="app-header ">
		<Link to="/item"><h1>Unith</h1></Link>
	</header>
}