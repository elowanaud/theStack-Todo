import { Link } from "@/components/ui/Link";
import { LoginForm } from "@/features/auth/login/components/LoginForm";
import { useTranslations } from "next-intl";

export default function LoginPage() {
	const t = useTranslations("app.login");

	return (
		<main className="flex min-h-screen items-center justify-center">
			<div className="grid w-full max-w-sm gap-6 p-4">
				<div className="grid gap-1">
					<h1 className="font-bold text-2xl text-neutral-950">{t("title")}</h1>
					<p className="text-neutral-500 text-sm">
						{t("dontHaveAccount")} <Link href="/register">{t("register")}</Link>
					</p>
				</div>
				<LoginForm />
			</div>
		</main>
	);
}
