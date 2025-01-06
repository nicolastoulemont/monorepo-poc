import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component297 } from "./Component297"

describe("Component297", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component297 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component297 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
