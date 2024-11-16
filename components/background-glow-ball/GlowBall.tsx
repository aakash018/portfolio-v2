"use client"
import { useEffect, useState } from "react"

export const GlowBall = () => {
	const [position, setPosition] = useState({
		x: 0,
		y: 0
	})
	const handleMouseMove = (event: MouseEvent) => {
		console.log(event.clientX, event.clientY, event.pageX, event.pageY)
		setPosition({
			x: event.pageX,
			y: event.pageY,
		});
	};

	useEffect(() => {
		// Add event listener to track mouse movement globally
		window.addEventListener("mousemove", handleMouseMove);

		// Cleanup the event listener when the component unmounts
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, [])
	return (
		<div style={{
			position: "absolute",
			top: position.y,
			left: position.x, background: 'radial-gradient(circle, #2563eb50, transparent)',
		}} className="opacity-50 pointer-events-none translate-x-[-50%] translate-y-[-50%] z-[-1] absolute w-[500px] h-[500px] " >


		</div>
	)
}
