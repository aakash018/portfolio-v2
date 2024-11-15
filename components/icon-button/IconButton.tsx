import { Tooltip } from "../tooltip/Tooltip"

interface Props {
	icon: React.ReactNode,
	tooltipContent: string
}
export const IconButton = ({ icon, tooltipContent }: Props) => {

	return (
		<Tooltip content={tooltipContent}>
			<div className="text-[32px] text-foregroundMute hover:text-foreground">
				{icon}
			</div>
		</Tooltip>
	)
}
