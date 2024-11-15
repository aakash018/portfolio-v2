export const IconGradient = () => (
	<svg focusable="false" style={{
		width: 0,
		height: 0,
		position: "absolute"
	}}>
		<linearGradient id="my-gradient-1" x2="0" y2="1">
			<stop offset="0%" stopColor="green" />
			<stop offset="50%" stopColor="red" />
		</linearGradient>

		<linearGradient id="my-gradient-2">
			<stop offset="0%" stop-color="var(--color-stop-1)" />
			<stop offset="50%" stop-color="var(--color-stop-2)" />
			<stop offset="100%" stop-color="var(--color-stop-3)" />
		</linearGradient>
	</svg>
)
