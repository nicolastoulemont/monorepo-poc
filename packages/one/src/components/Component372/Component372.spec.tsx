import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component372 } from "./Component372"

describe("Component372", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component372 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component372 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
