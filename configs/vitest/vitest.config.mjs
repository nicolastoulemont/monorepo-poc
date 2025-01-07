/** @type {import('vitest').UserConfig} */
export default {
  globals: true,
  // Enable  expectTypeOf(1).toEqualTypeOf(2) fns
  // https://github.com/vitest-dev/vitest/tree/main/examples/typecheck
  typecheck: {
    enabled: true,
  },
  environment: 'happy-dom',
  setupFiles: ['./vitest.setup.ts']
}
