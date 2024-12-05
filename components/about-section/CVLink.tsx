"use client"

import { WorkTitle } from "../work-title/WorkTitle"

export const CVLink = () => {
	return (

		<div className="mt-8 cursor-pointer group" onClick={() => {
			window.open("/CV.pdf", "_blank")
		}}>
			<WorkTitle title="View Full Resume" />
		</div>
	)
}
