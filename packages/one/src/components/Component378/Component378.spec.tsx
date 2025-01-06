import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component378 } from "./Component378"

describe("Component378", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component378 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component378 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
