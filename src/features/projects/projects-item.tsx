"use client"
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownSection,
	DropdownItem
} from "@nextui-org/dropdown";
// Types
import { ProjectType } from "@/types";

// Components
import { ATableCell, ATableRow } from "@/components/ui/a-table";

// Assets
import MoreIcon from "@/components/icons/more"
import { Button } from "@nextui-org/button";

interface ProjectsItemProps {
	project: ProjectType
}
export function ProjectsItem(props: ProjectsItemProps) {
	// Props
	const { project } = props

	return (
		<ATableRow>
			<ATableCell>{project.name}</ATableCell>
			<ATableCell>{project.email}</ATableCell>
			<ATableCell>{project.registerDate}</ATableCell>
			<ATableCell>
				<Dropdown>
					<DropdownTrigger>
						<Button
							variant="light" isIconOnly size="sm"
						>
							<MoreIcon />
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
	)
}