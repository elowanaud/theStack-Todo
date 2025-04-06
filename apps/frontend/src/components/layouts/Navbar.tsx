import { LogoutButton } from "@/features/auth/logout/components/LogoutButton";

export default function Navbar() {
	return (
		<header className="shadow">
			<nav className="container mx-auto flex h-16 items-center justify-between px-4">
				<h1 className="font-bold text-xl">Todo</h1>
				<LogoutButton />
			</nav>
		</header>
	);
}
