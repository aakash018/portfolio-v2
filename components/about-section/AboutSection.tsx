import { SectionHeader } from "../section-header/SectionHeader"
import { IconExpress } from "../icons/express"
import IconPostgres from "../icons/postgres"
import { IconNode } from "../icons/node"
import { IconButton } from "../icon-button/IconButton"
import { IconTypescript } from "../icons/typescript"
import { IconJavascript } from "../icons/javascript"
import { IconPython } from "../icons/python"
import { IconReact } from "../icons/react"
import { IconTailwind } from "../icons/tailwind"
import { IconVite } from "../icons/vite"
import { IconNext } from "../icons/nextjs"
import Image from "next/image"
import { CVLink } from "./CVLink"
export const AboutSection = () => {
	return (
		<div id="about" className="lg:px-4">
			<SectionHeader title="About" />
			<div className="text-md text-foregroundMute lg:leading-[26px]">
				I am <span className="text-foreground font-semibold" >full-stack</span> web developer from <span className="text-foreground font-bold">Nepal </span>with over <span className="text-foreground font-semibold">two years</span> of experience and a bachelor’s degree in <span className="text-foreground font-semibold">Computer Engineering </span> from Tribhuvan University. Over the past year, I’ve had the chance to dive into a mix of projects, building and fine-tuning <span className="text-foreground font-bold">web apps </span>from top to bottom—whether it’s crafting the user interface or making sure everything runs smoothly behind the scenes. </div>
			<div className="text-sm text-foreground mt-4">
				<div className="uppercase text-sm font-bold">
					Technologies that I love
				</div>
				<h2 className="mt-4">Language</h2>
				<div className="flex gap-4 text-foregroundMute mt-2">
					<IconButton
						icon={<IconTypescript width={32} height={32} />}
						tooltipContent="Typescript"
					/>
					<IconButton
						icon={<IconJavascript width={32} height={32} />}
						tooltipContent="Javascript"
					/>
					<IconButton
						icon={<IconPython width={32} height={32} />}
						tooltipContent="Python"
					/>
				</div>
				<div className="mt-2">Frontend</div>
				<div className="flex gap-4 text-foregroundMute mt-2">
					<IconButton tooltipContent="React" icon={<IconReact width={32} height={32} />} />
					<IconButton tooltipContent="Tailwind" icon={<IconTailwind width={32} height={32} />} />
					<IconButton tooltipContent="Vite" icon={<IconVite width={32} height={32} />} />
					<IconButton tooltipContent="Nextjs" icon={<IconNext width={32} height={32} />} />
					<IconButton tooltipContent="Zustand" icon={<Image src={"/zustand.svg"} alt="zustand" width={32} height={32} />} />
					<IconButton tooltipContent="React Query" icon={<Image src={"/react-q.svg"} alt="react-query" width={32} height={32} />} />
				</div>
				<div className="mt-2">Server</div>
				<div className="flex gap-4 text-foregroundMute mt-2">
					<IconButton tooltipContent="Express" icon={
						<IconExpress width={32} height={32} className="fill-foregroundMute hover:fill-foreground" />
					} />
					<IconButton tooltipContent="Postgres" icon={
						<IconPostgres width={32} height={32} className="fill-foregroundMute hover:fill-foreground" />
					} />
					<IconButton tooltipContent="Nodejs" icon={
						<IconNode width={32} height={32} className="fill-foregroundMute hover:fill-foreground" />
					} />
					<IconButton tooltipContent="Nest" icon={<Image src={"/nest.svg"} alt="nest" width={32} height={32} />} />
					<IconButton tooltipContent="Drizzle" icon={<Image src={"/drizzle.svg"} alt="drizzle" width={32} height={32} />} />
				</div>

			</div>
			<CVLink />
		</div>
	)
}
