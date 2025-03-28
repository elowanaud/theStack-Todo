"use client";

import { LogoutButton } from "@/features/auth/logout/components/LogoutButton";
import { useAuth } from "@/providers/Auth";

export default function HomePage() {
	const { currentUser } = useAuth((state) => state);

	return (
		<div>
			<h1>Private page</h1>
			<LogoutButton />
			<pre>{JSON.stringify(currentUser, null, 2)}</pre>
		</div>
	);
}
