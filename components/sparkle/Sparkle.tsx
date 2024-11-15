import "./spark.css"
export const Spark = () => {
	return (
		<svg width="50" height="50" viewBox="0 0 100 100">
			<g className="ggs" opacity="0.8">
				<g className="large">
					<path
						className="spark-path"
						d="M41.25,40 L42.5,10 L43.75,40 L45, 41.25 L75,42.5 L45,43.75
            L43.75,45 L42.5,75 L41.25,45 L40,43.75 L10,42.5 L40,41.25z"
						fill="white"
					/>
				</g>
				<g className="large-2" transform="rotate(45)">
					<use href="#large" />
				</g>
				<g className="small">
					<path

						className="spark-path"
						d="M41.25,40 L42.5,25 L43.75,40 L45,41.25 L60,42.5 L45,43.75
            L43.75,45 L42.5,60 L41.25,45 L40,43.75 L25,42.5 L40,41.25z"
						fill="white"
					/>
				</g>
			</g>
		</svg>
	);
};

export default Spark;
