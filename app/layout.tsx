import type { Metadata } from "next"
import { Poppins } from "next/font/google"

import Layout from "@/components/layouts/root_layout"
import { get_base_url } from "@/utils/get_base_url"
import localFont from "next/font/local"
import "./colors.css"
import "./globals.css"

export const metadata: Metadata = {
	title: "Minolta",
	description: "Minolta — Capture your vision in HD",
	openGraph: {
		title: "Minolta",
		description: "Minolta — Capture your vision in HD",
		url: `${get_base_url()}`,
		images: [""],
		siteName: "minolta.com",
		type: "website",
	},
	metadataBase: new URL(`${get_base_url()}`),
}

const poppins = Poppins({
	display: "swap",
	subsets: ["latin"],
	variable: "--font-hd",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const satoshi = localFont({
	src: "./Satoshi-Variable.woff2",
	display: "swap",
	variable: "--font-def",
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${satoshi.variable} ${poppins.variable}`}>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
