"use client";

import { useEffect } from "react";
import { scan } from "react-scan";

export function ReactScanProvider() {
	useEffect(() => {
		scan({
			enabled: true,
			trackUnnecessaryRenders: true,
		});
	}, []);

	return null;
}
