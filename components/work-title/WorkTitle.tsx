import { IconArrowRight } from "@tabler/icons-react"

interface Props {
	title: string
	showLinkIcon?: boolean
}
export const WorkTitle = ({ title, showLinkIcon = true }: Props) => {
	return (
		<div className="flex items-center gap-1">

			<section className="font-bold hover:text-highlight group-hover:text-highlight group transition-colors">
				{title}
			</section>
			{showLinkIcon && <IconArrowRight size={16} className="-rotate-45 hover:text-highlight group-hover:text-highlight group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
		</div>

	)
}
