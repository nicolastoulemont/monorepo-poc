import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component23 } from "./Component23"

describe("Component23", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component23 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component23 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
