import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component77 } from "./Component77"

describe("Component77", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component77 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component77 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
