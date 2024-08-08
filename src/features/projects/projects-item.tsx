"use client";
import { DropdownItem } from "@nextui-org/dropdown";
// Types
import { ProjectType } from "@/types";

// Components
import { ATableCell, ATableRow } from "@/components/ui/a-table";

// Assets
import { ATableActionDropdown } from "@/components/ui/a-table/a-table-action-dropdown";

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
				<ATableActionDropdown>
					<DropdownItem key="new">ایجاد فایل</DropdownItem>
					<DropdownItem key="edit">ویرایش فایل</DropdownItem>
					<DropdownItem key="delete" className="text-danger" color="danger">
						حذف فایل
					</DropdownItem>
				</ATableActionDropdown>
			</ATableCell>
		</ATableRow>
	);
}
