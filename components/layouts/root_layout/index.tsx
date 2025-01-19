"use client"
import Navbar from "@/components/navbar"
import gsap from "gsap"
import ReactLenis, { useLenis } from "lenis/react"
import { ReactNode, useEffect, useRef } from "react"

export default function Layout({ children }: { children: ReactNode }) {
	const lenisRef = useRef<any>(null)
	const lenis = useLenis(({ scroll }) => {
		// called every scroll
	})

	useEffect(() => {
		function update(time: any) {
			lenisRef.current?.lenis?.raf(time * 1000)
		}

		gsap.ticker.add(update)

		return () => gsap.ticker.remove(update)
	}, [])

	return (
		<>
			<ReactLenis options={{ autoRaf: false }} ref={lenisRef} root>
				<Navbar />
				{children}
			</ReactLenis>
		</>
	)
}
