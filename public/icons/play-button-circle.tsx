import { SVGProps } from "react"

export default function PlayButtonCircleIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			width="56"
			height="56"
			viewBox="0 0 56 56"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			fill="none"
		>
			<circle cx="28" cy="28" r="27.5" stroke="currentColor" />
			<path
				d="M33.4892 26.4559C33.7694 26.6049 34.0038 26.8273 34.1672 27.0993C34.3306 27.3713 34.417 27.6827 34.417 28C34.417 28.3173 34.3306 28.6287 34.1672 28.9007C34.0038 29.1727 33.7694 29.3951 33.4892 29.5441L26.0156 33.6082C24.8122 34.2633 23.334 33.4116 23.334 32.0647V23.9359C23.334 22.5884 24.8122 21.7373 26.0156 22.3913L33.4892 26.4559Z"
				fill="currentColor"
			/>
		</svg>
	)
}
