import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
	// @ts-expect-error Plugin types mismatch
	plugins: [react()],
	test: {
		globals: true,
		// Enable  expectTypeOf(1).toEqualTypeOf(2) fns
		// https://github.com/vitest-dev/vitest/tree/main/examples/typecheck
		typecheck: {
			enabled: true,
		},
		browser: {
			enabled: true,
			name: "chromium",
			provider: "playwright",
			// https://playwright.dev
			providerOptions: {},
		},
	},
});
