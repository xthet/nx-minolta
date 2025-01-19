"use client"
import FacebookIcon from "@/public/icons/facebook"
import InstagramIcon from "@/public/icons/instagram"
import LinkedinIcon from "@/public/icons/linkedin"
import PlayButtonCircleIcon from "@/public/icons/play-button-circle"
import TiktokIcon from "@/public/icons/tiktok"
import YoutubeIcon from "@/public/icons/youtube"
import Image from "next/image"
import { useRef } from "react"
import { BsArrowRight, BsArrowUpRight, BsStarFill } from "react-icons/bs"
import useHomeAnimations from "./animations"

export default function Home() {
	const container = useRef<any>(null)
	useHomeAnimations(container)

	return (
		<section ref={container} className="w-full max-w-[1440px] mx-auto">
			<section className="w-full def-pdg">
				<section className="w-full h-svh fl-cc py-2 md:py-5 overflow-hidden">
					<div className="size-full bg-seccol rounded-[24px] fl-tl fl-c text-iitxtcol overflow-hidden">
						{/* //!mobile */}
						<div className="size-full relative fl-tl fl-c fl-sb gap-2 pt-[5rem] px-2 lg:hidden">
							<div className="fl-tl fl-c">
								<p className="text-[10px] md:text-base font-semibold anilbl1 invisible">
									(01)
								</p>
								<h1 className="font-bold text-[72px] md:text-[7rem] leading-none font-fonthd anih1 invisible">
									MINOLTA
									<br />
									PRO
									<br />
									16
								</h1>
								<p className="text-[10px] md:text-base font-semibold anilbl1 invisible">
									{new Date().getFullYear()}
								</p>
							</div>
							<div className="w-full fl-cr mt-auto mb-12 anisubh invisible">
								<div className="fl-bl fl-c gap-2 max-w-[60%]">
									<p className="text-right">
										Capture sharp images and Full HD (1080p) videos with the
										Minolta Pro Shot 16 Mega Pixel HD Digital Camera
									</p>
									<p className="fl-br gap-1 pb-1 border-b border-pricol font-semibold text-right hover:-translate-y-1 cursor-pointer duration-300">
										Read More
									</p>
								</div>
							</div>
							<div className="w-full fl-cl fl-sb gap-2 mb-2 invisible animbherocta relative z-20">
								<button className="w-1/2 flex-grow self-stretch font-medium text-defcol bg-[--iorange] fl-cc cursor-pointer hover:text-[--iorange] hover:bg-defcol rounded-full text-center durantion-300">
									Start Shopping
								</button>
								<PlayButtonCircleIcon className="size-10 text-[--iorange] hover:fill-white cursor-pointer duration-300 hover:[&>circle]:text-white" />
							</div>
							<div className="absolute top-0 bottom-0 right-0 left-0 z-10 fl-cc aniheroimg invisible">
								<div className="relative w-[90vw] aspect-[0.95/1] max-w-[704px] z-30 right-3 bottom-2">
									<Image
										alt="hero-img-i"
										src={"/images/mnl_i.png"}
										fill
										className="object-center object-cover"
									/>
								</div>
								<div className="absolute w-[90vw] max-w-[704px] aspect-[0.95/1] z-20">
									<Image
										alt="hero-img-ii"
										src={"/images/mnl_ii.png"}
										fill
										className="object-center object-cover"
									/>
								</div>
							</div>
							<div className="absolute top-[72%] md:top-[80%] left-2 fl-cl anisubh invisible">
								<div className="size-[40vw] max-w-[150px] max-h-[150px]">
									<Image
										alt="hero-img-i"
										src={"/images/mnl_vi.svg"}
										fill
										className="object-cover object-center"
									/>
								</div>
							</div>
						</div>
						{/* //!desktop */}
						<div className="hidden lg:fl-cl md:fl-c pt-[4rem] size-full">
							<div className="mx-auto fl-cl fl-c">
								<h1 className="font-fonthd font-bold text-[11.3vw] 2xl:text-[10.625rem] text-center whitespace-nowrap leading-none invisible anih1">
									MINOLTA PRO 16
								</h1>
								<p className="self-stretch fl-cl fl-sb font-semibold pl-[10px] pr-3 anilbl1 invisible">
									<span>(01)</span>
									<span>{new Date().getFullYear()}</span>
								</p>
							</div>
							<div className="absolute top-0 bottom-0 right-0 left-0 z-10 fl-bc pb-8 aniheroimg invisible">
								<div className="relative w-[40vw] aspect-[0.95/1] z-30 right-6 bottom-2 max-w-[704px] max-h-[738px]">
									<Image
										alt="hero-img-i"
										src={"/images/mnl_i.png"}
										fill
										className="object-center object-cover"
									/>
								</div>
								<div className="absolute size-[40vw] z-20 max-w-[704px] max-h-[738px]">
									<Image
										alt="hero-img-ii"
										src={"/images/mnl_ii.png"}
										fill
										className="object-center object-cover"
									/>
								</div>
							</div>
							<div className="absolute left-[78%] top-[40%] fl-cl anisubh invisible">
								<div className="size-[150px]">
									<Image
										alt="hero-img-i"
										src={"/images/mnl_vi.svg"}
										fill
										className="object-cover object-center"
									/>
								</div>
							</div>
							<div className="w-full fl-bl fl-sb mt-auto mb-8 pl-4 pr-[5vw] relative z-20">
								<div className="fl-tl fl-c gap-8 w-[21vw] anicta invisible">
									<p className="font-medium text-5xl">
										Minolta Pro Shot 16 Mega Pixel HD Digital Camera
									</p>
									<div className="w-full fl-cl fl-sb gap-2 mb-2">
										<button className="w-1/2 flex-grow self-stretch font-medium text-defcol bg-[--iorange] fl-cc cursor-pointer hover:text-[--iorange] hover:bg-defcol rounded-full text-center duration-300">
											Start Shopping
										</button>
										<PlayButtonCircleIcon className="size-10 text-[--iorange] hover:fill-white cursor-pointer duration-300 hover:[&>circle]:text-white" />
									</div>
								</div>
								<div className="fl-tl fl-c gap-5 w-[13vw] anisubh invisible">
									<p className="font-medium text-2xl">
										Captures sharp images and Full HD (1080p) video
									</p>
									<p className="fl-br gap-1 pb-1 border-b border-pricol font-semibold text-right hover:-translate-y-1 cursor-pointer duration-300">
										Read More
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>

			<section className="w-full def-pdg my-[1.5rem]">
				<section className="w-full def-pdg py-[1.5rem] fl-cl fl-c gap-4 md:fl-r md:fl-sb border-y border-[rgba(255,255,255,0.1)]">
					<p className="text-xl md:text-2xl lg:text-[2.5rem]">Sold on</p>
					<div className="w-full fl-cl fl-sb gap-2 md:w-2/3">
						<span className="relative">
							<img
								src={"/images/amazon.svg"}
								alt="trusted"
								className="object-center object-cover"
							/>
						</span>
						<span className="relative">
							<img
								src={"/images/alibaba.svg"}
								alt="trusted"
								className="object-center object-cover"
							/>
						</span>
						<span className="relative">
							<img
								src={"/images/shopify.svg"}
								alt="trusted"
								className="object-center object-cover"
							/>
						</span>
						<span className="relative">
							<img
								src={"/images/blibli.svg"}
								alt="trusted"
								className="object-center object-cover"
							/>
						</span>
					</div>
				</section>
			</section>

			<section className="fl-tl fl-c gap-4 w-full ref-pdg md:gap-[3.5rem]">
				<div className="w-full fl-cl fl-sb text-xs md:text-base">
					<small>(02)</small>
					<small>Minolta</small>
				</div>
				<div className="w-full fl-cl -mt-2 md:-mt-10 anidesc1">
					<h3 className="max-w-[791px] text-4xl md:text-[3rem] lg:text-[4rem] leading-[1.1] font-medium">
						16 Megapixel Still Image Resolution with Optical Image Stabilization
					</h3>
				</div>
				<div className="w-full fl-cr anidesc2">
					<p className="max-w-[696px] md:text-2xl leading-[1.5]">
						Preserve the moment with stunning high-resolution 16 megapixel
						photos suitable for cropping or enlarging. Advanced built-in optical
						image stabilization system helps prevent blur caused by camera shake
						and vibration, so your photos come out crisp & clear no matter what!
					</p>
				</div>
				<div className="w-full fl-tl flex-col-reverse md:fl-r md:fl-bl md:fl-sb gap-2 anidescimg1 invisible">
					<small className="text-xs md:text-base">2024</small>

					<div className="w-full relative md:w-1/2 flex-grow max-w-[1065px] fl-cc overflow-hidden aspect-[1.91/1]">
						<Image
							alt="photoshot"
							src={"/images/mnl_iii.png"}
							fill
							className="object-center object-cover"
						/>
					</div>
				</div>
			</section>

			<section className="w-full my-[4rem] md:my-[8.25rem] ref-pdg">
				<div className="w-full border-y border-[rgba(255,255,255,0.24)] py-8 md:py-[4rem] fl-cr">
					<div className="fl-tl fl-c gap-2 md:fl-r md:fl-sb  md:fl-cl w-full max-w-[1065px]">
						<div className="max-w-[415px] fl-tl fl-sb relative">
							<h3 className="text-2xl leading-[1.1]  md:text-5xl font-medium anidesc3">
								1080p Full HD <br />
								Video Recording
							</h3>
							<small className="text-xs md:text-base absolute right-0 top-4">
								(03)
							</small>
						</div>
						<p className="md:text-2xl max-w-[386px] leading-[1.5] anidesc4">
							Shoot crystal-clear high definition video in 1080p Full HD at a
							frame rate of 30 frames per second.
						</p>
					</div>
				</div>
			</section>

			<section className="w-full fl-tl fl-c gap-4 md:fl-r relative md:fl-tr ref-pdg">
				<div className="w-full md:w-[43.82vw] min-h-[300px] h-[44.5vw] max-w-[760px] max-h-[641px] fl-cr relative md:absolute md:left-0 overflow-hidden aniprodimg">
					<div className="h-full w-[48.8%] rounded-full bg-seccol"></div>
					<div className="absolute left-0 right-[6.4%]">
						<div className="relative w-full aspect-[1.92/1.25] fl-cc">
							<Image
								className="object-center object-cover"
								fill
								src={"/images/mnl_iv.png"}
								alt="side_view"
							/>
						</div>
					</div>
				</div>
				<div className="fl-tl fl-c gap-4 w-full md:w-1/2 aniproddets">
					<div className="fl-tl fl-c gap-4 w-full">
						<small className="text-xs md:text-base">(04)</small>
						<h3 className="font-medium text-4xl md:text-[3rem] lg:text-[4rem] leading-[1.1]">
							26 Intelligent Shooting Modes
						</h3>
						<p className="md:text-2xl leading-[1.5]">
							Intelligent scene modes cover a wide variety of shooting
							situations, select the mode suitable to your shot environment.
						</p>
					</div>
					<div className="w-full fl-tl fl-c gap-4">
						<div className="w-full fl-tl gap-2">
							<span className="fl-tl self-stretch">
								<sup className="font-semibold text-base md:text-2xl mt-3">
									$
								</sup>
								<h3 className="text-6xl md:text-[3.5rem] lg:text-[5.625rem] font-bold leading-none">
									228
								</h3>
							</span>
							<span className="fl-tl fl-c gap-1">
								<s className="font-medium md:text-2xl">$235.99</s>
								<span className="py-[0.25em] leading-none px-[1em] bg-txtcol whitespace-nowrap text-iitxtcol font-medium text-sm md:text-xl rounded-full">
									22% off
								</span>
							</span>
							<span className="fl-bl fl-c gap-2 md:gap-4 self-stretch fl-sb md:justify-start">
								<span className="fl-cl gap-1 ">
									{Array.from(new Array(5)).map((e, i) => (
										<BsStarFill
											className="size-4 md:size-6 lg:size-8 text-[--iiyellow]"
											key={i}
										/>
									))}
								</span>
								<span className="md:text-2xl">12.832 Review</span>
							</span>
						</div>
						<button className="w-full max-w-[199px] rounded-full px-4 py-2 border border-txtcol fl-cc gap-2">
							<span className="text-sm md:text-base">Start Shopping</span>
							<BsArrowRight className="size-4" />
						</button>
						<div className="w-full fl-cr">
							<small className="text-xs md:text-base">2024</small>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full def-pdg mt-[4rem] md:mt-[10rem]">
				<div className="w-full fl-cl flex-col-reverse md:fl-r gap-4 md:fl-sb bg-seccol text-iitxtcol rounded-[1.5rem] ref-pdg py-8 anicta2bg">
					<div className="fl-tl fl-c gap-2 max-w-[521px] md:gap-4 anicta2dets">
						<small className="text-xs md:text-base font-bold">(05)</small>
						<h2 className="font-bold text-4xl md:text-[3rem] lg:text-[4rem] leading-[1.1]">
							Built-In WiFi with App Integration
						</h2>
						<p className="text-sm md:text-base leading-[1.5]">
							Control your camera and download photos and videos with the
							built-in WiFi and the Minolta ProShot app integration.
						</p>
					</div>

					<div className="relative fl-cc overflow-hidden min-w-[300px] w-[28.15vw] aspect-[1.18/1] max-w-[405.36px] anicta2img">
						<Image
							alt="front-view"
							src={"/images/mnl_v.png"}
							fill
							className="object-center object-cover"
						/>
					</div>
				</div>
			</section>

			<section className="w-full fl-cc md:fl-cr ref-pdg mt-[4.5rem] lg:mt-[6.25rem] ">
				<div className="fl-bl pb-3 md:pb-6 border-b border-txtcol gap-8 md:w-[60vw] md:fl-sb hover:-translate-y-1 md:hover:bg-seccol md:hover:text-pricol duration-300 cursor-pointer">
					<h2 className="text-5xl md:text-[3.5rem] lg:text-[5rem] xl:text-[6.25rem] leading-[0.1] md:leading-none w-1/2 flex-grow">
						Subscribe
						<i className="text-2xl md:text-[1.25rem] lg:text-[2rem] not-italic">
							{" "}
							to our newsletter
						</i>
					</h2>
					<span className="fl-cc size-[3rem] rounded-full bg-[--iyellow] lg:size-[89px] mb-1.5">
						<BsArrowUpRight className="size-[1.75rem] lg:size-[2.5rem] text-iitxtcol" />
					</span>
				</div>
			</section>

			<footer className="mt-[4rem] md:mt-[7rem] w-full ref-pdg">
				<div className="w-full fl-tl fl-c gap-8 lg:fl-bl lg:fl-r lg:fl-sb">
					<div className="fl-tl fl-c gap-4 max-w-[407px]">
						<div className="fl-tl fl-c gap-2">
							<h3 className="text-[3rem]">MINOLTA.</h3>
							<p className="leading-[1.5]">
								Products with electrical plugs are designed for use in the US.
								Outlets and voltage differ internationally and this product may
								require an adapter or converter for use in your destination.
								Please check compatibility before purchasing.
							</p>
						</div>
						<div className="fl-tl gap-3 md:gap-6 fl-c">
							<p>Follow our social media below :</p>
							<div className="fl-cl gap-4">
								<span className="size-8 md:size-12 fl-cc rounded-full border border-[hsla(0,0%,93%,0.08)]">
									<YoutubeIcon className="size-4 md:size-6" />
								</span>
								<span className="size-8 md:size-12 fl-cc rounded-full border border-[hsla(0,0%,93%,0.08)]">
									<TiktokIcon className="size-4 md:size-6" />
								</span>
								<span className="size-8 md:size-12 fl-cc rounded-full border border-[hsla(0,0%,93%,0.08)]">
									<LinkedinIcon className="size-4 md:size-6" />
								</span>
								<span className="md:size-12 size-8 fl-cc rounded-full border border-[hsla(0,0%,93%,0.08)]">
									<InstagramIcon className="size-4 md:size-6" />
								</span>
								<span className="size-8 md:size-12 fl-cc rounded-full border border-[hsla(0,0%,93%,0.08)]">
									<FacebookIcon className="size-4 md:size-6" />
								</span>
							</div>
						</div>
					</div>
					<div className="fl-tl fl-c gap-8 md:fl-r w-full md:fl-sb max-w-[577px]">
						<div className="fl-tl fl-c gap-4 text-sm md:text-base">
							<h5 className="font-semibold">Help & Information</h5>
							<ul className="fl-tl fl-c gap-2 font-light">
								{["Terms & Condition", "Accecories", "Term of Use"].map(
									(e, i) => (
										<li key={e}>{e}</li>
									)
								)}
							</ul>
						</div>
						<div className="fl-tl fl-c gap-4 text-sm md:text-base">
							<h5 className="font-semibold">About Us</h5>
							<ul className="fl-tl fl-c gap-2 font-light">
								{[
									"Help Center",
									"Address Store",
									"Privacy Policy",
									"Receivers & Amplifiers",
									"Craftsandore",
								].map((e, i) => (
									<li key={e}>{e}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
				<div className="w-full fl-cc border-t border-[hsla(65,90%,79%,0.08)] py-8 mt-[2.5rem]">
					<span className="text-center text-sm md:text-base">
						© {new Date().getFullYear()} copyright BY Sansbro - Minolta
					</span>
				</div>
			</footer>
		</section>
	)
}
