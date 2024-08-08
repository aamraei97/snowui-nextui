import { Button } from "@nextui-org/button";
import { Dropdown, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
// Assets
import MoreIcon from "@/components/icons/more";

interface ATableActionDropdownProps {
	children: any;
}
export function ATableActionDropdown(props: ATableActionDropdownProps) {
	// Props
	const { children } = props;

	return (
		<div className="mr-auto flex justify-end opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-has-[&_button[aria-expanded='true']]:opacity-100">
			<Dropdown
				classNames={{
					content: "shadow-none border border-black/[.10] rounded-2xl min-w-40",
				}}
				placement="bottom-start"
			>
				<DropdownTrigger>
					<Button variant="flat" isIconOnly size="sm">
						<MoreIcon width="18px" height="18px" />
					</Button>
				</DropdownTrigger>
				<DropdownMenu aria-label="Static Actions">{children}</DropdownMenu>
			</Dropdown>
		</div>
	);
}
