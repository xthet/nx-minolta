"use client"
import { useScroll } from "@/hooks/useScroll"
import HamburgerMenuIcon from "@/public/icons/hamburger"
import ProfileIcon from "@/public/icons/profile"
import SearchIcon from "@/public/icons/search"
import ShoppingBagIcon from "@/public/icons/shopping-bag"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

gsap.registerPlugin(useGSAP)

export default function Navbar() {
	const { scrollY } = useScroll()
	const con = useRef<any>(null)

	useGSAP(
		() => {
			gsap.from(".nav", {
				opacity: 0,
				y: -30,
				autoAlpha: 0,
				ease: "power4.inOut",
				delay: 0.4,
				duration: 1.3,
			})
		},
		{ scope: con }
	)

	return (
		<nav
			className="fixed top-0 left-0 right-0 pt-2 md:pt-5 px-2 md:p-5 z-[989]"
			ref={con}
		>
			{/* //!mobile */}
			<div
				className={`nav invisible w-full text-iitxtcol grid grid-cols-3 gap-2 p-2 md:hidden ${
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
				className={`nav invisible w-full md:grid md:grid-cols-3 gap-2 p-3 hidden ${
					scrollY <= 15
						? "text-iitxtcol"
						: "bg-[hsla(93,42%,13%,0.3)] backdrop-blur-lg text-subcol"
					// : "bg-[hsla(93,42%,13%,0.3)] backdrop-blur-lg shadow-[0px_2px_10px_8px_rgba(0,0,0,0.1)] text-subcol"
				}`}
			>
				<div className="fl-cl gap-4">
					<div className="rounded-full bg-subcol px-4 py-3 fl-cl gap-2 cursor-pointer hover:bg-defcol duration-300">
						<HamburgerMenuIcon className="size-6 text-iitxtcol" />
						<span className="font-medium text-iitxtcol">Menu</span>
					</div>

					<div className="fl-cl gap-2 bg-subcol rounded-full px-4 py-3 w-[20vw] max-w-[297px] hover:bg-defcol duration-300">
						<SearchIcon className="size-6 text-iitxtcol" />
						<input
							className="w-1/2 flex-grow bg-transparent border-none outline-none font-medium text-iitxtcol"
							placeholder="Search"
						></input>
					</div>
				</div>
				<div className="font-bold text-3xl w-full fl-cc text-center">
					MINOLTA.
				</div>
				<div className="w-full fl-cr gap-6 font-medium">
					{/* <span>EN</span> */}
					{/* <span className="w-[1px] h-3 bg-iitxtcol"></span> */}
					<span
						className={`fl-cc size-[46px] cursor-pointer hover:bg-defcol duration-300 rounded-full border ${
							scrollY <= 15
								? "border-iitxtcol hover:border-defcol"
								: "border-subcol hover:border-pricol hover:bg-pricol"
						}`}
					>
						<span className="relative">
							<ShoppingBagIcon
								className={`w-6 h-6 ${
									scrollY <= 15 ? "text-iitxtcol" : "text-txtcol"
								}`}
							/>
						</span>
					</span>
					<span className="w-[1px] h-3 bg-iitxtcol"></span>
					<span className="fl-cc bg-subcol size-[46px] rounded-full cursor-pointer hover:bg-defcol duration-300">
						<ProfileIcon className="w-6 h-6 text-iitxtcol " />
					</span>
				</div>
			</div>
		</nav>
	)
}
