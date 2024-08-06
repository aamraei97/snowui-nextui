import { Sidenav } from "@/components/layout/sidenav"

interface PanelLayoutProps {
	children: React.ReactNode
}

export default function PanelLayout(props: PanelLayoutProps) {
	// Props
	const { children } = props

	return (
		<div className="pr-60 grid" style={{ direction: "rtl" }}>
			<Sidenav />
			<div className="border-b border-b-black-main/10 h-[68px]">
				sdsd
			</div>
			<div className="p-7 grid">
				{children}
			</div>
		</div>
	)
}