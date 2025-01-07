import { expect, describe, test } from "vitest"
import { render } from '@testing-library/react';
import { Button } from "./Button"


describe("Button", () => {
  test("Renders children", () => {
    const { getByText } = render(<Button>Hello Vitest!!</Button>)
    expect(getByText("Hello Vitest!!")).toBeInTheDocument()
  })
})
