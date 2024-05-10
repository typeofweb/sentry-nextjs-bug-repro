import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Sentry repro",
};

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
			<html lang="en">
				<body>{children}
				</body>
			</html>
	);
}
