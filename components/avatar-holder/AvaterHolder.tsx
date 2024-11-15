"use client"
import Image from "next/image"
import Spark from "../sparkle/Sparkle"
import { useEffect, useState } from "react"

export const AvatarHolder = () => {
	const [showSpark, setShowSpark] = useState(false)

	useEffect(() => {
		const sparkTimer = setTimeout(() => {
			setShowSpark(false)
		}, 2500)
		return () => clearTimeout(sparkTimer)
	}, [showSpark])

	return (

		<div className="relative w-[100px] ">
			<div className={`${showSpark ? "block" : "hidden"} absolute bottom-[-12px] right-[35px]`}>

				<Spark />
			</div>
			<Image
				onMouseEnter={() => {
					setShowSpark(true)
				}}
				src="/avatar.png"
				width={100}
				className="-ml-6 -mb-4 cursor-pointer"
				height={100}
				alt="avatar"
			/>
		</div>
	)
}
