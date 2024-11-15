import { Tags } from "../tags/Tags"

export const ExpHolder = () => {
	return (
		<div>
			<section className="text-sm text-foregroundMute">2018 - 2019</section>
			<section className="font-bold hover:text-highlight cursor-pointer">Lead Engineer · Upstatement</section>
			<section className="text-sm text-foregroundMute mt-2">Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</section>
			<div className="mt-2 flex flex-wrap gap-2">
				<Tags content="Typescript" />
				<Tags content="Nextjs" />
				<Tags content="Tailwind" />
				<Tags content="Postgres" />
				<Tags content="Drizzle" />
			</div>
		</div>
	)
}
