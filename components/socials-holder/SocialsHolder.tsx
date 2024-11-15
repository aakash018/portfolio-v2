import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react"

export const SocialHolder = () => {
	return (

		<div className="text-foregroundMute flex gap-4 mt-8">
			<IconBrandGithub size={32} />
			<IconBrandLinkedin size={32} />
			<IconBrandInstagram size={32} />
		</div>
	)
}
