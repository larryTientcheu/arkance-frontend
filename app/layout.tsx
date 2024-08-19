import Nav from "@/components/nav";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const ws = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Arkance - GS",
	description: "Evaluation Larry Jordan",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${ws.className}`}>
				<main className="min-h-screen items-center w-full justify-between mx-auto p-8 md:p-24 md:w-3/4">
					<Nav></Nav>
					<div className="z-10 w-full items-center justify-between text-sm lg:flex">
						{children}
					</div>
				</main>
				<Toaster />
			</body>
		</html>
	);
}
