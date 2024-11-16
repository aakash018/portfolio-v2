import { NavigatorHolder } from "./NavigatorHolder"

export const Navigator = () => {

	return (
		<div className="lg:flex mt-12 flex-col hidden gap-4" >
			<NavigatorHolder activateOn="about" title="About" />
			<NavigatorHolder activateOn="exp" title="Experience" />
			<NavigatorHolder title="Projects" activateOn="proj" />
		</div>
	)
}
