import { useGSAP } from "@gsap/react"
import { RefObject } from "react"
import SplitType from "split-type"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function useHomeAnimations(scope: RefObject<any>) {
	gsap.registerPlugin(useGSAP)
	gsap.registerPlugin(ScrollTrigger)
	useGSAP(
		() => {
			gsap.from(".anih1, .anilbl1", {
				y: "+=20",
				opacity: 0,
				ease: "power4.inOut",
				delay: 0.3,
				duration: 1.3,
				autoAlpha: 0,
				stagger: {
					amount: 0.3,
				},
			})

			gsap.from(".aniheroimg", {
				y: "-=30",
				opacity: 0,
				ease: "power4.inOut",
				delay: 0.5,
				duration: 1.3,
				autoAlpha: 0,
			})

			gsap.from(".anisubh, .anicta", {
				x: "+=40",
				opacity: 0,
				ease: "power4.inOut",
				delay: 0.3,
				duration: 1.5,
				autoAlpha: 0,
			})

			gsap.from(".anidesc1", {
				scrollTrigger: {
					trigger: ".anidesc1",
					toggleActions: "restart pause reverse pause",
					end: "bottom center",
					scrub: 0.4,
				},
				opacity: 0,
				x: 40,
				duration: 1.8,
			})

			gsap.from(".anidesc2", {
				scrollTrigger: ".anidesc2",
				opacity: 0,
				x: -40,
				duration: 1.8,
				delay: 0.2,
			})

			gsap.from(".anidescimg1", {
				scrollTrigger: {
					trigger: ".anidescimg1",
					start: "top center",
				},
				opacity: 0,
				x: -100,
				duration: 1.8,
				autoAlpha: 0,
			})

			new SplitType(".anidesc3")
			gsap.from(".anidesc3 .char", {
				scrollTrigger: ".anidesc3",
				opacity: 0,
				y: 40,
				ease: "back(1.7)",
				stagger: 0.05,
			})

			new SplitType(".anidesc4")
			gsap.from(".anidesc4 .char", {
				scrollTrigger: ".anidesc4",
				opacity: 0,
				x: 40,
				stagger: 0.01,
			})

			gsap.from(".aniprodimg", {
				scrollTrigger: {
					trigger: ".aniprodimg",
					scrub: 1.2,
					end: "bottom center",
				},
				opacity: 0,
				x: -100,
				duration: 1.8,
				delay: 0.3,
				ease: "back(1.7)",
				// autoAlpha: 0,
			})

			gsap.from(".aniproddets *", {
				scrollTrigger: {
					trigger: ".aniproddets",
					// scrub: 1.3,
					end: "bottom 98%",
					toggleActions: "play none none none",
				},
				opacity: 0,
				y: -50,
				stagger: 0.04,
			})

			gsap.from(".anicta2bg", {
				scrollTrigger: ".anicta2bg",
				y: "-=30",
				opacity: 0,
				ease: "power4.inOut",
				duration: 1.5,
			})

			gsap.from(".anictadets", {
				scrollTrigger: ".anicta2bg",
				x: "-=60",
				opacity: 0,
				ease: "power4.inOut",
				duration: 2,
			})

			gsap.from(".anicta2img", {
				scrollTrigger: ".anicta2bg",
				x: "+=50",
				opacity: 0,
				ease: "power4.inOut",
				duration: 1.3,
			})
		},
		{ scope }
	)
}
