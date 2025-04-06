import { getApi } from "@/lib/api/server";
import { AuthProvider } from "@/providers/Auth";
import { I18nProvider } from "@/providers/I18n";
import { NuqsProvider } from "@/providers/Nuqs";
import { PageLoadingBarProvider } from "@/providers/PageLoadingBar";
import { ReactQueryProvider } from "@/providers/ReactQuery";
import { ReactScanProvider } from "@/providers/ReactScan";
import { ToasterProvider } from "@/providers/Toaster";
import { headers } from "next/headers";
import type { PropsWithChildren } from "react";

export async function Providers({ children }: PropsWithChildren) {
	const { data: currentUser } = await getApi(await headers()).auth.me.$get();

	return (
		<>
			<I18nProvider>
				<ReactQueryProvider>
					<NuqsProvider>
						<AuthProvider currentUser={currentUser}>
							<ReactScanProvider />
							<PageLoadingBarProvider />
							{children}
							<ToasterProvider />
						</AuthProvider>
					</NuqsProvider>
				</ReactQueryProvider>
			</I18nProvider>
		</>
	);
}
