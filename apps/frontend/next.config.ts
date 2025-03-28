import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
	output: "standalone",
	reactStrictMode: true,
	transpilePackages: ["@the-stack/backend"],
	webpack: (config) => {
		config.resolve.extensionAlias = {
			".js": [".ts", ".tsx", ".js", ".jsx"],
			".mjs": [".mts", ".mjs"],
			".cjs": [".cts", ".cjs"],
		};
		return config;
	},
};

const withNextIntl = createNextIntlPlugin("./src/lib/i18n.ts");
export default withNextIntl(nextConfig);
