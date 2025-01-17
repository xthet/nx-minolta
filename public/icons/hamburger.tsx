import { SVGProps } from "react"

export default function HamburgerMenuIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M3 12H21M3 6H21M3 18H21"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	)
}
