import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component322 } from "./Component322"

describe("Component322", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component322 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component322 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
