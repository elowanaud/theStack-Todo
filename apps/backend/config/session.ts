import env from "#start/env";
import { defineConfig, stores } from "@adonisjs/session";

const sessionConfig = defineConfig({
	enabled: true,
	cookieName: "adonis-session",
	clearWithBrowser: false,
	age: "2h",
	cookie: {
		domain: `.${env.get("DOMAIN")}`,
		path: "/",
		httpOnly: true,
		secure: true,
		sameSite: "none",
	},
	store: env.get("SESSION_DRIVER"),
	stores: {
		cookie: stores.cookie(),
	},
});

export default sessionConfig;
