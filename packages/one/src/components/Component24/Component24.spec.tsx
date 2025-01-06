import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component24 } from "./Component24"

describe("Component24", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component24 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component24 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
