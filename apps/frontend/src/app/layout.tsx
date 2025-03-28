import type { ReactNode } from "react";
import "@/assets/styles/index.css";
import { Providers } from "@/providers";

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
