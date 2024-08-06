export function ASideNavMenu() {

	const links = [
		{
			key: "nav-1",
			title: 'لیست',
			children: [
				{ key: "nav-11", title: 'مقالات' },
				{ key: "nav-12", title: 'گزارشات' },
				{ key: "nav-13", title: 'کاربران' },
				{ key: "nav-14", title: 'تقسیمات کشوری' },
			]
		},
		{
			key: "nav-2",
			title: 'لیست',
			children: [
				{ key: "nav-21", title: 'مقالات' },
				{ key: "nav-22", title: 'گزارشات' },
				{ key: "nav-23", title: 'کاربران' },
				{ key: "nav-24", title: 'تقسیمات کشوری' },
			]
		},
		{
			key: "nav-3",
			title: 'لیست',
			children: [
				{ key: "nav-31", title: 'مقالات' },
				{ key: "nav-32", title: 'گزارشات' },
				{ key: "nav-33", title: 'کاربران' },
				{ key: "nav-34", title: 'تقسیمات کشوری' },
			]
		}
	]
	return (
		<nav className="grid px-4 mt-20">
			<ul className="grid gap-2">
				{
					links.map(link => (
						<li className="grid" key={link.key}>
							<div className="group max-h-9 has-[input.main:checked]:max-h-screen transition-all duration-500 overflow-hidden">
								<label htmlFor={link.key}
									className={`cursor-pointer text-sm has-[input:checked]:font-normal flex has-[input.main:checked]:hidden items-center gap-2 px-4 h-[36px] rounded-lg 
									hover:bg-black-main/5 has-[input:checked]:bg-black-main/5 transition-all duration-300`}>
									<span className="w-4"></span>
									{link.title}
									<input type="radio" name="menuRadio" id={link.key} className="main appearance-none opacity-0 w-0 h-0" />
								</label>
								<label htmlFor={link.key + 'fake'}
									className={`cursor-pointer text-sm has-[input.main:checked]:font-normal group-has-[input.main:checked]:flex items-center gap-2 px-4 h-[36px] rounded-lg 
									hover:bg-black-main/5 has-[input.main:checked]:bg-black-main/5 transition-all duration-300 hidden `}>
									<span className="w-4"></span>
									{link.title}
									<input type="radio" name="menuRadio" id={link.key + 'fake'} className="" />
								</label>
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
							</div>
						</li>
					))
				}
			</ul>
		</nav>
	)
}