import { expect, describe, test } from "vitest"
import { render, fireEvent } from "@testing-library/react"
import { Component173 } from "./Component173"

describe("Component173", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Component173 />)
    expect(baseElement).toBeTruthy()
  })

  test("should increment counter when button is clicked", () => {
    const { getByRole } = render(<Component173 />)
    const button = getByRole("button")

    fireEvent.click(button)

    expect(button.textContent).toBe("Count is: 1")
  })
})
