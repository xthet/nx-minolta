import PlayButtonCircleIcon from "@/public/icons/play-button-circle"
import Image from "next/image"
import { BsArrowUpRight } from "react-icons/bs"

export default function Home() {
	return (
		<section className="w-full def-pdg">
			<section className="w-full h-svh fl-cc py-2 md:py-5">
				<div className="size-full bg-seccol rounded-[24px] fl-tl fl-c text-pricol overflow-hidden">
					{/* //!mobile */}
					<div className="size-full relative fl-tl fl-c fl-sb gap-2 pt-[5rem] px-2 md:hidden">
						<div className="fl-tl fl-c">
							<p className="text-[10px] font-semibold">(01)</p>
							<h1 className="font-bold text-[72px] leading-none font-fonthd">
								MINOLTA
								<br />
								PRO
								<br />
								16
							</h1>
							<p className="text-[10px] font-semibold">
								{new Date().getFullYear()}
							</p>
						</div>
						<div className="w-full fl-cr mt-auto mb-12">
							<div className="fl-bl fl-c gap-2 max-w-[60%]">
								<p className="text-right">
									Capture sharp images and Full HD (1080p) videos with the
									Minolta Pro Shot 16 Mega Pixel HD Digital Camera
								</p>
								<p className="fl-br gap-1 pb-1 border-b border-pricol font-semibold text-right">
									Read More
								</p>
							</div>
						</div>
						<div className="w-full fl-cl fl-sb gap-2 mb-2">
							<button className="w-1/2 flex-grow self-stretch font-medium text-defcol bg-[--iorange] fl-cc cursor-pointer hover:text-[--iorange] hover:bg-defcol rounded-full text-center">
								Start Shopping
							</button>
							<PlayButtonCircleIcon className="size-10 text-[--iorange]" />
						</div>
						<div className="absolute top-0 bottom-0 right-0 left-0 z-10 fl-cc">
							<div className="relative size-[90vw] z-30 right-4 bottom-2">
								<Image
									alt="hero-img-i"
									src={"/images/mnl_i.png"}
									fill
									className="object-center object-cover"
								/>
							</div>
							<div className="absolute size-[90vw] z-20">
								<Image
									alt="hero-img-ii"
									src={"/images/mnl_ii.png"}
									fill
									className="object-center object-cover"
								/>
							</div>
						</div>
						<div className="absolute bottom-[4rem] left-2 fl-cl">
							<div className="size-[40vw]">
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
					<div className="hidden md:fl-cl md:fl-c pt-[4rem] size-full">
						<div className="mx-auto fl-cl fl-c">
							<h1 className="font-fonthd font-bold text-[11.3vw] 2xl:text-[10.625rem] text-center whitespace-nowrap leading-none">
								MINOLTA PRO 16
							</h1>
							<p className="self-stretch fl-cl fl-sb font-semibold pl-[10px] pr-3">
								<span>(01)</span>
								<span>{new Date().getFullYear()}</span>
							</p>
						</div>
						<div className="absolute top-0 bottom-0 right-0 left-0 z-10 fl-bc pb-8">
							<div className="relative size-[40vw] z-30 right-8 bottom-4 max-w-[704px] max-h-[738px]">
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
						<div className="absolute right-[7rem] top-[40%] fl-cl">
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
							<div className="fl-tl fl-c gap-8 w-[21vw]">
								<p className="font-medium text-5xl">
									Minolta Pro Shot 16 Mega Pixel HD Digital Camera
								</p>
								<div className="w-full fl-cl fl-sb gap-2 mb-2">
									<button className="w-1/2 flex-grow self-stretch font-medium text-defcol bg-[--iorange] fl-cc cursor-pointer hover:text-[--iorange] hover:bg-defcol rounded-full text-center">
										Start Shopping
									</button>
									<PlayButtonCircleIcon className="size-10 text-[--iorange]" />
								</div>
							</div>
							<div className="fl-tl fl-c gap-5 w-[13vw]">
								<p className="font-medium text-2xl">
									Captures sharp images and Full HD (1080p) video
								</p>
								<p className="fl-br gap-1 pb-1 border-b border-pricol font-semibold text-right">
									Read More
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="w-full def-pdg py-[3rem] fl-cl fl-c gap-4 md:fl-r md:fl-sb">
				<p>Sold on</p>
				<div>
					<span className="relative">
						<img
							src={"/images/amazon.svg"}
							alt="trusted"
							className="object-center object-cover"
						/>
					</span>
				</div>
			</section>
		</section>
	)
}
