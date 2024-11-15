interface Props {
	content: string
}
export const Tags = ({ content }: Props) => {
	return (
		<div className="bg-[#112B3A] text-highlight text-vsm px-2 py-1 w-fit rounded-full">
			{content}
		</div>
	)
}
