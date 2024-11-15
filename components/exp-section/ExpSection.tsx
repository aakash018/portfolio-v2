import { ExpHolder } from "../exp-holder/ExpHolder"
import { SectionHeader } from "../section-header/SectionHeader"

export const ExpSection = () => {
	return (
		<div className="h-[1000px]">
			<SectionHeader title="Experience" />
			<div>
				<ExpHolder />
			</div>
		</div>
	)
}
