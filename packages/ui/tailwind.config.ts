import type { Config } from "tailwindcss";
import sharedConfig from "@poc/tailwind-config";

const config: Config = {
	presets: [sharedConfig],
	content: ["./src/**/*.tsx"],
};

export default config;
