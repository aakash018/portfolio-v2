import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react"
import { Tooltip } from "../tooltip/Tooltip"

export const SocialHolder = () => {

	return (

		<div className="text-foregroundMute flex gap-4 mt-8">
			<Tooltip content="Github">
				<a href="https://github.com/aakash018" target="_blank">	<IconBrandGithub size={32} className="hover:text-foreground cursor-pointer" /></a>
			</Tooltip>
			<Tooltip content="LinkedIn">
				<a href="https://www.linkedin.com/in/aakash-khanal-a51b4420b/" target="_blank"><IconBrandLinkedin size={32} className="hover:text-foreground cursor-pointer" /></a>
			</Tooltip>
			<Tooltip content="Instragram">
				<a href="https://www.instagram.com/sw17t/" target="_blank"><IconBrandInstagram size={32} className="hover:text-foreground cursor-pointer" /></a>
			</Tooltip>
		</div>
	)
}
