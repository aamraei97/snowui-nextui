// Components
import { SideNavMenu } from "./sidenav-menu";

export function Sidenav() {
	return (
		<div className="fixed top-0 right-0 border-l border-l-black-main/10 w-60 h-full">
			<SideNavMenu />
		</div>
	)
}