import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component135 } from "./Component135"

describe("Component135", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component135 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component135 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
