import { ExpHolder } from "../exp-holder/ExpHolder"
import { SectionHeader } from "../section-header/SectionHeader"

export const ExpSection = () => {
	return (
		<div id="exp" className="">
			<SectionHeader title="Experience" />
			<div className="flex flex-col gap-12 group/list">
				<ExpHolder
					compLink="https://www.linkedin.com/company/awakeneddevs/"
					id="awakened"
					date="July 15 - Present"
					title="Mid Fullstack Developer > Awakened Devs"
					description="As a Fullstack Developer, I played a key role in designing and developing a ticket booking application, focusing on system architecture, database design, API production, and seamless integration with the frontend to deliver a user-friendly experience. I also took on the responsibilities of a Team Lead, managing a small group of developers where I distributed tasks, monitored progress, and ensured project deadlines were consistently met. "
					tech={[
						"Typescript",
						"Nodejs",
						"Tailwind",
						"Firebase",
						"IMEPay",
						"SparrowSMS",
						"Nextjs",
						"Postgres",
						"DrizzleORM"
					]}
				/>
				<ExpHolder
					date="2023 - 2024"
					id="channakya"
					title="Juinor Fullstack Developer  >  Channakya Soft"
					compLink="https://www.channakyasoft.com/"
					description="My primary focus was integrating pre-developed APIs into the frontend, ensuring seamless functionality and a smooth user experience. Additionally, I gained experience in creating a few GraphQL APIs to enhance the system's capabilities. Working alongside senior developers provided me with invaluable learning opportunities, helping me to grow both technically and professionally."
					tech={[
						"Typescript",
						"Nodejs",
						"Tailwind",
						"GraphQL",
						"Vite",
						"Postgres",
						"MySql",
						"Knex"
					]}
				/>
			</div>
		</div>
	)
}
