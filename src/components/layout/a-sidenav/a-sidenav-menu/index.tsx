// Assets
import clsx from "clsx"
import { LinksType, links } from "./links"


export function ASideNavMenu() {
	return (
		<nav className="grid px-4 mt-20">
			<ul className="grid gap-2">
				{
					links.map(link => (
						<li className="grid" key={link.key}>
							<div className="group max-h-9 has-[input.original-input:checked]:max-h-screen transition-all duration-500 overflow-hidden">
								{/* {JSON.stringify(link)} */}
								<ASideNavMenuLinkLabel link={link} id={link.key} />
								<ASideNavMenuLinkLabel link={link} id={link.key + 'dummy'} isDummy />
								{
									link.children && (
										<ul className="grid pr-10">
											{
												link.children.map(child => (
													<li className="flex" key={child.key}>
														<span className="flex items-center h-9 text-black-main/70 text-sm">
															{child.title}
														</span>
													</li>
												))
											}
										</ul>
									)
								}
							</div>
						</li>
					))
				}
			</ul>
		</nav>
	)
}

interface ASideNavMenuLinkLabelProps {
	link: LinksType[number]
	id: string
	isDummy?: boolean
}
function ASideNavMenuLinkLabel(props: ASideNavMenuLinkLabelProps) {
	// Props 
	const { link, id, isDummy = false } = props

	const labelSharedClasses = `cursor-pointer text-sm has-[input.original-input:checked]:font-normal   items-center gap-2 px-4 h-[36px] rounded-lg 
	hover:bg-black-main/5 group-has-[input.original-input:checked]:bg-black-main/5 transition-all duration-300   `
	return (
		<label htmlFor={id}
			className={clsx(labelSharedClasses, isDummy ? 'hidden group-has-[input.original-input:checked]:flex' : 'flex group-has-[input.original-input:checked]:hidden')}>
			<span className="w-4"></span>
			{link.title}
			<input type="radio" name="menuRadio" id={id} className={clsx('appearance-none opacity-0 w-0 h-0', { 'original-input': !isDummy })} />
		</label>
	)
}
