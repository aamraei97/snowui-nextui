"use client";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown";
// Types
import { ProjectType } from "@/types";

// Components
import { ATableCell, ATableRow } from "@/components/ui/a-table";

// Assets
import MoreIcon from "@/components/icons/more";
import { Button } from "@nextui-org/button";

interface ProjectsItemProps {
	project: ProjectType;
}
export function ProjectsItem(props: ProjectsItemProps) {
	// Props
	const { project } = props;

	return (
		<ATableRow>
			<ATableCell>{project.name}</ATableCell>
			<ATableCell>{project.email}</ATableCell>
			<ATableCell>{project.registerDate}</ATableCell>
			<ATableCell>
				<Dropdown
					classNames={{
						content: "shadow-none border border-black-main/[.10] rounded-2xl",
					}}
				>
					<DropdownTrigger>
						<Button variant="light" isIconOnly size="sm">
							<MoreIcon width="18px" height="18px" />
						</Button>
					</DropdownTrigger>
					<DropdownMenu aria-label="Static Actions">
						<DropdownItem key="new">New file</DropdownItem>
						<DropdownItem key="copy">Copy link</DropdownItem>
						<DropdownItem key="edit">Edit file</DropdownItem>
						<DropdownItem key="delete" className="text-danger" color="danger">
							Delete file
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</ATableCell>
		</ATableRow>
	);
}
