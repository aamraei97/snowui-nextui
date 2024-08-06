// Components
import { ASideNavMenu } from "./a-sidenav-menu";

export function ASidenav() {
	return (
		<div className="fixed top-0 right-0 border-l border-l-black-main/10 w-60 h-full">
			<ASideNavMenu />
		</div>
	)
}