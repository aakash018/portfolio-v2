"use client"

import { useEffect, useState } from "react";


interface Props {
	title: string
	activateOn: string
}
export const NavigatorHolder = ({ title, activateOn }: Props) => {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const div = document.getElementById(activateOn);
			if (!div) return
			const rect = div.getBoundingClientRect();
			const isInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

			setIsActive(isInView);
		};

		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Cleanup event listener
		return () => window.removeEventListener("scroll", handleScroll);
	}, [activateOn]);
	return (
		<a href={`#${activateOn}`} >

			<div className="flex gap-4 items-center group cursor-pointer">
				<div className={`${isActive ? "!bg-foreground !w-14" : ""} w-6 h-[1px] bg-foregroundMute group-hover:w-14 group-hover:bg-foreground transition-all`}></div>
				<div className="text-vsm uppercase tracking-wider text-foregroundMute group-hover:text-foreground" >{title}</div>
			</div>
		</a>
	)
}