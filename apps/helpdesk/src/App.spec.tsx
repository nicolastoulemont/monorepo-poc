import { expect, describe, test } from "vitest"
import { render } from '@testing-library/react';
import { App } from "./App"


describe("App", () => {
  test("Renders App", () => {
    const { getByText } = render(<App />)
    expect(getByText("Hello Vitest!!")).toBeInTheDocument()
  })
})
