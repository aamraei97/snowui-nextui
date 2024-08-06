
export type LinksType = {
	key:string 
	title: string 
	path?:string
	children?:LinksType
}[]
const links:LinksType = [
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

export {links}