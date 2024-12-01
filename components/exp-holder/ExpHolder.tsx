"use client"
import { Tags } from "../tags/Tags"
import { WorkTitle } from "../work-title/WorkTitle"

interface Props {
	date: string,
	title: string,
	description: string,
	tech: string[]
	compLink: string
	id: string
}

export const ExpHolder = ({ id, compLink, date, title, description, tech }: Props) => {
	const handleOnclick = () => {
		window.open(compLink, "_blank")
	}
	return (
		<div id={id} onClick={handleOnclick} className="md:flex lg:px-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-40 transition-all lg:py-4 lg:hover:bg-[#0e1b3860] lg:hover:shadow lg:hover:shadow-[#1d315c] cursor-pointer group rounded-md" >
			<section className="md:flex-1 text-vsm uppercase text-foregroundMute">{date}</section>
			<div className="md:w-[70%]" >
				<WorkTitle title={title} />
				<section className="text-sm text-foregroundMute mt-2">{description}</section>
				<div className="mt-2 flex flex-wrap gap-2">
					{
						tech.map((th, i) => (
							<Tags key={i} content={th} />
						))
					}
				</div>
			</div>
		</div>
	)
}
