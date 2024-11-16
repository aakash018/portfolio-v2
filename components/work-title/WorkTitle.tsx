interface Props {
	title: string
}
export const WorkTitle = ({ title }: Props) => {
	return (
		<section className="font-bold group-hover:text-highlight transition-colors">
			{title}
		</section>

	)
}
