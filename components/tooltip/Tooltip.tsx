import { ReactNode } from "react";

export const Tooltip = ({ children, content }: { children: ReactNode, content: string }) => {
	return (
		<div className="relative group">
			{/* Target Element */}
			{children}

			{/* Tooltip */}
			<div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 hidden group-hover:flex flex-col items-center">
				<div className="bg-gray-800 text-white text-sm py-1 px-2 rounded shadow-lg">
					{content}
				</div>
				{/* Optional Tooltip Arrow */}
				<div className="h-2 w-2 bg-gray-800 rotate-45 -mt-1"></div>
			</div>
		</div>
	);
};
