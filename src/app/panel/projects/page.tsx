// Types
import { ProjectType } from "@/types";

// Components
import { ATable } from "@/components/ui/a-table";
import { ProjectsItem } from "@/features/projects/projects-item";

const tableColumns = [
	{ title: 'کاربر' },
	{ title: 'ایمیل' },
	{ title: 'تاریخ ثبت‌نام' },
]
const users: ProjectType[] = [
	{ name: "آمان", email: "aa@gmail.com", registerDate: "1403-08-09" },
	{ name: "آمان", email: "aa@gmail.com", registerDate: "1403-08-09" },
	{ name: "آمان", email: "aa@gmail.com", registerDate: "1403-08-09" }
]
export default function ProjectsPage() {
	return (
		<div className="grid gap-3">
			<div className="bg-[#F7F9FB] rounded-lg h-[44px] p-2">
				sd
			</div>
			<ATable
				columns={tableColumns}
				rows={users}
				renderRow={(row, index) => <ProjectsItem key={`row-${index}`} project={row} />}
				withOperations
			/>
		</div>
	)
}
