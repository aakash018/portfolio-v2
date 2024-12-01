"use client"
import { useEffect, useRef } from "react"

export const GlowBall = () => {
	const divRef = useRef<HTMLDivElement>(null)
	const handleMouseMove = (event: MouseEvent) => {
		if (!divRef.current) return
		console.log("we are here")
		divRef.current!.style.background = `radial-gradient(600px at ${event.clientX}px ${event.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`
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
		<div ref={divRef} className="w-full h-full pointer-events-none z-[1] fixed top-0 left-0 hidden lg:block" />
	)
}
