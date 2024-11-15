import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr"

export const SocialHolder = () => {
	return (

		<div className="flex gap-4 mt-8">
			<GithubLogo size={24} />
			<LinkedinLogo size={24} />
			<InstagramLogo size={24} />
		</div>
	)
}
