import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component438 } from "./Component438"

describe("Component438", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component438 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component438 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
