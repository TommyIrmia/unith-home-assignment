import { Link } from "react-router-dom";
import { Image } from "../common/Image";

import Logo from "@/assets/images/logo.png";


export function AppHeader() {
	return <header className="app-header">
		<section className="app-header-content">
			<div className="logo-container">
				<Link to="/item">
					<Image imgUrl={Logo} altTxt="logo" width="5.7rem" objectFit="contain" />
				</Link>
			</div>
		</section>
	</header>
}