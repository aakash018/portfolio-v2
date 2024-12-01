"use client"
import Image from "next/image"
import { WorkTitle } from "../work-title/WorkTitle"

interface Props {
	title: string,
	image: string
	link: string
}

export const WritingHolder = ({ title, image, link }: Props) => {
	const handleOnCLick = () => {
		window.open(link, "_blank")
	}
	return (
		<div onClick={handleOnCLick} >
			<div className="md:flex flex-row-reverse gap-8 lg:px-4 lg:hover:!opacity-100 lg:group-hover/proj:opacity-40 transition-all lg:py-4 lg:hover:bg-[#0e1b3860] lg:hover:shadow lg:hover:shadow-[#1d315c] cursor-pointer group rounded-md">
				<div className="md:w-[70%]" >
					<WorkTitle title={title} />
				</div>
				<div className="mt-4 md:mt-0 md:flex-1" >
					<a href={link} target="_blank">
						<Image src={image} className="rounded-sm hover:border border-foregroundMute hover:border-foreground cursor-pointer md:w-[250px] md:h-full lg:max-h-[90px]" width={150} height={70} alt="writing" />
					</a>
				</div>
			</div>
		</div>
	)
}
