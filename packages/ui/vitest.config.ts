import { defineConfig } from "vitest/config"
import sharedConfig from "@poc/vitest-config"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
  // @ts-expect-error Plugin types mismatch
  plugins: [react()],
  test: {
    ...sharedConfig,
    // Potential overrides below
  },
})
