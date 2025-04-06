import Navbar from "@/components/layouts/Navbar";
import type { ReactNode } from "react";

export default function PrivateLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<>
			<Navbar />
			<main className="container mx-auto p-4">{children}</main>
		</>
	);
}
