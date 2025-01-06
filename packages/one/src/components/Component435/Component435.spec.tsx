import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component435 } from "./Component435"

describe("Component435", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component435 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component435 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
