
import React from "react";

type SvgProps = React.SVGProps<SVGSVGElement>;

export const IconExpress: React.FC<SvgProps> = (props) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 256 256"
			{...props} // Allows additional props like `className`, `style`, etc.
		>
			<g
				fillRule="nonzero"
				stroke="none"
				strokeWidth="1"
				strokeLinecap="butt"
				strokeLinejoin="miter"
				strokeMiterlimit="10"
				strokeDasharray=""
				strokeDashoffset="0"
				fontFamily="none"
				fontWeight="none"
				fontSize="none"
				textAnchor="none"
				style={{ mixBlendMode: "normal" }}
			>
				<g transform="scale(5.33333,5.33333)">
					<path d="M23.697,37.56h1.18c0.84,0 1.631,-0.392 2.139,-1.061l7.485,-9.847l7.485,9.847c0.508,0.668 1.299,1.061 2.139,1.061h1.18l-9.549,-12.56l9.121,-12h-1.18c-0.84,0 -1.631,0.392 -2.139,1.061l-7.058,9.286l-7.059,-9.287c-0.508,-0.668 -1.299,-1.06 -2.139,-1.06h-1.18l9.121,12z"></path>
					<path d="M24,26v-3c0,-6.675 -5.945,-11.961 -12.829,-10.852c-5.359,0.863 -9.171,5.709 -9.171,11.136v0.716v2v0.142c0,6.553 4.777,11.786 10.868,11.858c5.092,0.06 9.389,-3.344 10.707,-7.999h-1.028c-0.62,0 -1.182,0.355 -1.451,0.913c-1.739,3.595 -5.789,5.862 -10.228,4.842c-4.092,-0.941 -6.868,-4.775 -6.868,-8.973v-0.783zM4,23.71c0,-4.708 2.804,-8.557 6.924,-9.478c5.874,-1.312 11.076,3.12 11.076,8.768v1h-18z"></path>
				</g>
			</g>
		</svg>
	);
};


