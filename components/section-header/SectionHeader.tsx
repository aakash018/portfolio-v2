interface Props {
	title: string
}
export const SectionHeader = ({ title }: Props) => {
	return (
		<div className="uppercase text-sm font-bold tracking-widest sticky top-0 z-20 backdrop-blur w-full py-4">
			{title}
		</div>
	)
}
