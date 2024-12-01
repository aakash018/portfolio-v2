import { ProjectHolder } from "../project-holder/ProjectHolder"
import { SectionHeader } from "../section-header/SectionHeader"

export const ProjectSection = () => {
	return (
		<div id="proj" className="">
			<SectionHeader title="Projects" />
			<div className="flex flex-col gap-8 group/proj" >
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

				<ProjectHolder
					desc="Implemented a version control system similar to Git, focusing on understanding its inner workings, such as commit management, branching, merging, conflict resolution, and history tracking, while exploring concepts like DAG structures, index staging, and efficient storage mechanisms."
					link="https://github.com/aakash018/git-clone"
					title="A Version Control System like Git"
					imageUrl="/git.png"
					tags={[
						"Typescript",
						"Shell",
					]}
				/>
			</div>
		</div>
	)
}
