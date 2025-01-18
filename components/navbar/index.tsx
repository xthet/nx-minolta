"use client"
import { useScroll } from "@/hooks/useScroll"
import HamburgerMenuIcon from "@/public/icons/hamburger"
import ProfileIcon from "@/public/icons/profile"
import SearchIcon from "@/public/icons/search"
import ShoppingBagIcon from "@/public/icons/shopping-bag"

export default function Navbar() {
	const { scrollY } = useScroll()
	return (
		<nav className="fixed top-0 left-0 right-0 pt-2 md:pt-5 px-2 md:p-5 z-[989]">
			{/* //!mobile */}
			<div
				className={`w-full text-iitxtcol grid grid-cols-3 gap-2 p-2 md:hidden ${
					scrollY <= 15
						? ""
						: "bg-[hsla(93,42%,13%,0.3)] text-txtcol backdrop-blur-lg shadow-[0px_2px_10px_8px_rgba(0,0,0,0.1)]"
				}`}
			>
				<span className="fl-cl">
					<HamburgerMenuIcon className="size-[46px] cursor-pointer" />
				</span>
				<span className="fl-cc text-center text-2xl font-bold cursor-pointer ">
					MINOLTA.
				</span>
				<div className="w-full fl-cr font-medium">
					{/* <span>EN</span> */}
					{/* <span className="w-[1px] h-3 bg-iitxtcol"></span> */}
					<span
						className={`fl-cc size-[46px] rounded-full border border-iitxtcol ${
							scrollY <= 15 ? "" : "border-txtcol"
						}`}
					>
						<span className="relative">
							<ShoppingBagIcon
								className={`w-6 h-6 text-iitxtcol ${
									scrollY <= 15 ? "" : "text-txtcol"
								}`}
							/>
						</span>
					</span>
					{/* <span className="w-[1px] h-3 bg-iitxtcol"></span>
					<span className="fl-cc bg-subcol size-[46px] rounded-full">
						<ProfileIcon className="w-6 h-6 text-iitxtcol" />
					</span> */}
				</div>
			</div>

			{/* //!desktop */}
			<div
				className={`w-full md:grid md:grid-cols-3 gap-2 p-3 hidden ${
					scrollY <= 15
						? "text-iitxtcol"
						: "bg-[hsla(93,42%,13%,0.3)] backdrop-blur-lg text-subcol"
					// : "bg-[hsla(93,42%,13%,0.3)] backdrop-blur-lg shadow-[0px_2px_10px_8px_rgba(0,0,0,0.1)] text-subcol"
				}`}
			>
				<div className="fl-cl gap-4">
					<div className="rounded-full bg-subcol px-4 py-3 fl-cl gap-2">
						<HamburgerMenuIcon className="size-6 text-iitxtcol" />
						<span className="font-medium text-iitxtcol">Menu</span>
					</div>

					<div className="fl-cl gap-2 bg-subcol rounded-full px-4 py-3 w-[20vw] max-w-[297px]">
						<SearchIcon className="size-6 text-iitxtcol" />
						<span className="font-medium text-iitxtcol">Search</span>
					</div>
				</div>
				<div className="font-bold text-3xl w-full fl-cc text-center">
					MINOLTA.
				</div>
				<div className="w-full fl-cr gap-6 font-medium">
					{/* <span>EN</span> */}
					{/* <span className="w-[1px] h-3 bg-iitxtcol"></span> */}
					<span
						className={`fl-cc size-[46px] rounded-full border ${
							scrollY <= 15 ? "border-iitxtcol" : "border-subcol"
						}`}
					>
						<span className="relative">
							<ShoppingBagIcon className="w-6 h-6" />
						</span>
					</span>
					<span className="w-[1px] h-3 bg-iitxtcol"></span>
					<span className="fl-cc bg-subcol size-[46px] rounded-full">
						<ProfileIcon className="w-6 h-6 text-iitxtcol" />
					</span>
				</div>
			</div>
		</nav>
	)
}
