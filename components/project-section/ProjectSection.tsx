import { ProjectHolder } from "../project-holder/ProjectHolder"
import { SectionHeader } from "../section-header/SectionHeader"

export const ProjectSection = () => {
	return (
		<div id="proj" className="">
			<SectionHeader title="Projects" />
			<ProjectHolder
				desc="A visualization of Dijkstra's shortest path-finding algorithm, allowing users to set start and end nodes, draw obstacles (walls), and observe how the algorithm calculates the optimal path while avoiding the walls. The tool provides a clear visual representation of the algorithm's internal processes, offering insights into its step-by-step operation."
				link="https://dijkastra-visualization.netlify.app/"
				title="Visualization of Dijkstra's algorithm"
				imageUrl="/djk.png"
				tags={[
					"Typescript",
					"Vite",
					"Scss",
					"React"
				]}
			/>
		</div>
	)
}
